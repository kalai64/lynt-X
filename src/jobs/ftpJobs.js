import { PrismaClient } from '@prisma/client';
import Client from 'ssh2-sftp-client';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { PDFDocument } from 'pdf-lib';
import axios from 'axios';



const prisma = new PrismaClient();

async function processFTPUploads() {
  console.log('⏰ Starting FTP batch processing...');

  const sftp = new Client();
  const pattern = /^\d{5}-\d{8}-\d{2}$/;

  try {
    const credentials = await prisma.ftp.findFirst({
      where: { organizationId: 3 },
    });

    console.log('credentials', credentials);

    if (!credentials || !credentials.host || !credentials.username || !credentials.password) {
      throw new Error('SFTP credentials are missing or incomplete');
    }

    await sftp.connect({
      host: credentials.host,
      port: credentials.port || 22,
      username: credentials.username,
      password: credentials.password,
    });

    const files = await sftp.list(credentials.ftppath);

    const lastBatch = await prisma.batches.aggregate({
      where: { organizationId: 3 },
      _max: { uniqueid: true },
    });

    console.log('lastBatch', lastBatch);
    console.log('files', files);

    let nextUniqueId = lastBatch._max.uniqueid ? lastBatch._max.uniqueid + 1 : 2110;

    console.log('nextUniqueId', nextUniqueId);

    for (const file of files) {
      const { name } = file;

      const exists = await prisma.batches.findFirst({
        where: { batchname: name },
      });

      console.log('exists', exists, name);

      if (!exists) {
        await prisma.batches.create({
          data: {
            batchname: name,
            status: 0,
            folderpath: credentials.ftppath,
            createdat: new Date(),
            updatedat: new Date(),
            uniqueid: nextUniqueId,
            organizationId: credentials.organizationId,
            isactive: true,
          },
        });

        nextUniqueId++;
      }
    }

    await sftp.end();
    console.log('✅ FTP Process Completed Successfully');
  } catch (error) {
    console.error('🔥 Error in FTP Processing:', error.message);
    await sftp.end();
  }
}



/* end ftp folder code */ 

async function extractTextFromAzureOCR(localFilePath) {

  console.log("localFilePath",localFilePath);
  const AZURE_OCR_ENDPOINT = process.env.AZURE_OCR_ENDPOINT;
  const AZURE_OCR_KEY = process.env.AZURE_OCR_KEY;

  console.log("keys",AZURE_OCR_ENDPOINT,AZURE_OCR_KEY);

  const apiUrl = `${AZURE_OCR_ENDPOINT}vision/v3.2/read/analyze`;
  const fileData = fs.readFileSync(localFilePath);

  try {
    const response = await axios.post(apiUrl, fileData, {
      headers: {
        'Content-Type': 'application/pdf',
        'Ocp-Apim-Subscription-Key': AZURE_OCR_KEY,
      },
    });

    const operationLocation = response.headers['operation-location'];
    if (!operationLocation) throw new Error('Failed to get OCR operation location.');

    // Poll for result (up to 10 attempts, 2 seconds apart)

    console.log("operationLocation",operationLocation);
    let result;
    for (let attempt = 0; attempt < 10; attempt++) {
      await new Promise(res => setTimeout(res, 2000));
      const resultResponse = await axios.get(operationLocation, {
        headers: { 'Ocp-Apim-Subscription-Key': AZURE_OCR_KEY },
      });

      if (resultResponse.data.status === 'succeeded') {
        result = resultResponse.data.analyzeResult;
        break;
      } else if (resultResponse.data.status === 'failed') {
        throw new Error('OCR processing failed.');
      }
    }

    console.log("result",result);

    if (!result) throw new Error('OCR processing timed out.');

    // Extract and return text
    return result.readResults
      .map(page => page.lines.map(line => line.text).join('\n'))
      .join('\n\n') || '--';
  } catch (err) {
    console.error('Azure OCR Error:', err.message);
    return '--';
  }
}




/* Start image collection data functions */


async function processBatches() {
 
  const prisma = new PrismaClient();

  const sftp = new Client();
  try {
    const credentials = await prisma.ftp.findFirst({
      where: { organizationId: 3 },
    });

    if (!credentials) throw new Error("No SFTP credentials found");

    await sftp.connect({
      host: credentials.host,
      port: credentials.port || 22,
      username: credentials.username,
      password: credentials.password,
    });

    const batches = await prisma.batches.findMany({
      where: { status: 0 },
      select: { batchname: true,organizationId: true },
    });

    if (!batches.length) {
      console.log("No unprocessed batches found.");
      return;
    }

    const existingFiles = await prisma.imagecollections.findMany({
      select: { filename: true, batchname: true },
    });

    const fileBatchMap = new Map();
    existingFiles.forEach(({ filename, batchname }) => {
      const fileNameOnly = filename.split("/").pop();
      if (!fileBatchMap.has(fileNameOnly)) {
        fileBatchMap.set(fileNameOnly, new Set());
      }
      fileBatchMap.get(fileNameOnly).add(batchname);
    });

    for (const batch of batches) {
      console.log("batchbatch",batch);
      const batchname = batch.batchname;
      console.log(`Processing batch: ${batchname}`);

      const files = await sftp.list(`${credentials.ftppath}/${batchname}`);

      for (const file of files) {
        const { name } = file;
        const filePath = `${credentials.ftppath}/${batchname}/${name}`;
        const fileData = await sftp.get(filePath);

        const existingFile = await prisma.imagecollections.findFirst({
          where: { filename: `${batchname}/${name}` },
        });

       

        const fileNameOnly = name;
        const isDuplicate = fileBatchMap.has(fileNameOnly) && !fileBatchMap.get(fileNameOnly).has(batchname);

        const lastBatch = await prisma.imagecollections.aggregate({
          _max: { uniqueid: true },
        });

        const nextUniqueId = lastBatch._max.uniqueid ? lastBatch._max.uniqueid + 1 : 1110;

        const imageUrl = await uploadToLocalStorage(fileData, `${batchname}/${name}`);
        console.log("imageUrl",imageUrl)
        console.log("batch",batch); 


        const localFilePath = path.join(process.cwd(), 'public', imageUrl); // added for ocr text
        const ocrText = await extractTextFromAzureOCR(localFilePath);// added for ocr text



        await prisma.imagecollections.create({
          data: {
            filename: `${batchname}/${name}`,
            image: imageUrl,
            status: "notprocessed",
            batchname: batchname,
            uniqueid: nextUniqueId,
            created_date: new Date(),
            processed_date: new Date(),
            isactive: true,
            createdat: new Date(),
            updatedat: new Date(),
            file_type: "--",
           // ocr_full_text: "--",
            ocr_full_text: ocrText, // ✅ Store OCR Text
            stage: "--",

            header_locked: false,
            party_locked: false,
            legal_locked: false,

            headerstatus: "--",
            legalstatus: "--",
            partystatus: "--",

            headerlocked_timing: null,
            legallocked_timing: null,
            partylocked_timing: null,

            indexing_assigned: 0,
            header_assigned: 0,
            propertyindex_assigned: 0,

            indexing_locked: false,
            propertyindex_locked: false,

            propertyindexstatus: "--",
            indexinglocked_timing: null,
            propertyindexlocked_timing: null,

            indexing_completed: null,
            propertyindex_completed: null,
            header_completed: null,
            party_completed: null,
            legal_completed: null,

            qc_locked: false,
            qc_assigned: 0,
            qc_completed: null,

            indexlocked_timing: null,
            pilocked_timing: null,

            duplicatestatus: isDuplicate ? "1" : "0", // It's a String in your schema

            pi_pending_queue: "--",
            legal_pending_queue: "--",
            qcstatus: "--",

            indexingcompleted_timing: null,
            propertyindexcompleted_timing: null,
            headercompleted_timing: null,
            partycompleted_timing: null,
            legalcompleted_timing: null,
            qccompleted_timing: null,

            organizationId: batch.organizationId,
          },
        });


        console.log(`Stored ${name} in imagecollections.`);
      }

      await prisma.batches.updateMany({
        where: { batchname: batchname },
        data: { status: 1 },
      });

      console.log(`Batch ${batchname} processed.`);
    }

    await sftp.end();
  } catch (error) {
    console.error("Processing Error:", error);
    await sftp.end();
  }
}

const uploadToLocalStorage = async (buffer, filename) => {
  let filename2 = filename.trimStart();

  if (filename.toLowerCase().endsWith('.tiff') || filename.toLowerCase().endsWith('.tif')) {
    console.log(`Converting ${filename} to PDF...`);
    const pdfDoc = await PDFDocument.create();
    const image = Buffer.from(buffer);
    const metadata = await sharp(image).metadata();

    for (let i = 0; i < (metadata.pages || 1); i++) {
      const pageBuffer = await sharp(image, { page: i }).png().toBuffer();
      const { width, height } = await sharp(pageBuffer).metadata();
      const pngImage = await pdfDoc.embedPng(pageBuffer);
      const page = pdfDoc.addPage([width, height]);
      page.drawImage(pngImage, { x: 0, y: 0, width, height });
    }

    buffer = Buffer.from(await pdfDoc.save());
    filename2 = filename2.replace(/\.tiff?$/i, '.pdf');
  }

  const uploadPath = path.join(process.cwd(), 'public', 'uploads', filename2);
  fs.mkdirSync(path.dirname(uploadPath), { recursive: true });
  fs.writeFileSync(uploadPath, buffer);

  return `/uploads/${filename2}`;
};

 




/* end image collection data store proess */

// console.log('⏰ came in ftpjob page...');
// cron.schedule('*/1 * * * *', async () => {
//   console.log('⏰ Cron Job Started...');
//   try {
//     await processFTPUploads();
//     await processBatches();
//     console.log('✅ Cron Job Completed Successfully');
//   } catch (error) {
//     console.error('🔥 Error in Cron Job:', error);
//   }
// });


// Export functions to use in API routes or elsewhere
export { processFTPUploads, processBatches };

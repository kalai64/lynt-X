import next from 'next';
import express from 'express';
import cron from 'node-cron';
 import { processFTPUploads, processBatches } from './src/jobs/ftpJobs.js';

const PORT = 3001;
const HOST = 'localhost';

const app = next({ dev: true, hostname: HOST, port: PORT });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Start the cron job immediately
  cron.schedule('*/1 * * * *', async () => {
    console.log('⏰ Auto Cron Job Started...');
    try {
     // await processFTPUploads();
     // await processBatches();
      console.log('✅ Cron Job Completed Successfully');
    } catch (error) {
      console.error('🔥 Error in Cron Job:', error);
    }
  });

  //server.all('*', (req, res) => handle(req, res));
   server.use((req, res) => handle(req, res));

  server.listen(PORT, HOST, () => {
    console.log(`🚀 Server running at http://${HOST}:${PORT}`);
  });
});

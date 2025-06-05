import cron from 'node-cron';
import { processFTPUploads, processBatches } from './ftpJobs.js';

cron.schedule('*/1 * * * *', async () => {
  console.log('⏰ Auto Cron Job Started123...');
  try {
    await processFTPUploads();
    await processBatches();
    console.log('✅ Cron Job Completed Successfully');
  } catch (error) {
    console.error('🔥 Error in Cron Job:', error);
  }
});

console.log('🚀 Cron Runner Started...');

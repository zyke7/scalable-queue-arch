import { Worker } from 'bullmq';
import sendEmailConfig from './send-email.config';
import SendEmailProcessor from './send-email.processor';

const instance = new SendEmailProcessor();

const { queueName, connection, isSandboxed } = sendEmailConfig;

const processor = isSandboxed ? `${__dirname}/test.slave.js` : instance.handle;

const worker = new Worker(queueName, processor, {
  connection
});

worker.on('failed', instance.failed);
worker.on('completed', instance.completed)

export default worker;
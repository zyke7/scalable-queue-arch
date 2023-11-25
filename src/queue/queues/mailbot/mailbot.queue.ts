import { Queue } from 'bullmq';
import mailbotConfig from './mailbot.config';

const { queueName, connection, defaultJobOptions } = mailbotConfig;

const MailbotQueue = new Queue(queueName, {
  connection,
  defaultJobOptions
});

export default MailbotQueue;
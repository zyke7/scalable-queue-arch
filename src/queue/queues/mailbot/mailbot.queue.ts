import { Queue } from 'bullmq';
import mailbotConfig from './mailbot.config';

const { queueName, connection } = mailbotConfig;

const MailbotQueue = new Queue(queueName, {
  connection
})

export default MailbotQueue;
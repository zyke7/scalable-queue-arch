import { Queue } from 'bullmq';
import defaultConfig from './default.config';

const { queueName, connection } = defaultConfig;

const DefaultQueue = new Queue(queueName, {
  connection
})

export default DefaultQueue;
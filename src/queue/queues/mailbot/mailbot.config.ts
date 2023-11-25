import rootConfig from '../../config';
import { QueueConfigType } from '../../types';
import { QueuesEnum } from '../../constants';


const config: QueueConfigType = {
  ...rootConfig,
  queueName: QueuesEnum.MAILBOT,
}

export default config;
import { ConnectionOptions } from 'bullmq';

export const connection: ConnectionOptions = {
  host: process.env.REDIS_HOST || 'localhost',
  port: +(process.env.REDIS_PORT || 6379)
}

export default {
  connection
}

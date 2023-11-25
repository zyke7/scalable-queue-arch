import { Server } from 'http';

import app from './app';
import { QueueUtils } from './queue';

const PORT = process.env.PORT || 3000;
let server: Server;

const listen = () => {
  server = app.listen(PORT, () => {
    QueueUtils.initializeJobs();
    console.log(`Server running at port ${PORT}`);
  })
};

listen();
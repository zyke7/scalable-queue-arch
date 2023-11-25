import { SendEmailWorker } from './jobs';

const WorkerMap = new Map([
  ['SendEmail', SendEmailWorker]
]);

/**
 * Initialize workers by binding an event listener to it
 */

export function initializeJobs() {
  WorkerMap.forEach((worker) => {
    worker.on('error', err => {
      console.error(err);
    });
  })
}

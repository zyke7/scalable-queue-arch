import { SendEmailWorker } from './jobs';

const JobMap = new Map([
  ['SendEmail', SendEmailWorker]
])

/**
 * Initialize workers by binding an event listener to it
 */

export function initializeJobs() {
  JobMap.forEach((worker) => {
    worker.on('error', err => {
      console.error(err);
    });
  })
}

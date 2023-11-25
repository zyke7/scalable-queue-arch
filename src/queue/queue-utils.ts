import { SendEmailWorker } from './jobs';

const JobMap = new Map([
  ['SendEmail', SendEmailWorker]
])

/**
 * Initiate workers by binding and event listener to it
 */

export function initiateJobs() {
  JobMap.forEach((worker) => {
    worker.on('error', err => {
      console.error(err);
    });
  })
}

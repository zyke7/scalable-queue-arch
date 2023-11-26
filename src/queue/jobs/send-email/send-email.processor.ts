import { Job } from 'bullmq';
import { ProcessorDef } from '../processor.def';

export default class SendEmailProcessor implements ProcessorDef {
  
  constructor() { }

  async handle(job: Job) {
    // Actual Code to send emails
    console.log({ job })
  }
  
  failed(job?: Job) { 
    console.log({ job })
  }
  
  completed(job: Job) { 
    console.log({ job })
  }

}

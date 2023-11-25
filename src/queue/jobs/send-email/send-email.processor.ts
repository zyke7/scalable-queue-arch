import { Job } from 'bullmq';
import { ProcessorDef } from '../processor.def';


export default class SendEmailProcessor implements ProcessorDef {

  constructor() { }

  async handle(job: Job) {
    // Code to send Email
    console.log({ job })
  }

  failed(job?: Job) {

  }

  completed(job: Job<any, any, string>) {

  }

}
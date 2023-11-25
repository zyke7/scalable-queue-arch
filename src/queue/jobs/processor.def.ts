import { Job } from "bullmq";

export interface ProcessorDef {
  handle: (job: Job) => Promise<any>,
  completed?: (job: Job) => void,
  failed?: (job?: Job) => void
}
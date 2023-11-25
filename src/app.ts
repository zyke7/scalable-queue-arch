import express, { Request, Response, Application } from 'express';
import { MailbotQueue, JobsEnum } from './queue';

const app: Application = express();

app.get("/", (req: Request, res: Response): void => {
  MailbotQueue.add(JobsEnum.SEND_EMAIL, { email: 'test@test.com' });
  res.send("OK");
});

export default app;

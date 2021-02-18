import express, { Request, Response, NextFunction } from 'express';
import utils from './utils/index';

const app = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.json({
    timeStamp: utils.getTimeStamp(),
  });
});

export default app;

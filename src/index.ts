import express, { Response, Request, NextFunction } from 'express';
const app = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.json({
    message: 'Wellcome to main api',
    success: true,
  });
});

app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});

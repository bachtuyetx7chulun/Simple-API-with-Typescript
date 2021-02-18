import { PORT } from './configs';
import app from './server';

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

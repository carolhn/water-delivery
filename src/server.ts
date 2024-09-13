import 'dotenv';
import app from './app';

const PORT = process.env.PORT || 5333;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}💧`);
});

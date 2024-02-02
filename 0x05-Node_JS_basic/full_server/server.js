import express from 'express';
import routes from './routes';

const app = express();
const PORT = 1245;

app.use('/', routes);

// Export the express app
export default app;

// Start the server
if (require.main === module) {
  const databaseFile = process.argv[2];
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Database file: ${databaseFile}`);
  });
}

import express from 'express';
import mapRoutes from './routes/index.js';
import path from 'path';

const app = express();
const PORT = 1245;

// Get database path from command line argument or use default
const DEFAULT_DB_PATH = path.join(process.cwd(), 'database.csv');
const databasePath = process.argv[2] ? path.resolve(process.argv[2]) : DEFAULT_DB_PATH;

// Store in app.locals for access in controllers
app.locals.databasePath = databasePath;

mapRoutes(app);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Using database: ${databasePath}`);
});

export default app;

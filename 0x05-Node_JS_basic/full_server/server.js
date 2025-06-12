import express from 'express';
import mapRoutes from './routes/index.js';
import path from 'path';

const app = express();
const PORT = 1245;

// Get database path relative to project root
const databasePath = path.join(__dirname, '..', 'database.csv');
app.locals.databasePath = databasePath;

mapRoutes(app);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Database path: ${databasePath}`);
});

export default app;

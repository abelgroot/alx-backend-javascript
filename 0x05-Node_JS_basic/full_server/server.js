import express from 'express';
import routes from './routes/index.js';

const database = process.argv[2];

const app = express();

// Store database path in app locals for use in controllers
app.locals.dbPath = database;

app.use('/', routes);

app.listen(1245);

export default app;

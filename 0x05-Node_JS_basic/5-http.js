const http = require('http');
const fs = require('fs');

const database = process.argv[2];

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.trim().split('\n').filter((line) => line);
    const students = lines.slice(1).map((line) => line.split(','));
    const fields = {};

    for (const student of students) {
      const field = student[3];
      if (!fields[field]) fields[field] = [];
      fields[field].push(student[0]);
    }

    const total = students.length;
    const summary = [`Number of students: ${total}`];

    for (const [field, names] of Object.entries(fields)) {
      summary.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }

    resolve(summary.join('\n'));
  });
});

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(database)
      .then((output) => {
        res.statusCode = 200;
        res.end(`This is the list of our students\n${output}`);
      })
      .catch(() => {
        res.statusCode = 200;
        res.end('This is the list of our students\nCannot load the database');
      });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(1245);

module.exports = app;

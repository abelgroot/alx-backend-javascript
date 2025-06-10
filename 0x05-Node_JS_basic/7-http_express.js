const express = require('express');
const fs = require('fs');

const app = express();

const databaseFile = process.argv[2];

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      // Remove header
      const students = lines.slice(1);
      const fields = {};
      students.forEach((student) => {
        const parts = student.split(',');
        if (parts.length === 4) {
          const [firstname, , , field] = parts;
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      });

      let result = `Number of students: ${students.length}\n`;
      for (const field in fields) {
        const list = fields[field].join(', ');
        result += `Number of students in ${field}: ${fields[field].length}. List: ${list}\n`;
      }
      resolve(result.trim());
    });
  });
}

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello ALX!');
});

app.get('/students', async (req, res) => {
  res.type('text/plain');
  if (!databaseFile) {
    res.send('No database file specified');
    return;
  }
  try {
    const studentsInfo = await countStudents(databaseFile);
    res.send(`This is the list of our students\n${studentsInfo}`);
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(1245);

module.exports = app;

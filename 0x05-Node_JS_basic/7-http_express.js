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
      const header = lines.shift();
      if (!header) {
        resolve('Number of students: 0');
        return;
      }

      const fields = {};
      const students = lines.map((line) => line.split(','));

      students.forEach((student) => {
        const field = student[student.length - 1];
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(student[0]);
      });

      const total = students.length;
      let output = `Number of students: ${total}`;
      Object.entries(fields).forEach(([field, names]) => {
        output += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
      });

      resolve(output);
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  try {
    const report = await countStudents(databaseFile);
    res.send(`This is the list of our students\n${report}`);
  } catch (err) {
    res.send(`This is the list of our students\n${err.message}`);
  }
});

app.listen(1245);

module.exports = app;

// 2-read_file.js

const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1); // skip header

    const total = students.length;
    console.log(`Number of students: ${total}`);

    const fields = {};

    students.forEach((line) => {
      const parts = line.split(',');
      const firstName = parts[0];
      const field = parts[3];

      if (field && firstName) {
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      }
    });

    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

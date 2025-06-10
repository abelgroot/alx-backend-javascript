const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter(line => line.trim() !== '');
      const students = lines.slice(1).map(line => line.split(','));
      const fields = {};

      for (const student of students) {
        const field = student[3];
        const firstName = student[0];
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstName);
      }

      const total = students.length;
      const outputLines = [`Number of students: ${total}`];
      for (const [field, names] of Object.entries(fields)) {
        outputLines.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }
      resolve(outputLines.join('\n'));
    });
  });
}

module.exports = countStudents;

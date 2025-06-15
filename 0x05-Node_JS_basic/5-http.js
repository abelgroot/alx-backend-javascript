const http = require('http');
const fs = require('fs').promises;

/**
 * A function that accepts a path to a csv file that contains list of students
 * and returns the total count of students and the count of students in each
 * field of study. It reads the file asynchronously.
 */
async function countStudents(path) {
  try {
    const studentData = await fs.readFile(path, 'utf8');
    let res = '';
    const students = studentData
      .split('\n')
      .filter((student) => student.length > 0)
      .map((student) => student.split(','));

    students.shift();
    res += `Number of students: ${students.length}`;
    const filedOfStudy = {};
    students.forEach((student) => {
      if (!filedOfStudy[student[3]]) filedOfStudy[student[3]] = [];
      filedOfStudy[student[3]].push(student[0]);
    });

    Object.keys(filedOfStudy).forEach((key) => {
      res += `\nNumber of students in ${key}: ${
        filedOfStudy[key].length
      }. List: ${filedOfStudy[key].join(', ')}`;
    });
    return res;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  const msg = 'This is the list of our students';
  switch (req.url) {
    case '/':
      res.end('Hello Holberton School!');
      break;
    case '/students':
      try {
        res.end(`${msg}\n${await countStudents(process.argv[2])}`);
      } catch (error) {
        res.statusCode = 404;
        res.end(`${msg}\n${error.message}`);
      }
      break;
    default:
      break;
  }
});

app.listen(1245, '127.0.0.1');

module.exports = app;

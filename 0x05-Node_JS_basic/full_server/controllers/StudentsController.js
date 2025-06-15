import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    response.setHeader('Content-Type', 'text/plain');
    readDatabase(process.argv[2])
      .then((data) => {
        let msg = 'This is the list of our students';
        const fields = Object.keys(data);
        fields.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        fields.forEach((field) => {
          msg += `\nNumber of students in ${field}: ${
            data[field].length
          }. List: ${data[field].join(', ')}`;
        });
        response.statusCode = 200;
        response.send(msg);
      })
      .catch((err) => {
        response.statusCode = 500;
        response.send(err.message);
      });
  }

  static getAllStudentsByMajor(request, response) {
    response.statusCode = 200;
    const { major } = request.params;
    if (major === 'CS' || major === 'SWE') {
      readDatabase(process.argv[2])
        .then((data) => {
          response.statusCode = 200;
          response.send(`List: ${data[major].join(', ')}`);
        })
        .catch(() => {
          response.statusCode = 500;
          response.send('Cannot load the database');
        });
    } else {
      response.statusCode = 500;
      response.send('Major parameter must be CS or SWE');
    }
  }
}

export default StudentsController;

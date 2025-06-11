import { readDatabase } from '../utils.js';

export default class StudentsController {
  static async getAllStudents(req, res) {
    const { dbPath } = req.app.locals;
    res.set('Content-Type', 'text/plain');
    try {
      const db = await readDatabase(dbPath);
      let output = 'This is the list of our students\n';
      Object.keys(db)
        .sort((a, b) => a.localeCompare(b))
        .forEach((field) => {
          const names = db[field];
          output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
        });
      return res.status(200).send(output.trim());
    } catch {
      return res.status(500).send('This is the list of our students\nCannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const { dbPath } = req.app.locals;
    res.set('Content-Type', 'text/plain');

    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const db = await readDatabase(dbPath);
      const list = db[major] || [];
      return res.status(200).send(`List: ${list.join(', ')}`);
    } catch {
      return res.status(500).send('Cannot load the database');
    }
  }
}

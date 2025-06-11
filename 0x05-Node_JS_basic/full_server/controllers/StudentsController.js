import { readDatabase } from '../utils.js';

export default class StudentsController {
  static async getAllStudents(req, res) {
    const path = process.argv[2];
    res.set('Content-Type', 'text/plain');
    try {
      const db = await readDatabase(path);
      const fields = Object.keys(db).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
      let output = 'This is the list of our students\n';
      for (const field of fields) {
        const list = db[field].join(', ');
        output += `Number of students in ${field}: ${db[field].length}. List: ${list}\n`;
      }
      return res.status(200).send(output.trim());
    } catch {
      return res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    const path = process.argv[2];
    res.set('Content-Type', 'text/plain');
    try {
      const db = await readDatabase(path);
      const list = db[major] || [];
      return res.status(200).send(`List: ${list.join(', ')}`);
    } catch {
      return res.status(500).send('Cannot load the database');
    }
  }
}

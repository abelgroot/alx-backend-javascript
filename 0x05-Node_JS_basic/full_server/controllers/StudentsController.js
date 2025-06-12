import { readDatabase } from '../utils.js';

export default class StudentsController {
  static async getAllStudents(req, res) {
    try {
      // Get path from app.locals or request time argument
      const databasePath = req.app.locals.databasePath || 
                         process.argv[2] || 
                         path.join(process.cwd(), 'database.csv');
      
      const students = await readDatabase(databasePath);
      
      let response = 'This is the list of our students\n';
      const fields = Object.keys(students).sort((a, b) => 
        a.localeCompare(b, undefined, { sensitivity: 'base' }));
      
      fields.forEach(field => {
        response += `Number of students in ${field}: ${students[field].length}. `;
        response += `List: ${students[field].join(', ')}\n`;
      });

      res.status(200).send(response.trim());
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      // Get path from app.locals or request time argument
      const databasePath = req.app.locals.databasePath || 
                         process.argv[2] || 
                         path.join(process.cwd(), 'database.csv');
      
      const students = await readDatabase(databasePath);
      
      if (!students[major]) {
        res.status(500).send(`No students found in ${major} major`);
        return;
      }

      res.status(200).send(`List: ${students[major].join(', ')}`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

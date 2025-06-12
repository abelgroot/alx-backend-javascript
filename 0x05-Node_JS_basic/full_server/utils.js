import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

const readFileAsync = promisify(fs.readFile);

export async function readDatabase(filePath) {
  try {
    const absolutePath = path.resolve(filePath);
    const data = await readFileAsync(absolutePath, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');
    
    if (lines.length <= 1) {
      throw new Error('Database is empty or has only headers');
    }

    const students = {};
    const headers = lines[0].split(',').map(h => h.trim());
    
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',');
      if (values.length !== headers.length) continue;
      
      const record = {};
      headers.forEach((header, index) => {
        record[header] = values[index].trim();
      });
      
      const field = record.field;
      if (!students[field]) students[field] = [];
      students[field].push(record.firstname);
    }

    return students;
  } catch (error) {
    throw new Error(`Cannot load the database: ${error.message}`);
  }
}

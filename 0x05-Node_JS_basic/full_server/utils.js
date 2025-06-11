import fs from 'fs/promises';

export async function readDatabase(path) {
  const content = await fs.readFile(path, 'utf8');
  const lines = content.split('\n').filter((l) => l.trim());
  const students = lines.slice(1).map((l) => l.split(','));
  const db = {};
  students.forEach(([first, , , field]) => {
    if (!db[field]) db[field] = [];
    db[field].push(first);
  });
  return db;
}

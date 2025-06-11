import fs from 'fs/promises';

export async function readDatabase(path) {
  let data;
  try {
    data = await fs.readFile(path, 'utf-8');
  } catch (err) {
    throw new Error(err.message);
  }

  const lines = data.split('\n').filter((l) => l.trim() !== '');
  const students = lines.slice(1).map((l) => l.trim().split(','));
  const db = {};

  for (const [firstName, , , field] of students) {
    if (!db[field]) db[field] = [];
    db[field].push(firstName);
  }
  return db;
}

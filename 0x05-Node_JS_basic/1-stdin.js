#!/usr/bin/env node
// Reads user name from stdin and prints a greeting

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  const name = data.trim();
  process.stdout.write(`Your name is: ${name}`);
  if (process.stdin.isTTY) {
    process.stdout.write('\n');
    process.exit(0);
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});

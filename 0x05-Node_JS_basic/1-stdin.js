#!/usr/bin/env node
// Reads user name from stdin and prints a greeting

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  const name = data.trim();
  console.log(`Your name is: ${name}`);

  // If it's interactive mode (user typed input), exit after response
  if (process.stdin.isTTY) {
    process.exit(0);
  }
});

process.stdin.on('end', () => {
  // This is triggered when piping input (e.g., echo "Sam" | node ...)
  console.log('This important software is now closing');
});

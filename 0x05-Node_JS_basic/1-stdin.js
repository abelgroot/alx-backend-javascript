#!/usr/bin/env node

// Display initial welcome message
process.stdout.write('Welcome to ALX, what is your name?\n');

// Set up stdin to read user input
process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);
  process.exit();
});

// Handle process exit
process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});

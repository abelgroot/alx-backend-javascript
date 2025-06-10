const process = require('process');

// Display initial message
process.stdout.write('Welcome to ALX, what is your name?\n');

// Handle user input
process.stdin.on('data', (input) => {
  const name = input.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);
  
  // Check if input is from pipe (non-interactive)
  if (!process.stdin.isTTY) {
    process.stdout.write('This important software is now closing\n');
  }
  process.exit();
});

// Handle interactive close
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

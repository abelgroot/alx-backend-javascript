#!/usr/bin/env node

process.stdout.write('Welcome to ALX, what is your name?\n');

// Handle both interactive and piped input
process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);
  
  // For piped input (non-interactive), show closing message
  if (!process.stdin.isTTY) {
    process.stdout.write('This important software is now closing\n');
  }
  
  // Exit in both cases
  process.exit();
});

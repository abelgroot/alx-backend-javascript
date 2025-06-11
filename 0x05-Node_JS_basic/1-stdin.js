#!/usr/bin/env node
// Reads user name from stdin and prints a greeting

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

let name = '';

process.stdin.on('data', (chunk) => {
  name += chunk;
  if (process.stdin.isTTY) {
    name = name.trim();
    console.log(`Your name is: ${name}`);
  }
});

process.stdin.on('end', () => {
  name = name.trim();
  if (!process.stdin.isTTY) {
    console.log(`Your name is: ${name}`);
    console.log('This important software is now closing');
  }
});

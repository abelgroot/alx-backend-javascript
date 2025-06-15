/**
 * A program that prompts a user for a name and then displays it
 * in STDOUT. The program also displays a closing message followed by a new
 * line when the user ends the program.
 *
 * Usage:
 * $ node 1-stdin.js
 * Welcome to Holberton School, what is your name? : <name>
 * Your name is: <name>
 */

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name !== null) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

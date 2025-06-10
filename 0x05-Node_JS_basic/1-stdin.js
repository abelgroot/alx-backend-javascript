// 1-stdin.js

process.stdout.write('Welcome to ALX, what is your name?\n');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  console.log(`Your name is: ${name}`);
});

// This will trigger when the input stream ends (e.g., using Ctrl+D or piping input)
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});

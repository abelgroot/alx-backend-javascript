process.stdout.write('Welcome to ALX, what is your name?\n');

let isPipedInput = false;

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);
  
  if (isPipedInput) {
    process.stdout.write('This important software is now closing\n');
  }
  process.exit();
});

// Check if input is being piped
if (!process.stdin.isTTY) {
  isPipedInput = true;
}

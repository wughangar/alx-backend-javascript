process.stdout.write('Welcome to Holberton School, what is your name?\n');

if (process.stdin.isTTY) {
  process.stdin.on('data', (data) => {
    const response = data.toString().trim();
    process.stdout.write(`Your name is: ${response}\n`);
    process.exit();
  });
} else {
  process.stdin.on('data', (data) => {
    const response = data.toString().trim();
    process.stdout.write(`Your name is: ${response}\n`);
  });

  let closingMessageDisplayed = false;

  process.on('exit', () => {
    if (!closingMessageDisplayed) {
      process.stdout.write('This important software is now closing\n');
      closingMessageDisplayed = true;
    }
  });
}

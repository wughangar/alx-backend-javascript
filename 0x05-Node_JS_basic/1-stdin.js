// using process stdin

const readline = require('readline');

const line1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

line1.question('Welcome to Holberton School, what is your name?\n ', (answer) =>{
	console.log(`Your name is: ${answer}`);
	line1.close();
	console.log('This important software is now closing');
});

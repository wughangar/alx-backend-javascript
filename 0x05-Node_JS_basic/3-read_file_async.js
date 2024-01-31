const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter(line => line.trim() !== '');

        const counters = {};

        lines.forEach((line) => {
          const [firstname, lastname, age, field] = line.split(',');

          if (!firstname || !lastname || !age || !field) {
            reject(new Error('Invalid CSV format in the database file.'));
          }

          counters[field] = (counters[field] || 0) + 1;
        });

        console.log(`Number of students: ${lines.length}`);

        for (const field in counters) {
          const count = counters[field];
          const list = lines
            .filter(line => line.split(',')[3] === field)
            .map(line => line.split(',')[0])
            .join(', ');

          console.log(`Number of students in ${field}: ${count}. List: ${list}`);
        }

        resolve();
      }
    });
  });
}

module.exports = countStudents;


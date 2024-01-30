const fs = require('fs');

function countStudents(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');

    const counters = {};

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];
      const [firstname, lastname, age, field] = line.split(',');

      if (!firstname || !lastname || !age || !field) {
        throw new Error('Invalid CSV format in the database file.');
      }

      counters[field] = (counters[field] || 0) + 1;
    }

    console.log(`Number of students: ${lines.length - 1}`);

    for (const field in counters) {
      const count = counters[field];
      const list = lines
        .slice(1)
        .filter(line => line.split(',')[3] === field)
        .map(line => line.split(',')[0])
        .join(', ');

      console.log(`Number of students in ${field}: ${count}. List: ${list}`);
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('Cannot load the database. File not found.');
    } else {
      console.error('Error:', error.message);
    }
  }
}

module.exports = countStudents;

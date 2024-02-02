import fs from 'fs/promises';

export const readDatabase = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    // Process data and return an object of arrays of first names per fields
    // ...

    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(`Cannot read the database: ${error.message}`);
  }
};

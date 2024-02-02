import { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase('./path/to/database.csv');

      res.status(200).send('Information about all students');
    } catch (error) {
      res.status(500).send(`Cannot load the database: ${error}`);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const data = await readDatabase('./path/to/database.csv');

      res.status(200).send(`Information about students in ${major}`);
    } catch (error) {
      res.status(500).send(`Cannot load the database: ${error}`);
    }
  }
}

export default StudentsController;

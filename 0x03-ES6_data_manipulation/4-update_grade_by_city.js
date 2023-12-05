export default function updateStudentGradeByCity(students, city, newGrades) {
  const filteredStudents = students.filter((student) => student.location === city);
  const updatedStudents = filteredStudents.map((currentStudent) => {
    const foundGrade = newGrades.find((grade) => grade.studentId === currentStudent.id);
    const updatedStudent = { ...currentStudent };

    if (foundGrade) {
      updatedStudent.grade = foundGrade.grade;
    } else {
      updatedStudent.grade = 'N/A';
    }

    return updatedStudent;
  });
  return updatedStudents;
}

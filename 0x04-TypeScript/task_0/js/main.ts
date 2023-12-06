interface Student {
  firstName: string;
  lastName: string;
  age: number;
  loaction: string;
}

const student1: Student = {
  firstName = 'Loki',
  lastName = 'Rose',
  age = 20,
  location = 'Kenya',
};

const student2 : Student = {
  firstName = 'Agather',
  lastName = 'Chari',
  age = 25,
  location = 'Kenya',
};

const studentList: Student[] = [student1, student2];

const renderTable = () => {
  const table = document.createElement('table');
  const tableBody = document.createElement('tbody');

  studentList.forEach((student) => {
    const row = tableBody.insertRow();
    const cellFirstName = row.insertCell();
    const cellLocation = row.insertCell();

    cellFirstName.textContent = student.firstName;
    cellLocation.textContent = student.location;
    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
};

renderTable();

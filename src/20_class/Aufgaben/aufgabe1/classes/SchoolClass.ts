import Student from "./Student";

class SchoolClass {
  _id: number;
  _name: string;
  _students: Student[];
  _endDate?: string;

  constructor(id: number, name: string) {
    this._id = id;
    this._name = name;
    this._students = [];
  }

  addStudent(student: Student): void {
    this._students.push(student);
  }

  listStudents(): void {
    console.log(`Students in ${this._name}:`);
    this._students.forEach((student) => {
      console.log(
        `${student._firstName} ${
          student._lastName
        }, born ${student._birthday.toLocaleDateString()}`
      );
    });
  }
}

export default SchoolClass;
import type { Student } from "../types/Student";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";

type StudentsProps = {
  students: Student[];

  setStudents:
    React.Dispatch<
      React.SetStateAction<Student[]>
    >;
};

function Students({
  students,
  setStudents,
}: StudentsProps) {

  const addStudent = (
    student: Student
  ) => {
    setStudents([
      ...students,
      student,
    ]);
  };

  const deleteStudent = (
    id: number
  ) => {
    setStudents(
      students.filter(
        (student) =>
          student.id !== id
      )
    );
  };

  const editStudent = (
    id: number,
    newGrade: number
  ) => {

    setStudents(
      students.map((student) =>
        student.id === id
          ? {
              ...student,
              grade: newGrade,
            }
          : student
      )
    );

  };

  return (
    <>
      <h1>Students</h1>

      <StudentForm
        addStudent={addStudent}
      />

      <StudentList
        students={students}
        deleteStudent={
          deleteStudent
        }
        editStudent={
          editStudent
        }
      />
    </>
  );
}

export default Students;
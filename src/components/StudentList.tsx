import type { Student } from "../types/Student";
import StudentCard from "./StudentCard";

type StudentListProps = {
  students: Student[];
  deleteStudent: (
    id: number
  ) => void;
  editStudent: (
    id: number,
    newGrade: number
  ) => void;
};

function StudentList({
  students,
  deleteStudent,
  editStudent,
}: StudentListProps) {

  return (
    <ul>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          deleteStudent={
            deleteStudent
          }
          editStudent={
            editStudent
          }
        />
      ))}
    </ul>
  );
}

export default StudentList;
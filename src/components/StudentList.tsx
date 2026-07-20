import type { Student } from "../types/Student";
import StudentCard from "./StudentCard";

type StudentListProps = {
  students: Student[];
  deleteStudent: (id: number) => void;
};

function StudentList({
  students,
  deleteStudent,
}: StudentListProps) {
  return (
    <ul>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          deleteStudent={deleteStudent}
        />
      ))}
    </ul>
  );
}

export default StudentList;
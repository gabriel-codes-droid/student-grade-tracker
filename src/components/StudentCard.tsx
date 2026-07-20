import type { Student } from "../types/Student";

type StudentCardProps = {
  student: Student;
  deleteStudent: (id: number) => void;
};

function StudentCard({
  student,
  deleteStudent,
}: StudentCardProps) {
  return (
    <li>
      {student.name} : {student.grade}

      <button
        onClick={() =>
          deleteStudent(student.id)
        }
      >
        Delete
      </button>
    </li>
  );
}

export default StudentCard;
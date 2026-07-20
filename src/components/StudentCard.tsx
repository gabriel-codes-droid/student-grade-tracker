import type { Student } from "../types/Student";

type StudentCardProps = {
  student: Student;
  deleteStudent: (id: number) => void;
  editStudent: (
    id: number,
    newGrade: number
  ) => void;
};

function StudentCard({
  student,
  deleteStudent,
  editStudent,
}: StudentCardProps) {

  const handleEdit = () => {

    const newGrade = prompt(
      "Enter new grade",
      student.grade.toString()
    );

    if (
      newGrade !== null &&
      !isNaN(Number(newGrade))
    ) {

      editStudent(
        student.id,
        Number(newGrade)
      );

    }
  };

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

      <button
        onClick={handleEdit}
      >
        Edit Grade
      </button>
    </li>
  );
}

export default StudentCard;
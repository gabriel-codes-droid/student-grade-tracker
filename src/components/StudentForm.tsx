import { useState } from "react";
import type { Student } from "../types/Student";

type StudentFormProps = {
  addStudent: (student: Student) => void;
};

function StudentForm({
  addStudent,
}: StudentFormProps) {
  const [name, setName] =
    useState("");

  const [grade, setGrade] =
    useState("");

  const handleSubmit = () => {
    if (
      name.trim() === "" ||
      grade.trim() === ""
    )
      return;

    const newStudent: Student = {
      id: Date.now(),
      name,
      grade: Number(grade),
    };

    addStudent(newStudent);

    setName("");
    setGrade("");
  };

  return (
    <>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <input
        placeholder="Grade"
        value={grade}
        onChange={(e) =>
          setGrade(e.target.value)
        }
      />

      <button
        onClick={handleSubmit}
      >
        Add Student
      </button>
    </>
  );
}

export default StudentForm;
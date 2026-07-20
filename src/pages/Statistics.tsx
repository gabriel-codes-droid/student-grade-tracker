import type { Student } from "../types/Student";

type StatisticsProps = {
  students: Student[];
};

function Statistics({
  students,
}: StatisticsProps) {
  const average =
    students.length === 0
      ? 0
      : students.reduce(
          (sum, student) =>
            sum + student.grade,
          0
        ) / students.length;

  const highest =
    students.length === 0
      ? 0
      : Math.max(
          ...students.map(
            (student) =>
              student.grade
          )
        );

  const lowest =
    students.length === 0
      ? 0
      : Math.min(
          ...students.map(
            (student) =>
              student.grade
          )
        );

  return (
    <>
      <h1>Statistics</h1>

      <p>
        Average:
        {average.toFixed(2)}
      </p>

      <p>
        Highest:
        {highest}
      </p>

      <p>
        Lowest:
        {lowest}
      </p>
    </>
  );
}

export default Statistics;
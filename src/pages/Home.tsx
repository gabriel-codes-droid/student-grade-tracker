import type { Student } from "../types/Student";

type HomeProps = {
  students: Student[];
};

function Home({
  students,
}: HomeProps) {
  return (
    <>
      <h1>
        Student Dashboard
      </h1>

      <h2>
        Total Students:
        {students.length}
      </h2>
    </>
  );
}

export default Home;
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import {
  useState,
  useEffect,
} from "react";

import type { Student } from "./types/Student";

import Home from "./pages/Home";
import Students from "./pages/Students";
import Statistics from "./pages/Statistics";

function App() {
  const [students, setStudents] =
    useState<Student[]>(() => {
      const stored =
        localStorage.getItem(
          "students"
        );

      return stored
        ? JSON.parse(stored)
        : [];
    });

  useEffect(() => {
    localStorage.setItem(
      "students",
      JSON.stringify(
        students
      )
    );
  }, [students]);

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">
          Home
        </Link>

        {" | "}

        <Link to="/students">
          Students
        </Link>

        {" | "}

        <Link to="/statistics">
          Statistics
        </Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <Home
              students={
                students
              }
            />
          }
        />

        <Route
          path="/students"
          element={
            <Students
              students={
                students
              }
              setStudents={
                setStudents
              }
            />
          }
        />

        <Route
          path="/statistics"
          element={
            <Statistics
              students={
                students
              }
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
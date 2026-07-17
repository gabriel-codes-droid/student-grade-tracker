import { useState, useEffect } from 'react'
import type  { Student } from './student'
import './App.css'

function App() {
  const [students, setStudents] = useState<Student[]>(() => {
    const storedStudents = localStorage.getItem('students')
    return storedStudents ? JSON.parse(storedStudents) : []
  });

  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  const addStudent = () => {
    if (name.trim() === '' || grade.trim() === '') {
      alert('Please enter both name and grade.');
      return;
    }

    const newStudent: Student = {
      id: Date.now(),
      name:name,
      grade: parseFloat(grade),
    };
    setStudents([...students, newStudent]);
    setName('');
    setGrade('');
  };
  const deleteStudent=(id:Student['id'])=>{
    setStudents(students=>
      students.filter(student =>student.id !==id)
    )
  }

  return (
    <>
      <h1>Here are each students and there grades</h1>
      <input 
      
      placeholder='Name'
      value={name}
      onChange={(e)=> setName(e.target.value)}

      />

      <input

      placeholder='Grades'
      value={grade}
      onChange={(e)=> setGrade(e.target.value)}
      />
      <button onClick={addStudent}>Add new Student</button>

      <ul>
        {students.map(student=>(
          <li key = {student.id}>
          {student.name} : {student.grade}
          <button onClick={()=>{deleteStudent(student.id)}}>Delete this student</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App

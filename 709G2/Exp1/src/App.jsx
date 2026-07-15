import React from 'react'
// import StudentCard from './StudentCard.jsx'

function App() {
  const studentdata = [{
    name: "John Doe",
    age: 20,
    course: "Computer Science",
    grade: "A"
  },
  {
    name: "Jane Smith",
    age: 22,
    course: "Mathematics",
    grade: "B"
  },
  {
    name: "Michael Johnson",
    age: 21,
    course: "Physics",
    grade: "A"
  }]

  return
  (
    <>
      <h1>Student Details</h1>
      <StudentCard studentdata={studentdata} />
    </>
  )

}

export default App

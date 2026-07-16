import React from 'react'
import StudentCard from './StudentCard'

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



  return (
    <div>
    <StudentCard studentdata={studentdata}/>
    </div>
  )
}

export default App
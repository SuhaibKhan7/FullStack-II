import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import StudentCard from './StudentCard'
function App() {
  const studentdata = [
    {
      name: 'John Doe',
      age: 20,
      course: 'Computer Science',
      grade: 'A',
    },
    {
      name: 'Jane Smith',
      age: 22,
      course: 'Mathematics',
      grade: 'B',
    },
    {
      name: 'Michael Johnson',
      age: 21,
      course: 'Physics',
      grade: 'C',
    },    
  ]
  return (
    <>
      <StudentCard studentdata={studentdata}/>
    </>
  )
}

export default App

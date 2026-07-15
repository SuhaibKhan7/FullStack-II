import StudentCard from './StudentCard'


function App() {
  const studentdata = [{
    name: "John",
    age: 20,
    course: "CSE",
    grade:"B"
  }, {
    name: "Dileep",
    age: 20,
    course: "CSE",
    grade: "A"
    }, {
    name: "Vishal",
    age: 20,
    course: "CSE",
    grade: "B"
  }]

  return (
    <>
      <StudentCard studentdata={studentdata}  />
    </>
    
  )
}

export default App

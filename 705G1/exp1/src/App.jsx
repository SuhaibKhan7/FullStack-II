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
  let a=10

  return (
    <>
      <StudentCard data={studentdata} a={a} />
      
    </>
    
  )
}

export default App

import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    async function fetchUsers() {
      const reponse = await fetch("https://jsonplaceholder.typicode.com/users")
      console.log(reponse)
      const data = await reponse.json();
      console.log(data);
      setUsers(data);
    }
    fetchUsers();
  }, [])

  return (
    <>
   
    </>
  )
}

export default App

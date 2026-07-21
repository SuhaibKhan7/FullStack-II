import React, { useState,useEffect } from 'react'

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      console.log(response)
    setData(await response.json())
      console.log(data)
    }
    fetchUsers();
  }, [])
  return (
    <div>App
    
      {data.map((usr) => (
        <div>
          <h3>{usr.name} </h3>
          <p>{usr.email}</p>
          </div>   

  ))}
    </div>
  )
}

export default App
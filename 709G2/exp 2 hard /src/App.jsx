import React, { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {

    async function getUsers() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      console.log(response)
      const data = await response.json()
      console.log(data)
    }
    getUsers()

  }, [])
  return (
    <div>
      {data.map((usr) => (
        <div>
          <h1>{usr.name}</h1>
          <p>{usr.email}</p>
          <p>{usr.phone }</p>
        </div>
      ))}

    </div>
  )
}

export default App
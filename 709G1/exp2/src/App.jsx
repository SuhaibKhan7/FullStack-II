import React, { useState, useEffect } from 'react'

function App() {
  const [user, setUser] = useState([])
  useEffect(() => {
    async function fetchUsers() {

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/user')
        console.log(response);
        if (!response.ok) { 
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUser(data);
        console.log(data);
      }
      catch (error) {
        console.log(error.message);
      }

    }
    fetchUsers()
  }, [])
  return (
    <div>
      <h1>User Details</h1>
      {user.map((usr) => (
        <div>
          <h2>{usr.name}</h2>
          <p>{usr.address.city}</p>
          <p>{usr.address.geo.lat}||{usr.address.geo.lng}</p>
        </div>
      ))}
    </div>
  )
}

export default App
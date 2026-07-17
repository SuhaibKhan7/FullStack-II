import { useState, useEffect } from "react"
function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      console.log(response)
      const data = await response.json()
      setUsers(data);
      console.log(data)


    }
    fetchUsers();

  }, [])
  return (
    <>
      {users.map((user, index) => (
        <div key={index}>
          <h3>{user.name}</h3>
          <h6>{user.address.city}</h6>
          <p>{user.address.geo.lat}</p>
          <p>{user.address.geo.lng}</p>
        </div>
      ))}
    </>
  )
}

export default App

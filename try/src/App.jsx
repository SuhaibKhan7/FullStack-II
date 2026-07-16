import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [searchUser, setSearchUser] = useState([])
  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true)
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        console.log(response)
        if (!response.ok) {
          throw new Error("Error in loading data")
        }
        const data = await response.json();
        console.log(data);
        setUsers(data);
        setSearchUser(data)
      }
      catch (err) {
        console.log(err)
        setError(true);
        setMessage(err.message)
      }
      finally {
        setLoading(false)
      }
    }
    fetchUsers();
  }, [])


  function handleSearch(e) {
    e.preventDefault()
    const value = e.target.value;

    const filteruser = users.filter((usr) => {
      return usr.name.toLowerCase().includes(value.toLowerCase());
 })

    setSearchUser(filteruser)
  }



  return (
    <>
      <input type='text' placeholder='search name ....' onChange={handleSearch} />

      {loading && <h2>Loading...</h2>}
      {searchUser.map((user, index) => (
        <div key={index}>
          <p>{user.name}</p>
        </div>
      ))}

      <div>
        {error && <h4>{message}</h4>}
      </div>
    </>
  )
}

export default App

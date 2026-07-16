import { useEffect } from 'react'
import { useState } from 'react'
function App() {
  // mount
  // render
  // re - render
  // unmounted
// use for side rendering
  // useEffect(callback, dependencyarray);
const[counter,setcounter]=useState(0)
  
  useEffect(() => {
    console.log("hi")
    return () => {
      console.log("bye");
}
  },[counter])

  return (
    <>
      {counter}
      <button onClick={()=>setcounter(counter+1)} > + </button>
    </>
  )
}

export default App

import { useEffect, useState } from 'react'
import axios from "axios";
function App() {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    axios.get("localhost:8080/all").then(i=>setUsers(i.data)).catch(e=>console.log("error occured"));
  },[])

  return (
   <>
   <h1> hello world</h1>
   
   </>
  )
}




export default App

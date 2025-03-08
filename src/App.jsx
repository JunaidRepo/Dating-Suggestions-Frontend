import { useEffect, useState } from 'react'
import axios from "axios";
import img from "../asserts/image.png"
function App() {
  const [users, setUsers] = useState([])
  let [curr, setCurr] = useState(false);
  let [mat,setMat]=useState(-1);

  let  [add,setAdd]=useState(false);
  let  [del,setDel]=useState(false);
  let [upd,setUpd]=useState(false);

  let allDetails = async () => {
    
    try {
      let get = await axios.get("http://localhost:8080/getAll");
      if (get.data.statusCode == 200) {
        setUsers(get.data.data);
      } else console.log("error occured");
    }
    catch (e) {
      console.log(e);
    }

  }
  

  let match = async (i) => {
    try {
      let get = await axios.get(`http://localhost:8080/match/${i}`)
      if (get.data.statusCode == 200) {
        setUsers(get.data.data);
      } else console.log("error occured");
    }
    catch (e) {
      console.log(e);
    }
  }


  let getMatch=(i)=>{
    setCurr(true);
    setMat(i);
    
  }

  useEffect(() => {
    allDetails();
  },[curr]);

  useEffect(() => {
    if (curr && mat !== -1) {
      match(mat);
    }
  }, [curr, mat]);
  

  return (


    <>
      <img src={img} alt="image" style={{ width: "100%", height: "30vh", backgroundSize: "auto" }} />
      <div className='flex items-center pt-5 gap-10 justify-center flex-col w-[100%]'>
        <div>
          <h1> Welcome to Dating Suggestions</h1>
        </div>

        <div>
          <button className="border px-4 py-1 rounded bg-blue-400 " style={{ display: !curr ? "none" : "block" } } onClick={()=>setCurr(false)}>Back</button>
        </div>


        <div className="p-1 rounded-full text-center">

          <table className=" rounded-2xl w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-10 py-2">Name</th>
                <th className="border px-5 ">Gender</th>
                <th className="border px-2 ">Age</th>
                <th className="border px-7 ">Interest</th>
                <th className="border px-10 ">Match</th>
                <th className="border px-10 ">Update/Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((i) => (
                <tr key={i.id}>
                  <td >{i.name}</td>
                  <td >{i.gender}</td>
                  <td >{i.age}</td>
                  <td>
                    {i.interest.map((int) => int.interest).join(", ")}
                  </td>
                  <td>
                  <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={()=>getMatch(i.id)} style={{ display: curr ? "none" : "inline-block"}}> Top Match</button>

                  </td>
                  <td className="p-4">
                    <button className="bg-blue-500 px-4 m-1 py-1 rounded">Edit</button>
                    <button className="bg-blue-500 px-4 py-1 rounded">Delete</button>
                  </td>
                </tr>
              ))}

          </tbody>
        </table>
      </div>
    </div >
    </>
  )
}

export default App

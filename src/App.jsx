import { useEffect, useState } from 'react'
import axios from "axios";
import img from "../asserts/image.png"
function App() {
  const [users, setUsers] = useState([])
  let [curr, setCurr] = useState(false);
  let [mat,setMat]=useState([]);

  let allDetails = async () => {
    let get = await axios.get("http://localhost:8080/getAll");
    try {
      if (get.data.statusCode == 200) {
        setUsers(get.data.data);
      } else console.log("error occured");
    }
    catch (e) {
      console.log(e);
    }

  }
  useEffect(() => {
    allDetails();
  }, []);



  let match = async (i) => {

    let get = await axios.get(`http://localhost:8080/match/${i}`)
    try {
      if (get.data.statusCode == 200) {
        setUsers(get.data.data);
      } else console.log("error occured");
    }
    catch (e) {
      console.log(e);
    }
  }

  let handle=(i)=>{
    setCurr((prev) => !prev);
    match(i);

  }
  return (


    <>
      <img src={img} alt="image" style={{ width: "100%", height: "30%", backgroundSize: "auto" }} />
      <div className='flex items-center pt-10 gap-10 justify-center flex-col w-[100%]'>
        <div>
          <h1> Welcome to Dating Suggestions</h1>
        </div>


        <div className="p-4 rounded-full text-center">


          <table className="border-collapse w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-10 py-2">Name</th>
                <th className="border px-10 ">Gender</th>
                <th className="border px-10 ">Age</th>
                <th className="border px-10 ">Interest</th>
                <th className="border px-10 ">Match</th>
                <th className="border px-10 ">Update</th>
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
                  <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={()=>handle(i.id)} style={{ visibility: curr ? "visible" : "hidden" }}> Top Match</button>

                  </td>
                  <td className="p-4">
                    <button className="bg-blue-500 px-4 py-1 rounded">Edit</button>
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

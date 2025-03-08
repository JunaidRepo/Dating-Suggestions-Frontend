import axios from "axios";
import { useState } from "react";

function Add({ back,msg }) {
    let add = `http://localhost:8080/add`;
    let [data, setData] = useState({
        name: "",
        age: "",
        gender: "Male",
        interest: []
    })
    let dataChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    let addInterest = (e) => {
        let arr = e.target.value.split(",").map(i => i.trim()).filter(i => i.length > 0).map(i => ({ interest: i }));
        setData({ ...data, interest: arr });
    }
    let addAge = (e) => {
        setData({ ...data, age: parseInt(e.target.value) })
    }
    let addData = async (e) => {
        console.log("hello");
        e.preventDefault();
        try {
            await axios.post(add, data);
            msg("inserted Successful");
        } catch (e) {
            console.log(e);
            msg(e.response.data.data);
        }
        
        back();
    }
    return (
        <>
            <div className="h-[100vh] w-[100%] fixed top-0 flex justify-center gap-10  flex-col items-center bg-black">
                <div className="bg-blue-400 p-2 rounded-2xl">
                    <h1>Add User</h1>

                </div>
                <form onSubmit={addData} className="flex flex-col gap-7">
                    <div>Name  <input type="text" name="name" onChange={dataChange} placeholder="Enter the name" required className="bg-white rounded-2xl placeholder-gray-500 text-center text-black" /></div>
                    <div>Enter the Age  <input type="number" name="age" onChange={addAge} placeholder="Age" required  className="bg-white rounded-2xl placeholder-gray-500 w-15 text-center text-black" /></div>
                    <div> Gender <select onChange={dataChange} value={data.gender} name="gender" className="bg-black" required>
                        <option value="Male" >Male</option>
                        <option value="Female">Female</option>
                    </select>
                    </div>
                    <div>
                        Interest( separated by comma)   <input type="text" name="interest" onChange={addInterest} required  className="bg-white rounded-2xl px-4 py-2 placeholder-gray-500 text-center text-black border"/></div>
                    <div className="flex justify-evenly">
                        <div className="bg-blue-400 px-4 py-2 rounded"> <button type="submit">Add</button></div>
                        <div className="bg-red-400 px-4 py-2 rounded"><button type="button" onClick={back}>Back</button></div>

                    </div>

                </form>

            </div>
        </>
    );

}
export default Add;
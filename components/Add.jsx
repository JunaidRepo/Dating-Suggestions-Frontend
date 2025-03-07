import axios from "axios";
import { useState } from "react";

function Add({back}){
    let add=`http://localhost:8080/add`;
    let [data,setData]=useState({
        name:"",
        age:"",
        gender:"Male",
        interest:[]
    })
    let dataChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    let addInterest=(e)=>{
        let arr=e.target.value.split(",").map(i=>i.trim()).filter(i=>i.length>0).map(i => ({interest: i }));
        setData({...data,interest:arr});
    }
    let addAge= (e)=>{
        setData({...data,age:parseInt(e.target.value)})
    }
    let addData=async (e)=>{
        e.preventDefault();
        try{
            await axios.post(add,data);
        }catch(e){
            console.log(e);
        }
    }
    return(
        <>
        <h1>Add User</h1>
        <form onSubmit={addData}>
            <input type="text" name="name" onChange={dataChange} placeholder="Enter the name" required/>
            <input type="number" name="age" onChange={addAge} placeholder="Enter the Age" required/>
            Gender<select onChange={dataChange} value={data.gender} name="gender" required>
            <option value="Male" >Male</option>
            <option value="Female">Female</option>
            </select>
            Interest( separated by comma)<input type="text" name="interest" onChange={addInterest} required/>
            <button type="submit">Add</button>
            <button type="button" onClick={back}>Back</button>
        </form>
        
        </>
    );

}
export default Add;
import axios from "axios";
import { useState } from "react";

function Update({obj,back}){
    let update=`http://localhost:8080/update`;
    let [data,setData]=useState({
        name:obj.name,
        age:obj.age,
        gender:obj.gender,
        interest:obj.interest
    })
    let changeData= async (e)=>{
        e.preventDefault();
        try{
            await axios.put(update,data);
        }
        catch(e){
            console.log(e);
        }

    }
    let changeAge=(e)=>{
        setData({...data,age:parseInt(e.target.value)})

    }
    let changeSome=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    
    }

    let changeInterest=(e)=>{
        let arr=e.target.value.split(",").map(i=>i.trim()).filter(i=>i.length>0).map(i=>({interest:i}))
        setData({...data,interest:arr})
    }


    return(
        <>
         <h1>Update User</h1>
        <form onSubmit={changeData}>
            <input type="text" value={obj.name} name="name" onChange={changeSome} placeholder="Enter the name" required/>
            <input type="number" value={obj.age} name="age" onChange={changeAge} placeholder="Enter the Age" required/>
            Gender<select value={obj.gender} onChange={changeSome} name="gender" required>
            <option value="Male" >Male</option>
            <option value="Female">Female</option>
            </select>
            Interest( separated by comma)<input type="text" name="interest" value={obj.interest.map(i => i.interest).join(",")} onChange={changeInterest} required/>
            <button type="submit">Update</button>
            <button type="button" onClick={back}>Back</button>
        </form>
        



        
        
        </>
    );


}
export default Update;
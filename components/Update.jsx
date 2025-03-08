import axios from "axios";
import { useState } from "react";

function Update({ obj, back,msg }) {
    let update = `http://localhost:8080/update`;
    let [data, setData] = useState({
        id:obj.id,
        name: obj.name,
        age: obj.age,
        gender: obj.gender,
        interest: obj.interest
    })
    let changeData = async (e) => {
        e.preventDefault();
        try {
            await axios.put(update, data);
            msg("update Successful");
        }
        catch (e) {
            msg(e.response.data.data);
        }
        back();

    }
    let changeAge = (e) => {
        setData({ ...data, age: parseInt(e.target.value) })

    }
    let changeSome = (e) => {

        setData({ ...data, [e.target.name]: e.target.value })

    }

    let changeInterest = (e) => {
        let arr = e.target.value.split(",").map(i => i.trim()).filter(i => i.length > 0).map(i => ({ interest: i }))
        setData({ ...data, interest: arr })
    }


    return (
        <div className="flex flex-col fixed top-0 items-center justify-center bg-black h-[100vh] w-[100vw]">
            <div>
                <h1>Update Details</h1>


            </div>

            <div className="flex">
                <form onSubmit={changeData}>
                    <div>
                    Name:   <input type="text" value={data.name} name="name" onChange={changeSome} placeholder="Enter the name" required  />
                    </div>
                    <div>
                    Age:<input type="number" value={data.age} name="age" onChange={changeAge} placeholder="Enter the Age" required />

                    </div>
                    Gender  <select value={data.gender} onChange={changeSome} name="gender" className="bg-black" required>
                        <option value="Male" >Male</option>
                        <option value="Female">Female</option>
                    </select>

                    <div>
                    Interest( separated by comma)<input type="text" name="interest" value={data.interest.map(i => i.interest).join(", ")} onChange={changeInterest} required />

                    </div>

                    <div className="flex justify-evenly pt-3">
                        <div className="bg-blue-400 px-4 py-2 rounded"> <button type="submit">Update</button></div>
                        <div className="bg-red-400 px-4 py-2 rounded"><button type="button" onClick={back}>Back</button></div>

                    </div>
                </form>

            </div>
        </div>
    );


}
export default Update
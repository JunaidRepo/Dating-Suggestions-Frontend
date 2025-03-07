import axios from "axios";

function Delete({obj,back} ){
     
    let del=`http://localhost:8080/delete/${obj.id}`;

    let delMethod=async()=>{
        try{
            await axios.delete(del);
            back();
        }
        catch (e) {
            console.log(e);
        }

    }
    return(
        <>
        <div className="bg-red-500 p-3 text-white rounded">
        <h1>would you like to Delete</h1>
            Name: {obj.name}
            Gender: {obj.gender}
            Age:{obj.age}
            interest: {obj.interest.map(val=>val.interest).join(", ")}
            
            <button onClick={delMethod}>Yes</button>
        <button onClick={back}>Back</button>
        </div>
        

        </>
    );

}
export default Delete;
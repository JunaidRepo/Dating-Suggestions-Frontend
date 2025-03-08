import axios from "axios";

function Delete({ obj, back, msg }) {

    let del = `http://localhost:8080/delete/${obj.id}`;

    let delMethod = async () => {
        try {
            await axios.delete(del);
            msg("deleted sucessfully")
            back();
        }
        catch (e) {
            console.log(e);
        }

    }
    return (
        <>
            <div className="flex flex-col items-center p-7 fixed bg-black top-0 h-[100vh] w-[100vw] justify-center gap-10">
                <div>
                    <h1>would you like to Delete</h1>

                </div>

                <div>
                    <div>Name: {obj.name}</div>
                    <div>Gender: {obj.gender}</div>
                    <div>Age:{obj.age}</div>
                    <div>interest: {obj.interest.map(val => val.interest).join(", ")}</div>

                    <div className="flex justify-evenly pt-3">
                        <button className="bg-red-400 px-4 py-2 rounded" onClick={delMethod}>Yes</button>
                        <button className="bg-blue-400 px-4 py-2 rounded" onClick={back}>Back</button>

                    </div>



                </div>


            </div>


        </>
    );

}
export default Delete;
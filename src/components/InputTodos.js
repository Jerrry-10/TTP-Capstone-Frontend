import React,{Fragment,useState} from "react";

const InputTodo = () =>{
    const[description, setDescription] = useState("")
    const onSubmitFrom = async e =>{
        e.preventDefault();
        try{
            const body = {description}
            const response = await fetch("http://localhost:5001/todos", {
                method:"POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            window.location = "/userprofile";
        }catch(err){
            console.error(err.messenge)
        }
    }
    return <Fragment>
        <h1 className="text-center mt-5"> Your info is displayed below </h1>
        <form className="d-flex mt-5" onSubmit={onSubmitFrom}>
            <input type="text" placeholder='Put any addtional information...'className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
            <button className="btn btn-success">Add</button>
        </form>
    </Fragment>
}
export default InputTodo;
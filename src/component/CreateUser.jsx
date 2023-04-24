import React ,{useState} from "react";
import { NavLink } from "react-router-dom";

export default function (){
    const [fname,setFname] = useState("")
    const [lname,setLname] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [mobno,setMobno] = useState("")

 
function addData(){
    const obj = {
    fname:fname,
    lname:lname,
    email:email,
    password:password,
    mobno:mobno
    }
 
    const url ="http://localhost:5000/student"
    const promise = fetch(url,{
     headers:{
         "Content-Type":"application/json"
          },
          method:"POST",
          body:JSON.stringify(obj)
    })
    promise.then((res)=>
    res.json())
    .then((data)=>
    console.log(data),
     window.open("http://localhost:3000/show")
    ).catch((error)=>
    console.log(error))
 }

    return(
        <>

<div className="container-fluid ">
                <div className="contanier">
                    <div className="row">
                        <div className="col-sm-3 "></div>

                        <div className="col-sm-6 bg-info mt-5 p-5">
                            <p className=" fs-3 text-center"> Register</p>
                            <div className="mb-3 "> 
                                <p> FName:<input type="text" className="form-control" onChange={(e)=>setFname(e.target.value)}/></p>
                            </div>
                            <div className="mb-3 "> 
                                <p> name:<input type="text" className="form-control" onChange={(e)=>setLname(e.target.value)}/></p>
                            </div>
                            
                            <div className="mb-3 "> 
                                <p> email:<input type="text" className="form-control" onChange={(e)=>setEmail(e.target.value)}/></p>

                                <div className="mb-3 "> 
                                <p> password:<input type="text" className="form-control" onChange={(e)=>setPassword(e.target.value)}/></p>
                            </div>

                            <div className="mb-3 "> 
                                <p> mobno:<input type="text" className="form-control" onChange={(e)=>setMobno(e.target.value)}/></p>
                            </div>

                            </div>
                            <button className="btn btn-danger w-100"onClick={addData} >SAVE </button>
                        </div>
                    </div>
                    <div className="col-sm-3"></div>
                </div>
            </div>
        




        </>
    )
}
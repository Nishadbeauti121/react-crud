import React, { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
export default function ShowUser() {

    const [student, setStudent] = useState([])
    const [fname,setFname] = useState("")
    const [lname,setLname] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [mobno, setMobno] = useState("")
    const [id, setId] = useState(null)

//first step data show krana
function showData(){
 const url = "http://localhost:5000/student"
 const promise = fetch(url)

 promise.then((res) =>
            res.json()
        ).then((data) =>
            setStudent(data)
            // console.log(data)
        ).catch((error) =>
            console.log(error)
        )
 

}

console.log(student)

useEffect(() => {
    showData();
}, [])


//delete
function deleteData(id) {
    const url = `http://localhost:5000/student/${id}`;
    const promise = fetch(url, {
        headers: {
            "Content-Type":"application/json"
        },
        method:"DELETE"
    });
    promise.then((res) => {
        if (res.ok) {
            alert(" deleted successfully")
            window.location.reload(true)
        }
    })


}

//editdata
function editValue(id){
    const change = student [id-1]
    //console.log(change.fname)
   setFname(change.fname)
   setLname(change.lname)
   setEmail(change.email)
   setPassword(change.password)
   setMobno(change.mobno)
   setId(id)
}

function updateValue(){
const obj = {
    fname:fname,
    lname:lname,
    email:email,
    password:password,
    mobno:mobno
}

const url = `http://localhost:5000/student/${id}`
console.log(url)

const promise = fetch (url,{
    headers:{
        "Content-Type":"application/json"
    },
    method:"PUT",
    body:JSON.stringify(obj)
})
promise.then((res)=>
res.json()
).then((data)=>
//console.log(data)
setStudent(data),
window.location.reload()

).catch((error)=>
console.log(error)
)
}




    return (

        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 ">
                        <div className="col-sm-6  bg-info w-100 mt-5 p-5"><h1>Edit user record</h1>
                            <p> FName:<input type="text" className="form-control" value={fname} onChange={(e) => 
                                 setFname(e.target.value)} /></p>
                            <p> FName:<input type="text" className="form-control" value={lname} onChange={(e) => 
                                 setLname(e.target.value)} /></p>
                            <p> Email:<input type="text" className="form-control" value={email} onChange={(e) =>
                                setEmail(e.target.value)} /></p>
                            <p> Password:<input type="text" className="form-control" value={password} onChange={(e) =>
                                setPassword(e.target.value)} /></p>
                            <p> Mobno:<input type="text" className="form-control" value={mobno} onChange={(e) =>
                                setMobno(e.target.value)} /></p>

                            <button   className="btn btn-danger w-100 " onClick={updateValue}> update data </button>

                        </div>
                    </div>


                    <div className="col-sm-6 bg-warning mt-5">

                        <table className="table border-2">
                            <thead>
                                <tr>
                                    <th> fname</th>
                                    <th>name</th>
                                    <th> email</th>
                                    <th> password</th>
                                    <th> mobno</th>
                              
                                    <th>delete</th>
                                    <th>edit</th>
                                </tr>
                            </thead>
{
      student.map((data) =>
      <tbody>
                                    <tr>
                                    <td> {data.fname}</td>
                                    <td> {data.lname}</td>
                                    <td> {data.email}</td>
                                    <td> {data.password}</td>
                                    <td> {data.mobno}</td>
                                    <button type="button" class="btn btn-success " onClick={() => editValue(data.id)}>EditE</button>
                                    <button type="button" class="btn btn-danger " onClick={() => deleteData(data.id)}>DELETE</button>
                                  
                                     </tr>
                                     </tbody>
      )

}





                                
                           
                        </table>

                    </div>
                </div>

            </div>


        </>
    )
}
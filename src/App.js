import React from "react";
import  CreateUser from "./component/CreateUser"
import ShowUser from "./component/ShowUser"
import  Header from "./component/Header"
 


import {Routes, Route} from "react-router-dom"

export default function App(){
return(
   <>     
     <Header/> 

         <Routes>  
            <Route path="/" element={<CreateUser/>}> </Route>
            <Route path="/create" element={<CreateUser/>}></Route>
            <Route path="/show" element={<ShowUser/>}></Route>
          
           

        </Routes>
       
   </>
   
    
  
)


}

import React, { useState }  from "react";

function Form(){

   const [Name,setName]=useState("")
   const [Age,setAge]=useState("")
   const [email,setemail]=useState("")

   const handlename=(e)=>{
      setName(e.target.value)
   }
    const handleage=(e)=>{
      setAge(e.target.value)
   }

   const handleemail=(e)=>{
    setemail(e.target.value)
 }
    return(
        <>
       <h1 > ajay</h1>
        <label > Name </label>
        <input  onChange ={handlename}placeholder="Name"/>
        <br/>
        <br/>
        
        <label > Age </label>
        <input onChange={handleage}placeholder="Age"/>
        <br/>
        <br/>
        
        
         <label > email </label>
        <input onChange={handleemail} placeholder="email"/>
        <br/><br/><br/>

        <button >submit</button>



        <h1>Name-{Name}</h1>
        <h1>Age-{Age}</h1>
        <h1>email-{email}</h1>
        </>
    )
}
export default Form
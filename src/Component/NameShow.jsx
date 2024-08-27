import react, { useState } from "react" ;


function NameShow(){
   const [ name, setname] = useState("Ajaydeepak" )

   const [ age,setage] = useState(25)
     
    const handlename =()=>{
       
      if (name == "Ajaydeepak"){
        setname("Ajay")
        setage(24)
      }else{
        setname("Ajaydeepak")
        setage(25)
      }
      
      
   }

    return(

        <div>
          <h1>Name : {name}</h1>
          <h2>Age : {age}</h2>
          <button onClick={handlename}>change</button>
        </div>
    )     
    
}
export default NameShow
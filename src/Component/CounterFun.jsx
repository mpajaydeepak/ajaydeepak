import React ,{useState}from "react";

function CounterFun(){ 
    const [ Count,setCount]=useState(0)

    const handleadd=()=>{
        setCount(Count+1)
    }
    const handlesub=()=>{
        setCount(Count-1)
    }    
    return(
        <>
        <h1>Count : {Count}</h1>

        <button onClick={handleadd}>add</button>
        <button onClick={handlesub}>sub</button>
        </>
    )
}
export default CounterFun
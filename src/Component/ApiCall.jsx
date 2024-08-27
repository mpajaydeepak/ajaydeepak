import React , { useEffect, useState, useSyncExternalStore} from "react";



function ApiCall(){
     const[ productdata,setproductdata]=useState([])
     const[count,setcount]=useState(0);
    const handlefetch =async()=>{
        let res=await fetch ("https://fakestoreapi.com/products")
        let data=await res.json();
        setproductdata(data);
    };
    

    useEffect(()=>{
        handlefetch()
    },[count])


    const handlecount=()=>{
        setcount(count+1)
    }
    return(
       
<div>
    <h1 onClick={handlecount}> productdata -{count}</h1>
     { productdata.map((datas)=>(
        <div>
            <img src={datas.image} height={100} width={100}/>
            <h1>{datas.title}</h1>
            <h3>{datas.price}</h3>
        </div>

     

))} 

{/* <button onClick={handlefetch}>ApiCall</button> */}
</div>

    )
   

}
export default ApiCall
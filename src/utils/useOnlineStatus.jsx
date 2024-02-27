import { useEffect, useState } from "react";


const useOnlineStatus=()=>{
    const[onlineStatus,setOnlineaStatus]=useState(true);
    //check if online 
    useEffect(()=>{
     window.addEventListener("offline",()=>{
        setOnlineaStatus(false);
     });
     window.addEventListener("online",()=>{
        setOnlineaStatus(true);
     });


    },[]);

    //boolean value


    return onlineStatus;
}
export default useOnlineStatus;
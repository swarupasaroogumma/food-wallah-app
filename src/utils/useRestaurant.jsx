import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
const useRestaurant= (resId) =>{
const[resInfo,setResInfo]=useState(null);
useEffect( () =>{
    fetchData();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
const fetchData=async() =>{
const data=await fetch(MENU_API + resId);
const json =await data.json();
setResInfo(json.data);
};

    return resInfo;
}
export default useRestaurant;
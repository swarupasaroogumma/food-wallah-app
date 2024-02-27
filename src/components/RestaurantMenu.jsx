/* eslint-disable no-unsafe-optional-chaining */
// import { useState,useEffect } from "react";
// import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";


// const Restaurant=()=>{
//     const[resInfo,setresInfo]=useState(null);

// const{resId}=useParams();

//     useEffect(()=>{
//         fetchMenu();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [] );
//     const fetchMenu=async()=>{
//         const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.50330&lng=80.64650&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER;");
//         const json=await data.json();
//         console.log(json);
//         setresInfo(json.data);

//     };
//     if(resInfo===null)return <Shimmer/>
    
//   const{itemCards}=resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
//     console.log(itemCards);    
//   return (
//     <div className="menu">
//       <h1>{resInfo.cards[2].card.card.info.name}</h1>
//       <p>{resInfo.cards[2].card.card.info.cuisines.join(", ")} - {resInfo.cards[2].card.card.info.costForTwoMessage}</p>
//       <h2>Menu</h2>
//       <ul>
//         {itemCards.map((item) => (
        
//         <li  key={item.card.info.id}>{item.card.info.name}-{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
//         ))}
        
//       </ul>
//     </div>
//   );
      
 //}
//     return  resInfo===null ?(
//         <Shimmer/>
//     ):(
//         <div className="menu">
//             <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
//             <h2>Menu</h2>
//             <ul>
//                 <li>Birayani</li>
//                 <li>chicken</li>
//             </ul>
//         </div>
//     );
// };
//export default Restaurant;
//mport { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const Restaurant= () => {
  //const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
// eslint-disable-next-line no-undef
const resInfo=useRestaurant(resId);
//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//     try {
//       const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.50330&lng=80.64650&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
//       const data = await response.json();
//       setResInfo(data.data);
//     } catch (error) {
//       console.error("Error fetching menu:", error);
//     }
//   };
const[showIndex,setShowIndex]=useState(0)

  if (!resInfo) return <Shimmer />;

 //const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards ?? [];
const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
//console.log(categories);
 
 
  return (
    <div className="text-center">
      <h1 className="font-bold my-16 text-2xl">{resInfo.cards[2]?.card?.card?.info?.name}</h1>
      <p className="font-bold text-lg">{resInfo.cards[2]?.card?.card?.info?.cuisines?.join(", ")} - {resInfo.cards[2]?.card?.card?.info?.costForTwoMessage}</p>
      {/* <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name} - {(item.card.info.price ?? item.card.info.defaultPrice) / 100}</li>
        ))}
      </ul> */}
      {categories.map((category,index)=>(
      <RestaurantCategory key={category.card.card.item} data={category?.card?.card}
      showItems={index===showIndex?true:false}
      setShowIndex={()=>setShowIndex(index)}
       />
      
    
    
    ))}
    </div>
  );
};

export default Restaurant;


//import { useState } from "react";
import ItemList from "./ItemList";

// eslint-disable-next-line react/prop-types
const RestaurantCategory=({data,showItems,setShowIndex})=>{
    const handleClick=()=>{

        setShowIndex();
    }

    return(
        <div>
            {/* heaader */}

            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title}  ({data.itemCards.length})</span>
                     <span> ↓</span>
                </div>
            </div>
            {/* accodian body */}
           {showItems &&  <ItemList items={data.itemCards} />}
        </div>
    );
};
export default RestaurantCategory;
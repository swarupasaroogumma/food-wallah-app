import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";



const Cart=()=>{
    //get card items using selector
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    
    const handleClear=()=>{
        dispatch(clearCart());
    } 
    
    return(
        <div className="text-center m-4 p-14">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className=" m-auto">
                <button className="p-2 m-2 bg-black text-white"
                onClick={handleClear}
                > Clear Cart</button>
                {cartItems.length===0 && <h1> your cart empty add items</h1>}
                <ItemList items={cartItems}/>
                </div>
        </div>
    );
};
export default Cart;

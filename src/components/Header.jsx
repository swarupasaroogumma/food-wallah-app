import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext'; // Assuming UserContext is defined in this file
import { LOGO_URL } from '../utils/constants';
import {useSelector} from 'react-redux';

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser}=useContext(UserContext);
  console.log(loggedInUser);
  //subscribing to the store using selector
  const cartItems=useSelector((store)=>store.cart.items);
  console.log(cartItems);


  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="w-40">
        <img src={LOGO_URL} alt="App Logo" className="logo" />
      </div>
      <div className="flex items-center">
        <ul className='flex p-6 m-6'>
          <li className='px-4'>Online status:{onlineStatus ? "✅" : "🔴"}</li>
          <li className='px-4'><Link to="/">Home</Link></li>
          <li className='px-4'><Link to="/about">About Us</Link></li>
          <li className='px-4'><Link to="/contact">Contact Us</Link></li>
          <li className='px-4'><Link to="/grocery">Grocery</Link></li>
          <li className='px-4'><Link to="/cart">Cart -({cartItems.length}items)</Link></li>
          <button
            className="loginBtn"
            onClick={() => {
              setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className='px-4'>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

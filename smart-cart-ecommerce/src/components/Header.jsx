
import { NavLink, useNavigate } from "react-router-dom";

import { useSearchParams } from "react-router-dom";
import logo from "../../public/images/smartcart_icon.png";
import mobilelogo from "../../public/images/smartcart_icon.png";


import "./Header.css";
import { useState } from "react";

export function Header({cart}) {

  const navigate = useNavigate();



  const [searchParams] = useSearchParams();
  

  
   let totalQuantity = 0;

  cart.forEach((cartItem) => {
    totalQuantity +=  cartItem.quantity;
  });


  const searchQuery = searchParams.get("search");


  const [searchBar , setSearchBar] = useState(searchQuery || ""); 




  const handleSearchInputChange = (event) => {
    setSearchBar(event.target.value);
  }


  const handleSearchInputClick = () => {
    navigate(`/?search=${searchBar}`);
    setSearchBar("")
  }
   
  return (
    <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-link">
        <img className="logo" src={logo} />
        <img className="mobilelogo" src={mobilelogo} />
        </NavLink>
      </div>

      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" value={searchBar} onChange={handleSearchInputChange} />

        <button className="search-button" onClick={handleSearchInputClick}>
          <img className="search-icon" src="images/icons/search-icon.png" />
          
        </button>
      </div>

      <div className="right-section">
        <NavLink className="orders-link header-link" to="/orders">
          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src="images/icons/cart-icon.png" />
          <div className="cart-quantity"> {totalQuantity} </div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
  );
}

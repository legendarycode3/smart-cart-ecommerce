// import { Link } from 'react-router-dom';


/**
 * AM NOT SEPARATING THE HEADER FILE ON THIS PROJECT HERE..
 * IN AS MUCH AS THE HEADER FILE , IS SHARED ACCROSS ALL THE PAGE OF THE APPLICATION
 */

import { NavLink } from "react-router-dom";

// NOW USING IT AGAIN
import "./Header.css";
import { useState } from "react";

export function Header({cart}) {

  /**
   * CALCULATING THE TOTALL QUANTITY IN Cart
   * - AND ASSIGN THE VALUE TO THE "totalQuantity"- TO USE "CART DATA" FROM THE BACKEND INSTEAD OF PLAIN HTML .... WHICH WILL BE DISPLAYED ON THE  cartQuantity
   */
//  let totalQuantity = 0;

//   cart?.forEach((cartItem) => {
//     totalQuantity += cartItem.quantity; 
//   });
  
   let totalQuantity = 0;

  cart.forEach((cartItem) => {
    totalQuantity +=  cartItem.quantity;
  });


  // STATE FOR SEARCHINPUT-BAR
  const [searchBar , setSearchBar] = useState("");

  //CONTROL SERCH-INPUT-BAR ONCLICK ARROW FUNCTION FOR THE CHANGE ON THE INPUT TEXTBOX
  const handleSearchInputChange = (event) => {
    setSearchBar(event.target.value);
  }

  //CONTROL SERCH-INPUT-BAR ONCLICK ARROW FUNCTION FOR THE BUTTON
  const handleSearchInputClick = () => {
    console.log("The Inputed Text In The Search Bar Is:", searchBar);
    setSearchBar("")
  }

  return (
    <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-link">
          <img className="logo" src="images/logo-white.png" />
          <img className="mobile-logo" src="images/mobile-logo-white.png" />
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

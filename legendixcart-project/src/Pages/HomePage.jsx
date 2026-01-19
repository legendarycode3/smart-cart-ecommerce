import { Link } from "react-router-dom";

//import { products } from "../../starting-code/data/products";

import axios from 'axios';

import "./HomePage.css";
import "./Header.css";
import { useEffect , useState } from "react";

export function HomePage() {
    /**
     * APPLYING "DATA FETCHING" BY PUTING THE URL & ALSO USING IT WITH A fetch() FUNCTION
     */

    const [products, setProducts] = useState([]);

    const URL = 'http://localhost:3000/api/products'



    useEffect(() => {
      
      // fetch(`${URL}`)
      //   .then((res) => {
      //     //console.log(res)
      //     return res.json();
      //   })
      //   .then((data) => {
      //       //console.log(data);
      //       setProducts(data);
      //     });fetch(`${URL}`)

        axios.get(`${URL}`)
          .then((res) => {
            console.log(res.data)
            setProducts(res.data);
          })

    }, [])



      // axios.get('http://localhost:3000/api/products')
      //       .then((response) => {
      //         console.log(response.data);
      //         setProducts(response.data)
      //       });


      /*
          fetch(`${URL}`)
        .then((res) => {
          //console.log(res)
          res.json().then((data) => {
            //console.log(data);
            setProducts(data.message

            );
          });
        })
      */

    /*
    const fetchData = async () => {
        const res = await fetch(`${URL}`);
        const apiData = await res.json();
        console.log(apiData);
        setProducts(apiData);
      };

      fetchData();
    */

  return (
    <>
      <link rel="icon" type="image/home-favicon" href="/home-favicon.png" />

      <title> Legendix Cart</title>

      <div className="header">
        <div className="left-section">
          <Link to="/" className="header-link">
            <img className="logo" src="images/logo-white.png" />
            <img className="mobile-logo" src="images/mobile-logo-white.png" />
          </Link>
        </div>

        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Search" />

          <button className="search-button">
            <img className="search-icon" src="images/icons/search-icon.png" />
          </button>
        </div>

        <div className="right-section">
          <Link className="orders-link header-link" to="/orders">
            <span className="orders-text">Orders</span>
          </Link>

          <Link className="cart-link header-link" to="/checkout">
            <img className="cart-icon" src="images/icons/cart-icon.png" />
            <div className="cart-quantity">3</div>
            <div className="cart-text">Cart</div>
          </Link>
        </div>
      </div>

      <div className="home-page">
        <div className="products-grid">
            
          {products.map((product) => {
            return (
              <div key={product.id} className="product-container">
                <div className="product-image-container">
                  <img
                    className="product-image"
                    src={product.image}
                  />
                </div>

                <div className="product-name limit-text-to-2-lines">
                  {product.name}
                </div>

                <div className="product-rating-container">
                  <img
                    className="product-rating-stars"
                    src={`images/ratings/rating-${product.rating.stars * 10}.png`} 
                  />
                  <div className="product-rating-count link-primary"> {product.rating.count} </div>
                </div>

                <div className="product-price"> ${(product.priceCents / 100).toFixed(2)} </div>

                <div className="product-quantity-container">
                  <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>

                <div className="product-spacer"></div>

                <div className="added-to-cart">
                  <img src="images/icons/checkmark.png" />
                  Added
                </div>

                <button className="add-to-cart-button button-primary">
                  Add to Cart
                </button>
              </div>
            );
          })}




          
        </div>
      </div>
    </>
  );
}

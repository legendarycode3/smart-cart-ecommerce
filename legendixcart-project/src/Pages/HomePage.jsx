import { Link } from "react-router-dom";


//import { products } from "../../starting-code/data/products";

import axios from 'axios';

import "./HomePage.css";
// import "./Header.css";

import { Header } from "../components/Header";
import { useEffect , useState } from "react";

import { Product } from "./home/product";

// import { formatMoney } from '../utils/money';



export function HomePage({cart}) {
    /**
     * APPLYING "DATA FETCHING" BY PUTING THE URL & ALSO USING IT WITH A fetch() FUNCTION
     */

    const [products, setProducts] = useState([]);

    // const [cart , setCart] = useState([]);


 

    
    const URL = 'http://localhost:3000/api/products?expand=estimatedDelivery'

    //const cartDataURL = 'http://localhost:3000/api/cart-items'




    useEffect(() => {
      
      //FOR GETTING  THE PRODUCT DATA FROM THE BACKEND 
      /*
      fetch(`${URL}`)
        .then((res) => {
          //console.log(res)
          return res.json();
        })
        .then((data) => {
            //console.log(data);
            setProducts(data);
          });fetch(`${URL}`)
      */

        axios.get(`${URL}`)
          .then((res) => {
            console.log(res.data)
            setProducts(res.data);
          })


      //FOR GETTING  THE "CART DATA" FROM THE BACKEND 
      /*
        axios.get(`${cartDataURL}`)
          .then((res) => {
            console.log(res.data)
            setCart(res.data);
          })
        */

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

      <Header cart={cart} />
     



      <div className="home-page">
        <div className="products-grid">
            
          {products.map((product) => {

            return (
              <Product key={product.id} product={product} />
            );
          })}




          
        </div>
      </div>
    </>
  );
}

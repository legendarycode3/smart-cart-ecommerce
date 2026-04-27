import { Link } from "react-router-dom";



import axios from 'axios';

import "./HomePage.css";

import { Header } from "../components/Header";
import { useEffect , useState } from "react";

import { Product } from "./home/product";



import { useSearchParams } from "react-router-dom";



export function HomePage({cart}) {
  

    const [searchParams] = useSearchParams();

    const [products, setProducts] = useState([]);

   


 
    const URL = 'http://localhost:3000/api/products?expand=estimatedDelivery'


     const searchQuery = searchParams.get("search");


    useEffect(() => {

      const getHomeData = async () => {
       
        const urlPath = searchQuery ? `http://localhost:3000/api/products?search=${searchQuery}` : 'http://localhost:3000/api/products';
        const response = await axios.get(urlPath);
        setProducts(response.data);
      };
      
      getHomeData();


    }, [searchQuery])


    
      
  return (
    <>
      <link rel="icon" type="image/home-favicon" href="/home-favicon.png" />

      <title> SmartCart Ecommerce</title>

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

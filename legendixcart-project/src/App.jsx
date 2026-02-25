import axios from "axios";
import { useEffect, useState } from "react";

import { Routes, Route } from "react-router";

import { HomePage } from "./Pages/HomePage.jsx";
import { CheckoutPage } from "./Pages/CheckoutPage.jsx";
import { OrdersPage } from "./Pages/OrdersPage.jsx";
import { TrackingPage } from "./Pages/TrackingPage.jsx";

import { NotFoundPage } from "./Pages/NotFoundPage.jsx";

import "./App.css";

function App() {
  
    const [cart, setCart] = useState([]);

  // const cartDataURL = "http://localhost:3000/api/cart-items?expand=product";

  // useEffect(() => {
  //   axios.get(`${cartDataURL}`).then((res) => {
  //     console.log(res.data);
  //     setCart(res.data);
  //   });
  // }, []);


  
  useEffect(() => {
      const loadCart = async () => {
    const res = await axios.get("http://localhost:3000/api/cart-items?expand=product")
    setCart(res.data);
  };

    loadCart();
  }, [])

  


  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart}  />}>
        {" "}
      </Route>
      <Route path="checkout" element={<CheckoutPage cart={cart} />}>
        {" "}
      </Route>
      <Route path="orders" element={<OrdersPage cart={cart} />}>
        {" "}
      </Route>
      <Route
        path="tracking/:orderId/:productId"
        element={<TrackingPage cart={cart} />}
      >
        {" "}
      </Route>
      <Route path="*" element={<NotFoundPage cart={cart} />}>
        {" "}
      </Route>
    </Routes>
  );
}

export default App;

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

  const cartDataURL = "http://localhost:3000/api/cart-items";

  useEffect(() => {
    axios.get(`${cartDataURL}`).then((res) => {
      console.log(res.data);
      setCart(res.data);
    });
  }, []);

  
  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart} />}>
        {" "}
      </Route>
      <Route path="checkout" element={<CheckoutPage cart={cart} />}>
        {" "}
      </Route>
      <Route path="orders" element={<OrdersPage />}>
        {" "}
      </Route>
      <Route path="tracking" element={<TrackingPage />}>
        {" "}
      </Route>
      <Route path="*" element={<NotFoundPage />}>
        {" "}
      </Route>
    </Routes>
  );
}

export default App;

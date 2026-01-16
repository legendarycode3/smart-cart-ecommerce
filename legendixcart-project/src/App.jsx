import { Routes, Route } from 'react-router'

import { HomePage } from './Pages/HomePage.jsx'
import { CheckoutPage } from './Pages/CheckoutPage.jsx'
import { OrdersPage  } from './Pages/OrdersPage.jsx'
import { TrackingPage } from './Pages/TrackingPage.jsx'


import { NotFoundPage } from './Pages/NotFoundPage.jsx'

import './App.css'





function App() {

  return (
    <Routes>
        <Route path="/" element={  <HomePage /> }> </Route>
        <Route path="checkout" element={ <CheckoutPage /> }> </Route>
        <Route path="orders" element={  <OrdersPage /> }> </Route>
        <Route path="tracking" element={  <TrackingPage /> }> </Route>
        <Route path="*" element={  <NotFoundPage /> }> </Route>
    </Routes>
  )
}

export default App

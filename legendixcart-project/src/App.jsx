import { Routes, Route } from 'react-router'

import { HomePage } from './Pages/HomePage.jsx'
import './App.css'




function App() {

  return (
    <Routes>
        <Route path="/" element={  <HomePage /> }> </Route>
        <Route path="checkout" element={ <HomePage /> }> </Route>
    </Routes>
  )
}

export default App

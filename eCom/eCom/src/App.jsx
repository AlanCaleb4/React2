import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Orders from "./pages/Orders";
import Cart from "./pages/Cart";


function App() {

  return (


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;

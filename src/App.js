import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import Menu from "./Components/Menu";
import NavBar from "./Components/NavBar";
import Products from "./pages/Products";
import ProductDetails from "./pages/Product";
import Categories from "./pages/Categories";
import Orders from "./pages/Orders";
import Footer from "./Components/Footer";

export default function App() { 
  return (
    <BrowserRouter>
      <div className="container">
        <Menu/>
        <NavBar/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/produtos" element={<Products/>} />
          <Route path="/produto/:id" element={<ProductDetails/>}/>
          <Route path="/categorias" element={<Categories/>} />
          <Route path="/meus-pedidos" element={<Orders/>} />
        </Routes>
      </div>

      <Footer/>
    </BrowserRouter>
  )
}
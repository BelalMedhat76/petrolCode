import './App.css';
import Navbar from './component/Navbar';
import Head from './component/headerSlide/header';

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/footer/footer';
import ProductDetails from './pages/productDetails/details'
import FilterProContex from './pages/productFilter/filterProduct';
import ProductPage from './pages/products/product'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from './component/scrollUp/scrollup';
import FilterProPetro from './pages/productFilter/filterProductPetro';
import DetailsPetro from './pages/productDetails/detailsPetro';
import Coffee from './pages/coffeePage/coffee';
import FilterCoffee from './pages/coffeePage/filterCoffee';
import CoffeeDetails from './pages/coffeePage/coffeeDetails';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <ScrollToTop/>
        <Routes>
          <Route exact path="/" element={<Head/>} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/filterproductContex" element={<FilterProContex/>}/>
          <Route path="/filterproductPetro"  element={<FilterProPetro/>}/>
          <Route path='/productdetails/:id' element={<ProductDetails/>} />
          <Route path='/productdetailsPetro/:id' element={<DetailsPetro/>}/>
          <Route path="/coffee"  element={<Coffee/>}/>
          <Route path="/filterproductCoffee" element={<FilterCoffee/>}/>
          <Route path='/coffeeDetails/:id' element={<CoffeeDetails/>}/>
 
          </Routes>
          <Footer/>
          </BrowserRouter>
  
    </div>
  );
}

export default App;

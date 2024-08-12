import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './componets/Navbar/Navbar';
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCatagory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/loginsignup';
import mensbanner from './componets/assets/banner_mens.png'
import kidsbanner from './componets/assets/banner_kids.png'
import womensbanner from './componets/assets/banner_women.png'
import Footer from './componets/Footer/Footer';

function App() {
  
    return (
      <div>
        <BrowserRouter>
          
            <Navbar />
            <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/mens' element={<ShopCategory banner={mensbanner} category="men" />} />
            <Route path='/womens' element={<ShopCategory banner={womensbanner} category="women" />} />
            <Route path='/kids' element={<ShopCategory banner={kidsbanner} category="kid" />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Login' element={<LoginSignup />} />
            </Routes>
            <Footer />
          
        </BrowserRouter>
      </div>
    );
}

export default App;


import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Catalogue from './Pages/Catalogue'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import LoginSignup from './Pages/LoginSigup'
import Cart from './Pages/Cart'
import men_banner from './Components/Assets/fashion-sale-banners_52683-12049.avif'
import Product from './Pages/Product';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/catalogue' element={<Catalogue banner={men_banner} />}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/cart' element={<Cart/>}/>

      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

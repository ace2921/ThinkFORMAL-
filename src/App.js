
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Catalogue from './Pages/Catalogue'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import LoginSignup from './Pages/LoginSigup'
import Cart from './Pages/Cart'
import men_banner from './Components/Assets/fashion-sale-banners_52683-12049.avif'
import Product from './Pages/Product';
import Login from './Pages/Login';
import { AuthProvider } from "./Context/AuthContext"



function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/catalogue' element={<Catalogue banner={men_banner} />}/>
            <Route path='/product' element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
            </Route>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/contact' element={<ContactUs/>}/>
            <Route path='/signin' element={<Login/>}/>
            <Route path='/signup' element={<LoginSignup/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

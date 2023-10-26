import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './website/pages/Home';
// import Login from './admin/pages/Login';
import './admin/assets/style.css'
import AdminDashboard from './admin/pages/AdminDashboard';
import Footer from './website/layout/Footer';
import MainHeader from './website/layout/MainHeader';
import About from './website/pages/About';
import Work from './website/pages/Work';
import Communicables from './website/pages/Communicables';
import ShopNow from './website/pages/ShopNow';
import Connect from './website/pages/Connect';
import DetailsPage from './website/pages/shopNowPages/DetailsPage';
import Wishlist from './website/pages/shopNowPages/Wishlist';
import Cart from './website/pages/shopNowPages/Cart';
import LoginForm from './admin/pages/Login';
import Login from './website/pages/shopNowPages/myAccount/Login';
import Register from './website/pages/shopNowPages/myAccount/Register';


function App() {
  return (
    <BrowserRouter>
      <MainHeader />
      <Routes>
        {/* website Routes     */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/work' element={<Work />} />
        <Route path='/communicables' element={<Communicables />} />
        <Route path='/connect' element={<Connect />} />
        <Route path='/shopNow' element={<ShopNow />} />
        <Route path='/product/details' element={<DetailsPage />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/account/login' element={<Login />} />
        <Route path='/account/register' element={<Register />} />

        {/* admin Routes */}
        <Route path='/admin' element={<LoginForm />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />} />

      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;

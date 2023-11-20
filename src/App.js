// import React from 'react';
// import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import Home from './website/pages/Home';
// import './admin/assets/style.css'
// import AdminDashboard from './admin/pages/AdminDashboard';
// import Footer from './website/layout/Footer';
// import MainHeader from './website/layout/MainHeader';
// import About from './website/pages/About';
// import Work from './website/pages/Work';
// import Communicables from './website/pages/Communicables';
// import ShopNow from './website/pages/ShopNow';
// import Connect from './website/pages/Connect';
// import DetailsPage from './website/pages/shopNowPages/DetailsPage';
// import Wishlist from './website/pages/shopNowPages/Wishlist';
// import Cart from './website/pages/shopNowPages/Cart';
// import LoginForm from './admin/pages/Login';
// import Login from './website/pages/shopNowPages/myAccount/Login';
// import Register from './website/pages/shopNowPages/myAccount/Register';
// import SubCategroy from './website/pages/shopNowPages/SubCategroy';
// import ProductPage from './website/pages/shopNowPages/ProductPage';
// import ForgotPassword from './website/pages/shopNowPages/myAccount/ForgotPassword';
// import AddressBook from './website/pages/shopNowPages/myAccount/AddressBook';
// import OrderHistory from './website/pages/shopNowPages/myAccount/OrderHistory';


// function App() {
//   return (
//     <BrowserRouter>
//       <MainHeader />
//       <Routes>
//         {/* website Routes     */}
//         <Route path='/' element={<Home />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/work' element={<Work />} />
//         <Route path='/communicables' element={<Communicables />} />
//         <Route path='/connect' element={<Connect />} />
//         <Route path='/product-category/:category_slug/:subcategory_slug' element={<ProductPage />} />
//         <Route path="/product-category/:category_slug" element={<SubCategroy />} />
//         <Route path='/product/:product_slug' element={<DetailsPage />} />
//         <Route path='/wishlist' element={<Wishlist />} />
//         <Route path='/cart' element={<Cart />} />
//         <Route path='/account/login' element={<Login />} />
//         <Route path='/account/register' element={<Register />} />
//         <Route path='/account/forgotPwd' element={<ForgotPassword />} />
//         <Route path='/account/addressbook' element={<AddressBook />} />
//         <Route path='/account/order-history' element={<OrderHistory />} />
//       </Routes>
//       <Footer />



//       {/* admin penal routes */}
//       <AdminHeader />
//       <Routes>
//         <Route path='/admin' element={<LoginForm />} />
//         <Route path='/admin/dashboard' element={<AdminDashboard />} />
//       </Routes>
//       <AdminFooter />
//     </BrowserRouter>
//   );
// }

// export default App;



import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './website/pages/Home';
import './admin/assets/style.css'
import AdminDashboard from './admin/pages/AdminDashboard';
import Footer from './website/layout/Footer';
import MainHeader from './website/layout/MainHeader';
import About from './website/pages/About';
import Work from './website/pages/Work';
import ShopNow from './website/pages/ShopNow';
import Connect from './website/pages/Connect';
import DetailsPage from './website/pages/shopNowPages/DetailsPage';
import Wishlist from './website/pages/shopNowPages/Wishlist';

import LoginForm from './admin/pages/Login';
import Login from './website/pages/shopNowPages/myAccount/Login';
import Register from './website/pages/shopNowPages/myAccount/Register';
import SubCategroy from './website/pages/shopNowPages/SubCategroy';
import ProductPage from './website/pages/shopNowPages/ProductPage';
import ForgotPassword from './website/pages/shopNowPages/myAccount/ForgotPassword';
import AddressBook from './website/pages/shopNowPages/myAccount/AddressBook';
import OrderHistory from './website/pages/shopNowPages/myAccount/OrderHistory';
import NotFound from './website/component/NotFound';
import CheckOut from './website/pages/shopNowPages/CheckOut';
import CartItems from './website/pages/shopNowPages/CartItems';
import Layout from './website/layout/Layout';
import MyProfile from './website/pages/shopNowPages/myAccount/MyProfile';
import ChangePwd from './website/pages/shopNowPages/myAccount/ChangePwd';
import OrderDetails from './website/pages/shopNowPages/OrderDetails';
import PrivateRoute from './website/utils/authMiddleware';
import Career from './website/pages/Career';
import Volunteer from './website/pages/Volunteer';
import Internship from './website/pages/Internship';
import Jobs from './website/pages/Jobs';
import Education from './website/pages/work/Education';
import Communicable from './website/pages/communicables/Communicable';
import ReportDetails from './website/pages/communicables/ReportDetails';
import Empowering from './website/pages/work/Empowering';
import IssuesOfDignity from './website/pages/work/IssuesOfDignity';
import Livelihood from './website/pages/work/Livelihood';
import SustainableLiving from './website/pages/work/SustainableLiving';
import Publication from './website/pages/work/Publication';
import History from './website/pages/aboutPages.js/History';
import Accounts from './website/pages/aboutPages.js/Accounts';



function App() {
  return (
    <BrowserRouter>


      <Layout>
        <Routes>
          {/* Website Routes */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/about-us/history' element={<History />} />
          <Route path='/about-us/accounts' element={<Accounts />} />

          <Route path='/work' element={<Work />} />

          <Route path='/connect' element={<Connect />} />

          <Route path='/career' element={<Career />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path='/connect/intern' element={<Internship />} />
          <Route path='/connect/jobs' element={<Jobs />} />


          <Route path='/work/education' element={<Education />} />
          <Route path='/work/empowering-children-and-youth' element={<Empowering />} />
          <Route path='/work/issues-of-dignity-and-survival' element={<IssuesOfDignity />} />
          <Route path='/work/liveLihoods' element={<Livelihood />} />
          <Route path='/work/sustainable-living' element={<SustainableLiving />} />
          <Route path='/work/publication' element={<Publication />} />


          <Route path='/communicable' element={<Communicable />} />
          <Route path='/communicable/details' element={<ReportDetails />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/cart' element={<CartItems />} />
          <Route path='/account/login' element={<Login />} />
          <Route path='/account/register' element={<Register />} />
          <Route path='/account/forgotPwd' element={<ForgotPassword />} />
          <Route path='/account/addressbook' element={<AddressBook />} />
          <Route path='/account/order-history' element={<PrivateRoute element={<OrderHistory />} />} />
          <Route path='/account/change-password' element={<ChangePwd />} />
          <Route path='/account/myprofile' element={<PrivateRoute element={<MyProfile />} />} />
          <Route path="/:category_slug" element={<SubCategroy />} />
          <Route path='/:category_slug/:subcategory_slug' element={<SubCategroy />} />
          <Route path='/:category_slug/:subcategory_slug/:product_slug' element={<DetailsPage />} />

          <Route path="/order/:orderId/:enc" element={<OrderDetails />} />
          <Route path='/*' element={<NotFound />} />
          <Route path='/checkout' element={<CheckOut />} />

          {/* admin routes */}
          <Route path='/admin' element={<LoginForm />} />
          <Route path='/admin/dashboard' element={<AdminDashboard />} />
        </Routes>
      </Layout>



    </BrowserRouter>
  );
}

export default App;

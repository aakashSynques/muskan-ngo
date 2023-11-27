
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './website/pages/Home';
import './admin/assets/style.css'
import AdminDashboard from './admin/pages/AdminDashboard';
import Footer from './website/layout/Footer';
import MainHeader from './website/layout/MainHeader';
import About from './website/pages/About';
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
import Education from './website/pages/work/Education';
import Communicable from './website/pages/communicables/Communicable';
import ReportDetails from './website/pages/communicables/ReportDetails';
import Empowering from './website/pages/work/Empowering';
import IssuesOfDignity from './website/pages/work/IssuesOfDignity';
import Livelihood from './website/pages/work/Livelihood';
import SustainableLiving from './website/pages/work/SustainableLiving';
import Publication from './website/pages/work/Publication';
import History from './website/pages/aboutPages/History';
import Accounts from './website/pages/aboutPages/Accounts';
import Blog from './website/pages/communicables/Blog';
import Mission from './website/pages/aboutPages/Mission';
import WhoWeWork from './website/pages/aboutPages/WhoWeWork';
import Policies from './website/pages/aboutPages/Policies';
import OurTeam from './website/pages/aboutPages/OurTeam';
import Collaborations from './website/pages/aboutPages/Collaborations';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/about-us/history' element={<History />} />
          <Route path='/about-us/mission/' element={<Mission />} />
          <Route path='/about-us/who-we-work-with/' element={<WhoWeWork />} />
          <Route path='/about-us/policies/' element={<Policies />} />
          <Route path='/about-us/accounts/' element={<Accounts />} />
          <Route path='/about-us/our-team/' element={<OurTeam />} />
          <Route path='/about-us/collaborations/' element={<Collaborations />} />


          <Route path='/connect' element={<Connect />} />
          <Route path='/work/education' element={<Education />} />
          <Route path='/work/empowering-children-and-youth' element={<Empowering />} />
          <Route path='/work/issues-of-dignity-and-survival' element={<IssuesOfDignity />} />
          <Route path='/work/liveLihoods' element={<Livelihood />} />
          <Route path='/work/sustainable-living' element={<SustainableLiving />} />
          <Route path='/work/publication' element={<Publication />} />

          <Route path='/communicable' element={<Communicable />} />
          <Route path='/communicables/blog/' element={<Blog />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/cart' element={<CartItems />} />
          <Route path='/account/login' element={<Login />} />
          <Route path='/account/register' element={<Register />} />
          <Route path='/account/forgotPwd' element={<ForgotPassword />} />
          <Route path='/account/addressbook' element={<PrivateRoute element={<AddressBook />} />} />
          <Route path='/account/order-history' element={<PrivateRoute element={<OrderHistory />} />} />
          <Route path='/account/change-password' element={<ChangePwd />} />
          <Route path='/account/myprofile' element={<PrivateRoute element={<MyProfile />} />} />
          <Route path="/:category_slug" element={<SubCategroy />} />
          <Route path='/:category_slug/:subcategory_slug' element={<SubCategroy />} />
          <Route path='/:category_slug/:subcategory_slug/:product_slug' element={<DetailsPage />} />

          <Route path="/order/:orderId/:enc" element={<OrderDetails />} />
          <Route path='/*' element={<NotFound />} />
          <Route path='/checkout' element={<CheckOut />} />

          <Route path='/admin' element={<LoginForm />} />
          <Route path='/admin/dashboard' element={<AdminDashboard />} />
        </Routes>
      </Layout>



    </BrowserRouter>
  );
}

export default App;

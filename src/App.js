
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
import OrderDetails from './website/pages/shopNowPages/myAccount/OrderDetails';
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

import LoginForm from "./admin/pages/Login";
import SideBar from "./admin/layout/SideBar";
import AdminCategory from "./admin/pages/AdminCategory";
import AdminSubCategory from "./admin/pages/AdminSubCategory";
import AdminAttributes from "./admin/pages/AdminAttributes";
import AdminSubCategoryAttributeGroup from "./admin/pages/AdminSubCategoryAttributeGroup";
import AdminAddBlog from "./admin/pages/AdminAddBlog";
import AdminProducts from "./admin/pages/AdminProducts";
import AdminOrders from "./admin/pages/AdminOrders";
import AdminOrderDetails from "./admin/pages/AdminOrderDetails";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <SideBar>{children}</SideBar>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout><Home /> </Layout>} />
        <Route path='/about-us' element={<Layout><About /> </Layout>} />
        <Route path='/about-us/history' element={<Layout><History /></Layout>} />
        <Route path='/about-us/mission/' element={<Layout><Mission /></Layout>} />
        <Route path='/about-us/who-we-work-with/' element={<Layout><WhoWeWork /></Layout>} />
        <Route path='/about-us/policies/' element={<Layout><Policies /></Layout>} />
        <Route path='/about-us/accounts/' element={<Layout><Accounts /></Layout>} />
        <Route path='/about-us/our-team/' element={<Layout><OurTeam /></Layout>} />
        <Route path='/about-us/collaborations/' element={<Layout><Collaborations /></Layout>} />
        <Route path='/connect' element={<Layout><Connect /></Layout>} />
        <Route path='/work/education' element={<Layout><Education /></Layout>} />
        <Route path='/work/empowering-children-and-youth' element={<Layout><Empowering /></Layout>} />
        <Route path='/work/issues-of-dignity-and-survival' element={<Layout><IssuesOfDignity /></Layout>} />
        <Route path='/work/liveLihoods' element={<Layout><Livelihood /></Layout>} />
        <Route path='/work/sustainable-living' element={<Layout><SustainableLiving /></Layout>} />
        <Route path='/work/publication' element={<Layout><Publication /></Layout>} />
        <Route path='/communicable' element={<Layout><Communicable /></Layout>} />
        <Route path='/communicables/blog/' element={<Layout><Blog /></Layout>} />
        <Route path='/wishlist' element={<Layout><Wishlist /></Layout>} />
        <Route path='/cart' element={<Layout><CartItems /></Layout>} />
        <Route path='/account/login' element={<Layout><Login /></Layout>} />
        <Route path='/account/register' element={<Layout><Register /></Layout>} />
        <Route path='/account/forgotPwd' element={<Layout><ForgotPassword /></Layout>} />

        <Route path='/account/addressbook' element={<PrivateRoute element={<Layout><AddressBook /></Layout>} />} />
        <Route path='/account/order-history' element={<PrivateRoute element={<Layout><OrderHistory /></Layout>} />} />
        <Route path='/account/change-password' element={<PrivateRoute element={<Layout><ChangePwd /></Layout>} />} />
        <Route path='/account/myprofile' element={<PrivateRoute element={<Layout><MyProfile /></Layout>} />} />

        <Route path="/:category_slug" element={<Layout><SubCategroy /></Layout>} />
        <Route path='/:category_slug/:subcategory_slug' element={<Layout><SubCategroy /></Layout>} />
        <Route path='/:category_slug/:subcategory_slug/:product_slug' element={<Layout><DetailsPage /></Layout>} />
        <Route path="/order/:orderId/:enc" element={<Layout><OrderDetails /></Layout>} />
        <Route path='/checkout' element={<Layout><CheckOut /></Layout>} />

        <Route path='/*' element={<NotFound />} />

        {/* <Route path="/admin" element={<LoginForm />} />
        <Route path="/admin/dashboard" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
        <Route path="/admin/category" element={<AdminLayout><AdminCategory /> </AdminLayout>} />
        <Route path="/admin/sub-category" element={<AdminLayout><AdminSubCategory /></AdminLayout>} />
        <Route path="/admin/attributes" element={<AdminLayout><AdminAttributes /></AdminLayout>} />
        <Route path="/admin/sub-category-attribute-group" element={<AdminLayout><AdminSubCategoryAttributeGroup /></AdminLayout>} />
        <Route path="/admin/products" element={<AdminLayout><AdminProducts /> </AdminLayout>} />
        <Route path="/admin/:order_status/orders" element={<AdminLayout><AdminOrders /> </AdminLayout>} />
        <Route path="/admin/:order_status/orders/:customer_id" element={<AdminLayout><AdminOrders /> </AdminLayout>} />
        <Route path="/admin/order/:cust_order_id/:enc" element={<AdminLayout><AdminOrderDetails /> </AdminLayout>} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;


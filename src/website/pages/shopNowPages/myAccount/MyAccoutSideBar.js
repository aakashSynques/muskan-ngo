// import React from 'react'
// import { Col, Nav, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// const MyAccoutSideBar = () => {
//     return (
//         <div className="d-none d-md-block">
//             <div className="list-group accolumn px-3">
//                 <h6 class="pb-2 text-uppercase"><i class="fa fa-user main-color" aria-hidden="true" style={{ fontSize: "22px" }}></i> &nbsp;  ACCOUNT SETTINGS</h6>
//                 <Link to='/account/login'>
//                     Login .
//                 </Link>
//                 <Nav.Link to='/account/register'>
//                     Register .
//                 </Nav.Link>
//                 <Nav.Link href="">
//                     Forgotten Password
//                 </Nav.Link>
//                 <Nav.Link href="">
//                     My Account
//                 </Nav.Link>
//                 <Nav.Link href="">
//                     Address Book
//                 </Nav.Link>
//                 <hr />
//                 <h6 class="pb-2 text-uppercase"> <i class="fa fa-pencil-square-o main-color" aria-hidden="true" style={{ fontSize: "22px" }}></i>  &nbsp; MY ORDERS</h6>
//                 <Nav.Link href="">
//                     Order History
//                 </Nav.Link>
//                 <Nav.Link href="">
//                     Downloads
//                 </Nav.Link>
//                 <Nav.Link href=''>
//                     Returns
//                 </Nav.Link>
//                 <Nav.Link href="">
//                     Transactions
//                 </Nav.Link>
//                 <hr />
//                 <h6 class="pb-2 text-uppercase"> <i class="fa fa-address-card main-color" style={{ fontSize: "22px" }} aria-hidden="true"></i>&nbsp; MY STUFF</h6>
//                 <Nav.Link href="">
//                     Wish List
//                 </Nav.Link>
//                 <Nav.Link href="">
//                     Reward Points
//                 </Nav.Link>
//                 <Nav.Link href="">
//                     Newsletter
//                 </Nav.Link>
//             </div>
//         </div>
//     )
// }

// export default MyAccoutSideBar



import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyAccountSideBar = () => {
    return (
        <div className="d-none d-md-block">
            <div className="list-group accolumn px-3">
                <h6 className="pb-2 text-uppercase"><i className="fa fa-user main-color" aria-hidden="true" style={{ fontSize: "22px" }}></i> &nbsp;  ACCOUNT SETTINGS</h6>
                <Link to="/account/login">
                    Login
                </Link>
                <Link to="/account/register">
                    Register
                </Link>
                <Link to="/account/forgotPwd">
                    Forgotten Password
                </Link>
                <Link to="/account/login">
                    My Account
                </Link>
                <Link to="/account/addressbook">
                    Address Book
                </Link>
                <hr />
                <h6 className="pb-2 text-uppercase"> <i className="fa fa-pencil-square-o main-color" aria-hidden="true" style={{ fontSize: "22px" }}></i>  &nbsp; MY ORDERS</h6>
                <Link to="/account/order-history">
                    Order History
                </Link>
                <Link to="/account/order-history">
                    Downloads
                </Link>
                <Link to="/account/order-history">
                    Returns
                </Link>
                <Link to="/account/order-history">
                    Transactions
                </Link>
                <hr />
                <h6 className="pb-2 text-uppercase"> <i className="fa fa-address-card main-color" style={{ fontSize: "22px" }} aria-hidden="true"></i>&nbsp; MY STUFF</h6>
                <Link to="/wishlist">
                    Wish List
                </Link>
                <Link to="/cart">
                    Cart
                </Link>
            </div>
        </div>
    );
}

export default MyAccountSideBar;

import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const MyAccountSideBar = () => {
    const tokenData = useSelector((state) => state.token);
    return (
        <div className="">
            <div className="list-group accolumn px-3">
                {/* <h6 className="pb-2 text-uppercase"><i className="fa fa-user main-color" aria-hidden="true" style={{ fontSize: "22px" }}></i> &nbsp;  ACCOUNT SETTINGS</h6> */}
                {/* <h5>{tokenData.customer_fname} {tokenData.customer_lname}</h5> */}
                <font size="2">Good to see you again</font>
            </div>
            <div className="list-group accolumn px-3 mt-3">
                <h6 className="pb-2 text-uppercase"><i className="fa fa-user main-color" aria-hidden="true" style={{ fontSize: "22px" }}></i> &nbsp;  ACCOUNT SETTINGS</h6>

                <Link to="/account/myprofile">
                    My Profile
                </Link>
                <Link to="/account/addressbook">
                    Address Book
                </Link>
                <Link to="/account/forgotPwd">
                    Forgotten Password
                </Link>

                <Link to="/account/logout">
                    Log out
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

import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const MyAccountSideBar = () => {
    // const tokenData = useSelector((state) => state.token);
    // const tokenDataFromLocalStorage = localStorage.getItem("muskan_token_data");
    // const parsedTokenData = tokenDataFromLocalStorage ? JSON.parse(tokenDataFromLocalStorage) : null;
    // const handleLogout = () => {
    //     localStorage.removeItem("muskan_token_data");
    //     localStorage.removeItem("muskan_token");
    // };
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('muskan_token');
        localStorage.removeItem('muskan_token_data');
        navigate('/account/login');
    };

    return (
        <div className="">
            <div className="list-group accolumn px-3">
                {/* <h5>{parsedTokenData ? `${parsedTokenData.customer_fname} ${parsedTokenData.customer_lname}` : 'N/A'}</h5> */}
                <font size="2">Good to see you again</font>
            </div>
            <div className="list-group accolumn px-3 mt-3">
                <h6 className="pb-2 text-uppercase"><i className="fa fa-user main-color" aria-hidden="true" style={{ fontSize: "22px" }}></i> &nbsp;  ACCOUNT SETTINGS</h6>
                <ul>
                    <li>
                        <Link to="/account/myprofile">
                            My Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/account/addressbook">
                            Address Book
                        </Link>
                    </li>
                    <li>
                        <Link to="/account/change-password">
                            Change Password
                        </Link>
                    </li>
                    <li >
                        <p onClick={handleLogout} style={{ cursor: "pointer" }}>Log out</p>
                    </li>

                </ul>

                <hr />
                <h6 className="pb-2 text-uppercase"> <i className="fa fa-pencil-square-o main-color"
                    aria-hidden="true" style={{ fontSize: "22px" }}></i>  &nbsp; MY ORDERS</h6>
                <ul>
                    <li>
                        <Link to="/account/order-history">
                            Order History
                        </Link>
                    </li>
                    <li>
                        <Link to="/account/order-history">
                            Downloads
                        </Link>
                    </li>
                    <li>
                        <Link to="/account/order-history">
                            Returns
                        </Link>
                    </li>
                    <li>
                        <Link to="/account/order-history">
                            Transactions
                        </Link>
                    </li>
                </ul>
                <hr />
                <h6 className="pb-2 text-uppercase"> <i className="fa fa-address-card main-color"
                    style={{ fontSize: "22px" }} aria-hidden="true"></i>&nbsp; MY STUFF</h6>


                <ul>
                    <li>  <Link to="/wishlist">
                        Wish List
                    </Link></li>
                    <li>
                        <Link to="/cart">
                            Cart
                        </Link>
                    </li>
                </ul>


                {/* <ul>
                    <li>
                        <Link to="/account/myprofile">
                            My Profile
                        </Link>
                    </li>
                    <li>
                    <Link to="/account/addressbook">
                    Address Book
                </Link>
                    </li>

                </ul> */}
            </div>
        </div>
    );
}

export default MyAccountSideBar;

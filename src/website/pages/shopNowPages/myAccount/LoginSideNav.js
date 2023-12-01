import React from 'react'
import { Link } from 'react-router-dom'

const LoginSideNav = () => {
    return (
        <>
            <div className="list-group accolumn px-3 mt-5">
                <h6 className="pb-2 text-uppercase"><i className="fa fa-user main-color" aria-hidden="true" style={{ fontSize: "22px" }}></i> &nbsp;  ACCOUNT SETTINGS</h6>
                <ul>
                    <li>
                        <Link to="/account/login">
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link to="/account/register">
                            Register
                        </Link>
                    </li>
                    <li>
                        <Link to="/account/forgotPwd">
                            Forgot Password?
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
        </>
    )
}

export default LoginSideNav
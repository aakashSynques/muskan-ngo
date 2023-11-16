

import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav, NavDropdown, Badge, Row, Col } from 'react-bootstrap';
import logo from '../../Muskaan-logo.png';
import HeaderTop from './HeaderTop';
import { Link } from 'react-router-dom';
import { fetch } from '../../utils';
import { useSelector, useDispatch } from 'react-redux';
import CartSidebar from '../component/CartSidebar';

const MainHeader = () => {
    const cart = useSelector((state) => state.cart.items);
    const wishlistData = useSelector((state) => state.wishlistData);
    const [categoryList, setCategoryList] = useState([]);
    const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false); // State for cart sidebar visibility
    const [isOverlayActive, setIsOverlayActive] = useState(false); // State for overlay visibility

    const getCategryList = async () => {
        try {
            const response = await fetch("/category/hierarchy", "get", null, null);
            setCategoryList(response.data.data.category);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getCategryList();
    }, []);
    const openCartSidebar = () => {
        setIsCartSidebarOpen(true);
        setIsOverlayActive(true);
    }
    const closeCartSidebar = () => {
        setIsCartSidebarOpen(false);
        setIsOverlayActive(false);
    }
    return (

        <div>
            <HeaderTop />

            {/* Add the overlay with conditional class based on the overlay state */}
            <div className={`overlay ${isOverlayActive ? 'active' : ''}`} onClick={closeCartSidebar}></div>
            <section className='navigation'>
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand className="" href="#">
                            <img src={logo} alt="Logo" className="logo-width" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Item>
                                    <Link to="/" className='nav-link'>Home</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link to="/about" className='nav-link'>About</Link>
                                </Nav.Item>
                                {/* <Nav.Item>
                                    <Link to="/work" className='nav-link'>Work</Link>
                                </Nav.Item> */}

                                <NavDropdown title="Work" id="basic-nav-dropdown" className="custom-dropdown">
                                    <NavDropdown.Item>
                                        <Link to="/work/education" className="text-dark">
                                            Education
                                        </Link>
                                    </NavDropdown.Item>
                                </NavDropdown>


                                <Nav.Item>
                                    <Link to="/communicable" className='nav-link'>Communicables</Link>
                                </Nav.Item>

                                {/* 

                                <NavDropdown title="Communicables" id="basic-nav-dropdown" className="custom-dropdown">
                                    <NavDropdown.Item>
                                        <Link to="/communicables/reports" className="text-dark">
                                        Reports
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/communicables/field-realities" className="text-dark">
                                        Field Realities
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/communicables/community-stories" className="text-dark">
                                        Community Stories
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/communicables/childrens-literature " className="text-dark">
                                        Children’s Literature
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/communicables/reflections" className="text-dark">
                                        Reflections
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/communicables/classroom-experiences" className="text-dark">
                                        Classroom experiences
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/communicables/blog" className="text-dark">
                                        Blog
                                        </Link>
                                    </NavDropdown.Item>
                                </NavDropdown> */}




                                <NavDropdown title="Connect" id="basic-nav-dropdown" className="custom-dropdown">
                                    <NavDropdown.Item>
                                        <Link to="/career" className="text-dark">
                                            Career
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/volunteer" className="text-dark">
                                            Volunteer
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/connect/jobs" className="text-dark">
                                            Jobs
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/connect/intern " className="text-dark">
                                            Intern
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/connect" className="text-dark">
                                            Connect
                                        </Link>
                                    </NavDropdown.Item>
                                </NavDropdown>




                                <NavDropdown title="Shop Now" id="basic-nav-dropdown">
                                    {categoryList.map((category, index) => (
                                        <NavDropdown.Item key={index}>
                                            <Link to={`/${category.category_slug}`} className='text-dark'>{category.category_name}</Link>
                                        </NavDropdown.Item>
                                    ))}
                                </NavDropdown>


                                <Nav.Item className='px-1 pt-1'>
                                    <Link to="/wishlist" className='nav-link pt-2 px-1 whishlist-nav'>
                                        <Badge bg="danger" className='rounded-5'>{wishlistData.wishListDataCount.length}</Badge>
                                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item className='px-2 pt-1'>
                                    <Link className='nav-link pt-2 px-1 whishlist-nav' onClick={openCartSidebar}>
                                        <Badge bg="danger" className='rounded-5'>{cart.length}</Badge>
                                        <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item className='px-1 pt-1'>
                                    <Link to="/account/login" className='nav-link pt-2 px-1 whishlist-nav'>
                                        <i className="fa fa-user-o px-2" aria-hidden="true"></i>
                                    </Link>
                                </Nav.Item>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </section>

            {/* Pass the overlay and openCartSidebar function to the CartSidebar component */}
            <CartSidebar isOpen={isCartSidebarOpen} closeSidebar={closeCartSidebar} />
        </div>
    );
}

export default MainHeader;
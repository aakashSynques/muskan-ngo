import React from 'react';
import { Container, Navbar, Nav, NavDropdown, Badge } from 'react-bootstrap';

import logo from '../../Muskaan-logo.png'


import HeaderTop from './HeaderTop'
import { Link } from 'react-router-dom';

const MainHeader = () => {
    return (
        <div>
            <HeaderTop />
            <section className='navigation'>
                <Navbar expand="lg" >
                    <Container>
                        <Navbar.Brand className="d-md-none" href="#">
                            <img src={logo} alt="Logo" className="logo-width" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Item>
                                    <Link to="/" className='nav-link'>Home</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link to="/about" className='nav-link'>About Us</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link to="/work" className='nav-link'>Work</Link>
                                </Nav.Item>
                                <Navbar.Brand className="d-none d-md-block" href="#">
                                    <img src={logo} alt="Logo" className="logo-width" />
                                </Navbar.Brand>
                                <Nav.Item>
                                    <Link to="/communicables" className='nav-link'>Communicables</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link to="/connect" className='nav-link'>Connect</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link to="/products" className='nav-link'>Shop Now</Link>
                                </Nav.Item>


                                <Nav.Item className='px-1'>
                                    <Link to="/wishlist" className='nav-link pt-2 px-1 whishlist-nav'>
                                        <Badge bg="danger" className='rounded-5'>0</Badge>
                                        <i className="fa fa-heart-o" aria-hidden="true">
                                        </i>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item className='px-1'>
                                    <Link to="/cart" className='nav-link pt-2 px-1 whishlist-nav'>
                                        <Badge bg="danger" className='rounded-5'>0</Badge>
                                        <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item className='px-1'>
                                    <Link to="/account/login" className='nav-link pt-2 px-1 whishlist-nav'>
                                        <i className="fa fa-user-o px-2" aria-hidden="true"></i>
                                    </Link>
                                </Nav.Item>


                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </section>
        </div>
    )
}

export default MainHeader

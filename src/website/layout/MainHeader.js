import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
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
                                    <Link to="/shopNow" className='nav-link'>
                                        Shop Now
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

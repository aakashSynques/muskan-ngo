import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../../Muskaan-logo.png'


import HeaderTop from './HeaderTop'

const NavigationBar = () => {
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
                                <Nav.Link href="#">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#">About Us</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#">Work</Nav.Link>
                            </Nav.Item>
                            <Navbar.Brand className="d-none d-md-block" href="#">
                                <img src={logo} alt="Logo" className="logo-width" />
                            </Navbar.Brand>
                            <Nav.Item>
                                <Nav.Link href="#">Communicables</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#">Connect</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#">
                                    Shop Now
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </section>
        </div>
    )
}

export default NavigationBar

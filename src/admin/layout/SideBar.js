import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Image, Nav } from 'react-bootstrap';
import TopNavBar from './TopNavBar';

const SideBar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true); // Start with the sidebar closed

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const mainContentClassName = `main-content${sidebarOpen ? '' : ' closed'}`;


    return (
        <Container fluid>
            <Row>
                <Col md={2} className={`sidebar${sidebarOpen ? ' open' : ''}`}>
                    <div className="position-sticky">
                        <Nav defaultActiveKey="/home" className="flex-column text-white">
                            <Nav.Link href="#" className='text-white'>Dashboard</Nav.Link>
                            <Nav.Link href="#" className='text-white'>Orders</Nav.Link>
                            <Nav.Link href="#" className='text-white'>Products</Nav.Link>
                        </Nav>
                    </div>
                    <div className="toggle-button">
                        <button onClick={toggleSidebar} className="btn btn-light">
                            ☰
                        </button>
                    </div>
                    
                </Col>

                <Col md={10} className={mainContentClassName}>
         
                    <main>Your main content here</main>
                </Col>
            </Row>
        </Container>
    )
}

export default SideBar

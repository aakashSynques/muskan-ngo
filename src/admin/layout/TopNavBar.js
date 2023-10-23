import React, {useState} from 'react'
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';

const TopNavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Your Brand</Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
        </Navbar>
    </div>
  )
}

export default TopNavBar




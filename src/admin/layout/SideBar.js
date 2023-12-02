import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Image,
  Nav,
  Navbar,
} from "react-bootstrap";
import TopNavBar from "./TopNavBar";
import { Link } from "react-router-dom";

const SideBar = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true); // Start with the sidebar closed

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const mainContentClassName = `main-content ${sidebarOpen ? "" : " closed"}`;

  const handleLogout = () => {
    localStorage.removeItem('muskan_token_admin');
    window.location.href = '/admin';
  };

  return (
    <Container fluid>
      <Row>
        <Col md={2} className={`sidebar ${sidebarOpen ? " open" : ""}`}>
          <div className="position-sticky">
            <Nav defaultActiveKey="/home" className="flex-column text-white">
              <Nav.Item
                href="#"
                className=" position-absolute top-0 end-0 text-white float-right "
              >
                {/* <button
                  onClick={toggleSidebar}
                  type="button"
                  className="btn-close text-white float-right"
                  aria-label="Close"
                >
                  ☰
                </button> */}
              </Nav.Item >

              <Nav.Item className="py-2 px-2">
                <Link className="text-white py-2" to="/admin/dashboard">Dashboard</Link>
              </Nav.Item >
              <Nav.Item className="py-2 px-2">
                <Link className="text-white py-2" to="/admin/category"> Category</Link>
              </Nav.Item>

              <Nav.Item className="py-2 px-2">
                <Link className="text-white py-2" to="/admin/sub-category">Sub Category</Link>
              </Nav.Item >

              <Nav.Item className="py-2 px-2">

                <Link className="text-white " to="/admin/attributes">Attributes</Link>
              </Nav.Item >

              <Nav.Item className="py-2 px-2"
              >
                <Link className="text-white py-2" to="/admin/sub-category-attribute-group">Sub-Category Attribute Group</Link>

              </Nav.Item >
              <Nav.Item className="py-2 px-2">
                <Link className="text-white py-2" to="/admin/products">Products</Link>
              </Nav.Item >

              <Nav.Item className="py-2 px-2">
                <Link className="text-white py-2" to="/admin/2/orders">   Orders</Link>
              </Nav.Item >

              <Nav.Item className="py-2 px-2">
                <Link className="text-white py-2" to="/admin" onClick={handleLogout}>
                  Log Out
                </Link>
              </Nav.Item >

            </Nav>
          </div>
        </Col>

        <Col md={sidebarOpen ? 10 : 12} className={mainContentClassName}>
          <Navbar expand="lg" style={{ backgroundColor: "#ede9e9" }}>
            <Navbar.Text href="#">
              {" "}
              <button onClick={toggleSidebar} className="btn btn-light mx-3 ">
                ☰
              </button>{" "}
            </Navbar.Text>
            <Navbar.Brand
              className="d-inline-block align-top"
              style={{ lineHeight: "2.0" }}
            >
              <img
                alt=""
                src="http://muskaanapi.q4hosting.com/public/logo/muskaan_logo.png"
                width="40"
                height="40"
                className="d-inline-block align-top mx-3"
              />
              
              Muskaan
            </Navbar.Brand>

            <Navbar.Text href="#home"> </Navbar.Text>
            {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
            <Navbar.Collapse id="navbarScroll"></Navbar.Collapse>
          </Navbar>
          <main>{children}</main>
        </Col>
      </Row>
    </Container>
  );
};

export default SideBar;

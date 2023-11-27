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

const SideBar = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true); // Start with the sidebar closed

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const mainContentClassName = `main-content ${sidebarOpen ? "" : " closed"}`;

  return (
    <Container fluid>
      <Row>
        <Col md={2} className={`sidebar ${sidebarOpen ? " open" : ""}`}>
          <div className="position-sticky">
            <Nav defaultActiveKey="/home" className="flex-column text-white">
              <Nav.Link
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
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                Dashboard
              </Nav.Link>
              <Nav.Link href="/admin/category" className="text-white">
                Category
              </Nav.Link>
              <Nav.Link href="/admin/sub-category" className="text-white">
                Sub Category
              </Nav.Link>
              <Nav.Link href="/admin/attributes" className="text-white">
                Attributes
              </Nav.Link>
              <Nav.Link
                href="/admin/sub-category-attribute-group"
                className="text-white"
              >
                Sub-Category Attribute Group
              </Nav.Link>
              <Nav.Link href="/admin/products" className="text-white">
                Products
              </Nav.Link>
              <Nav.Link href="/admin/2/orders" className="text-white">
                Orders
              </Nav.Link>
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

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function HeaderTop() {
  return (
    <section className="header-top">
      <Container>
        <Row className="top-content-wrap">
          <Col lg={8} sm={12} xs={12}>
            <ul className="m-0 p-0">
              <li className='pt-1'>
                <a href="#" className='text-white text-decoration-none'>
                  <i className="fa fa-envelope"></i> muskaan@muskaan.org
                </a>
              </li>
              <li>
                <a href="#" className='text-white text-decoration-none'>
                  <i className="fa fa-phone"></i> +91 74052 97103
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={4} sm={4} xs={4}  className="text-end d-none d-md-block">
            <a href="#" className="default-btn text-white text-decoration-none">
              DONATE NOW <i className="fa fa-money"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeaderTop;

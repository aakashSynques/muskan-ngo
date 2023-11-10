import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import logo from '../../Muskaan-logo.png';

const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col sm={4} xs={12}>
              <div className="footer-box text-center">
                <Image src={logo} alt="" className="" style={{ width: "25%" }} />
                <p>We have been actively working on this journey with members of denotified tribes and the urban poor since 1998.</p>
                <hr />
                <ul className="socials">
                  <li><a href="#" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                  <li><a href="#" target="_blank"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </Col>
            <Col sm={8} >
              <Row className='pt-4'>
                <Col sm={3} xs={6}>
                  <ul className="links-footer">
                    <h6>Work</h6>
                    <li><a href="#">Education</a></li>
                    <li><a href="#">Livelihoods</a></li>
                    <li><a href="#">Sustainable Livings</a></li>
                    <li><a href="">Publication</a></li>
                  </ul>
                </Col>
                <Col sm={3} xs={6}>
                  <ul className="links-footer">
                    <h6>About US</h6>
                    <li><a href="#">History</a></li>
                    <li><a href="#">Mission</a></li>
                    <li><a href="#">Our Team</a></li>
                    <li><a href="#">Accounts</a></li>
                    <li><a href="#">Disclaimer</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                  </ul>
                </Col>
                <Col sm={6} xs={12} className="links-footer">
                  <h6>Corporate address</h6>
                  <p>Muskaan, Plot No. 264-65, Behind Canara Bank, Neelbad, Bhopal, India – 462 044</p>
                  <h6>Connect with us</h6>
                  <p>For any enquiry call us at: +91 7405297103<br />
                    Email: muskaan@muskaan.org</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>

      <div className="copyright">
        <Container>
          <Row>
            <Col sm={8}>© 2023 Muskaan. All Rights Reserved</Col>
            <Col sm={4} className="text-right">Powered by <a href="">SynQues</a></Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Footer;

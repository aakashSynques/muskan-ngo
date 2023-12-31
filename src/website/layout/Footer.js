import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import logo from '../../Muskaan-logo.png';
import { Link } from 'react-router-dom';
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
                  <li><a href="https://www.facebook.com/" target="_blank" aria-label="Facebook Page"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="https://www.instagram.com/" target="_blank" aria-label="Instagram Profile"><i className="fa fa-instagram" aria-hidden="true" ></i></a></li>
                  <li><a href="https://www.youtube.com/@muskaanbhopal" target="_blank" aria-label="YouTube Channel"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </Col>
            <Col sm={8} >
              <Row className='pt-4'>
                <Col sm={3} xs={6} className='links-footer'>
                  <p style={{fontSize:'18px'}}><strong>Work</strong></p>
                  <ul className='p-0'>
                    <li><Link to="/work/education" onClick={scrollToTop}>Education</Link></li>
                    <li><Link to="/work/liveLihoods" onClick={scrollToTop}>Livelihoods</Link></li>
                    <li><Link to="/work/sustainable-living" onClick={scrollToTop}>Sustainable Livings</Link></li>
                    <li><Link to="/work/publication" onClick={scrollToTop}>Publication</Link> </li>
                  </ul>
                </Col>
                <Col sm={3} xs={6} className='links-footer'>
                  <p style={{fontSize:'18px'}}><strong>About US</strong></p>
                  <ul className='p-0'>
                    <li><Link to="/about-us/history" onClick={scrollToTop}>History</Link></li>
                    <li><Link to="/about-us/mission/" onClick={scrollToTop}>Mission</Link></li>
                    <li><Link to="/about-us/our-team/" onClick={scrollToTop}>Our Team</Link> </li>
                    <li><Link to="/about-us/accounts" onClick={scrollToTop}>Accounts</Link></li>
                    <li><Link to="" onClick={scrollToTop}>Disclaimer</Link></li>
                    <li><Link to="" onClick={scrollToTop}>Privacy Policy</Link></li>
                  </ul>
                </Col>
                <Col sm={6} xs={12}>
                  <p style={{fontSize:'18px'}}><strong>Corporate address</strong></p>
                  <p>Muskaan, Plot No. 264-65, Behind Canara Bank, Neelbad, Bhopal, India – 462 044</p>
                  <p><strong>Connect with us</strong></p>
                  <p>
                    {/* For any enquiry call us at: +91 7405297103<br /> */}
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
            <Col sm={4} className="text-right">Powered by <a href="https://www.synques.in/" target='_blank'>SynQues</a></Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Footer;

import React from 'react'
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReCAPTCHA from 'react-google-recaptcha';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Contect = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={4}>
            <h3>Information</h3>
            <div class="elementor-icon-box-wrapper d-flex  pt-2">
              <div class="main-color pe-3">
                <i class="fa fa-map-marker" aria-hidden="true" style={{ fontSize: "34px" }}></i>
              </div>
              <div class="elementor-icon-box-content">
                <h5 class="main-color">
                  <b>
                    ADDRESS
                  </b>
                </h5>
                <p class="elementor-icon-box-description">
                  Muskaan Mud Building – ‘Mitti Ka Ghar’ Plot No. 264-65, Behind Canara Bank, Landmark
                  – Left in the lane opposite D.P.S. School Bhadbhada Road, Neelbad, Bhopal – 462044	.
                </p>
              </div>
            </div>


            <div class="elementor-icon-box-wrapper d-flex  pt-2">
              <div class="main-color pe-3">
                <i class="fa fa-phone" aria-hidden="true" style={{ fontSize: "34px" }}></i>
              </div>
              <div class="elementor-icon-box-content">
                <h5 class="main-color">
                  <b>
                    PHONE NO
                  </b>
                </h5>
                <p class="elementor-icon-box-description">+91 7405297103
                </p>
              </div>
            </div>


            <div class="elementor-icon-box-wrapper d-flex  pt-2">
              <div class="main-color pe-3">
                <i class="fa fa-envelope" aria-hidden="true" style={{ fontSize: "28px" }}></i>
              </div>
              <div class="elementor-icon-box-content">
                <h5 class="main-color">
                  <b>
                    EMAIL ID
                  </b>
                </h5>
                <p class="elementor-icon-box-description">muskaan@muskaan.org
                </p>
              </div>
            </div>




            <div class="elementor-icon-box-wrapper d-flex  pt-2">
              <div class="main-color pe-3">
                <i class="fa fa-firefox" aria-hidden="true" style={{ fontSize: "28px" }}></i>
              </div>
              <div class="elementor-icon-box-content">
                <h5 class="main-color">
                  <b>
                    WEB ADDRESS
                  </b>
                </h5>
                <p class="elementor-icon-box-description">https://muskaan.org/
                </p>
              </div>
            </div>

            <div className='contact-social-icon'>
              <a href="#" class="fa fa-facebook text-white p-3 m-1" style={{ background: "#3B5998" }}></a>
              <a href="#" class="fa fa-twitter text-white p-3 m-1" style={{ background: "#55ACEE" }}></a>
              <a href="#" class="fa fa-instagram text-white p-3 m-1" style={{ background: "#125688" }}></a>
              <a href="#" class="fa fa-youtube text-white p-3 m-1" style={{ background: "#bb0000" }}></a>
            </div>

          </Col> <Col sm={2}></Col>


          <Col sm={6}>
            <h3>Have Any Question?</h3>
            <Form className='mt-5'>
              <Form.Group className="mb-3">
                <FormControl type='text' placeholder='Full Name' className='contact-input' /></Form.Group>
              <Form.Group className="mb-3">
                <FormControl type='text' placeholder='Email Address' className='contact-input' />         </Form.Group>
              <Form.Group className="mb-3">
                <FormControl type='number' placeholder='Phone  No.' className='contact-input' />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control as="textarea" rows={3} className='contact-input' />
              </Form.Group>
              <Form.Group className="mb-3">
                <ReCAPTCHA sitekey='YOUR_RECAPTCHA_SITE_KEY' />
              </Form.Group>

              <Form.Group>
                <Button className='btn btn-primery rounded-4 px-5 py-3'>Send Message</Button>
              </Form.Group>
            </Form>

          </Col>
        </Row>


        <div className='mt-5'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.2669433714823!2d77.34868658675006!3d23.196940355799907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c5de3423bf189%3A0xfe3f16755d4a007b!2sMuskan%20NGO!5e0!3m2!1sen!2sin!4v1699943234969!5m2!1sen!2sin"
            width="100%" height="450" allowfullscreen="" loading="lazy" ></iframe>
        </div>
      </Container>
    </div>
  )
}

export default Contect



import React from 'react'
import { Container, Row, Col, Form, FormControl, Button, Image } from 'react-bootstrap'


const Internship = () => {
  return (
    <div>
         <Container>
                {/* <div className='text-center'>
                    <h3 className='main-color'>Carrer Plan in Muskaan NGO</h3>
                    <p>We are always looking for new and exciting talent to join our team. If you are interested to work with us, please drop us an e-mail with your resume and a brief statement on why you are interested to work with us and how your skills can benefit Muskaan. The more information you provide about yourself (i.e availability, expectations etc),
                        the better we will be able to respond to you. If you are applying for an advertised position, please state this clearly in your communication with us.</p>
                </div> */}

                <Row>
                    <Col sm={6}>
                        {/* <Image src='https://www.nityango.org/wp-content/uploads/2023/06/Top-sites-to-give-an-edge-to-your-career.png' alt="muskaan" className='w-100' /> */}
                        <div className=''>
                            <h3 className='main-color'>Internship Plan in Muskaan NGO</h3>
                            <p>
                                If you are a current university student and looking for an exciting internship opportunity, get in touch with us. We have hosted many interns in the past and are always looking for ways to get people involved in our work. Kindly e-mail your resume, work proposal, duration of internship and intended start date. We require interns to commit for a minimum of 4 weeks.
                            </p>

                            <div className="elementor-icon-box-wrapper d-flex  pt-4">
                                <div className="main-color pe-3">
                                    <i className="fa fa-phone" aria-hidden="true" style={{ fontSize: "34px" }}></i>
                                </div>
                                <div className="elementor-icon-box-content">
                                    <h5 className="main-color">
                                        <b>
                                            PHONE NO
                                        </b>
                                    </h5>
                                    <p className="elementor-icon-box-description">+91 7405297103
                                    </p>
                                </div>
                            </div>


                            <div className="elementor-icon-box-wrapper d-flex  pt-4">
                                <div className="main-color pe-3">
                                    <i className="fa fa-envelope" aria-hidden="true" style={{ fontSize: "28px" }}></i>
                                </div>
                                <div className="elementor-icon-box-content">
                                    <h5 className="main-color">
                                        <b>
                                            EMAIL ID
                                        </b>
                                    </h5>
                                    <p className="elementor-icon-box-description">muskaan@muskaan.org
                                    </p>
                                </div>
                            </div>

                        </div>
                    </Col>
                    <Col sm={6}>
                        <Form>
                            <Form.Group className="mb-3">
                                <FormControl type='text' placeholder='Full Name' className='contact-input' /></Form.Group>
                            <Form.Group className="mb-3">
                                <FormControl type='text' placeholder='Email Address' className='contact-input' />         </Form.Group>
                            <Form.Group className="mb-3">
                                <FormControl type='number' placeholder='Phone  No.' className='contact-input' />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <FormControl type='text' placeholder='Address' className='contact-input' />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <FormControl type='text' placeholder='City' className='contact-input' />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <FormControl type='text' placeholder='State' className='contact-input' />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <FormControl type='text' placeholder='Zip Code' className='contact-input' />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <FormControl type='file' placeholder='' className='contact-input' />
                            </Form.Group>
                            <Form.Group>
                                <Button className='btn btn-primery rounded-2 px-5 py-2'>Send Message</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
    </div>
  )
}

export default Internship

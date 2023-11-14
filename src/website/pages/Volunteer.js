import React from 'react'
import { Container, Row, Col, Form, FormControl, Button, Image } from 'react-bootstrap'
const Volunteer = () => {
    return (
        <>
            <div className='contact-bg fixed-bg'>
                <Container className='text-center'>
                    <h1>Volunteer </h1>
                </Container>
            </div>

            <Container className='mt-5'>
                {/* <div className='text-center'>
                    <h3 className='main-color'>Carrer Plan in Muskaan NGO</h3>
                    <p>We are always looking for new and exciting talent to join our team. If you are interested to work with us, please drop us an e-mail with your resume and a brief statement on why you are interested to work with us and how your skills can benefit Muskaan. The more information you provide about yourself (i.e availability, expectations etc),
                        the better we will be able to respond to you. If you are applying for an advertised position, please state this clearly in your communication with us.</p>
                </div> */}

                <Row>
                    <Col sm={6} className='pt-5'>
                        {/* <Image src='https://www.nityango.org/wp-content/uploads/2023/06/Top-sites-to-give-an-edge-to-your-career.png' alt="muskaan" className='w-100' /> */}
                        <div className=''>
                            <h3 className='main-color'>Volunteer Of Muskaan NGO</h3>
                            <p>Whether it’s just a commitment of a few hours a week or a project based engagement, your involvement will make a difference. There are many ways to volunteer with us and some suggestions are outlined below. However, feel free to write to us with any ideas you have on how you would like to give your time to Muskaan. As we are a small organisation with limited resources, please only write to us if you are serious about volunteering and are able to give a commitment of at least 2 weeks. Kindly fill up this online form to express your interest and we will contact you.</p>
                            <p>Conduct creative workshops : Self-expression is one of the greatest joys of learning. Help inspire our children with music, dance, theatre, painting, film-making or storytelling workshops</p>
                            <p>Share your skills : Do you have a livelihood skill like carpentry, pottery, book binding, vehicle repairs, computer assembly or anything else which you would like to share?</p>
                            <p>Illustration and Design : Help collect content, illustrate and design classroom teaching materials, activity material, children’s stories and other things</p>
                       
                       
                            <div class="elementor-icon-box-wrapper d-flex  pt-4">
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


            <div class="elementor-icon-box-wrapper d-flex  pt-4">
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
                       
                        </div>
                    </Col>
                    <Col sm={6}>
                        <Form className='mt-5'>
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
                                <Button className='btn btn-primery rounded-4 px-5 py-3'>Send Message</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Volunteer

import React from 'react'
import { Container, Row, Col, Form, FormControl, Button, Image } from 'react-bootstrap'

const Career = () => {
  return (
    <div>
        <Container>
                <div className='text-center'>
                    <h3 className='main-color'>Career Plan in Muskaan NGO</h3>
                    <p>We are always looking for new and exciting talent to join our team. If you are interested to work with us, please drop us an e-mail with your resume and a brief statement on why you are interested to work with us and how your skills can benefit Muskaan. The more information you provide about yourself (i.e availability, expectations etc),
                        the better we will be able to respond to you. If you are applying for an advertised position, please state this clearly in your communication with us.</p>
                </div>
                <Row>
                    <Col sm={6}>
                        <Image src='https://www.nityango.org/wp-content/uploads/2023/06/Top-sites-to-give-an-edge-to-your-career.png' alt="muskaan" className='w-100' />
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
                                <Button className='btn btn-primery rounded-4 px-5 py-3'>Send Message</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
    </div>
  )
}

export default Career

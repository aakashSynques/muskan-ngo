import React from 'react'
import { Button, Col, Container, Form, FormControl, FormGroup, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CheckOut = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col sm={8} className='r-border'>
                        <div className='checkout-form'>
                            <h4>Billing Details</h4>
                            <Form>
                                <Row>
                                    <FormGroup as={Col} md="6">
                                        <Form.Label>First Name <span className='text-danger'>*</span></Form.Label>
                                        <FormControl type="text" placeholder='' />
                                    </FormGroup>
                                    <FormGroup as={Col} md="6">
                                        <Form.Label>Last Name <span className='text-danger'>*</span></Form.Label>
                                        <FormControl type="text" placeholder='' />
                                    </FormGroup>
                                    <FormGroup as={Col} md="12">
                                        <Form.Label>Company name (optional)</Form.Label>
                                        <FormControl type="text" placeholder='' />
                                    </FormGroup>

                                    <FormGroup as={Col} md="12">
                                        <Form.Label>Country / Region <span className='text-danger'>*</span></Form.Label>
                                        <FormControl type="text" placeholder='' />
                                    </FormGroup>

                                    <FormGroup as={Col} md="12">
                                        <Form.Label>Street address<span className='text-danger'>*</span></Form.Label>
                                        <FormControl type="text" placeholder='House number and street name' /> <br />
                                        <FormControl type="text" placeholder='Apartment, suite, unit, etc. (optional)' />
                                    </FormGroup>

                                    <FormGroup as={Col} md="12">
                                        <Form.Label>Town / City <span className='text-danger'>*</span></Form.Label>
                                        <FormControl type="text" placeholder='' />
                                    </FormGroup>

                                    <FormGroup as={Col} md="12">
                                        <Form.Label>State <span className='text-danger'>*</span></Form.Label>
                                        <FormControl type="text" placeholder='' />
                                    </FormGroup>

                                    <FormGroup as={Col} md="12">
                                        <Form.Label>PIN Code <span className='text-danger'>*</span></Form.Label>
                                        <FormControl type="text" placeholder='' />
                                    </FormGroup>

                                    <FormGroup as={Col} md="12">
                                        <Form.Label>Phone <span className='text-danger'>*</span></Form.Label>
                                        <FormControl type="text" placeholder='' />
                                    </FormGroup>

                                    <FormGroup as={Col} md="12">
                                        <Form.Label>Email address <span className='text-danger'>*</span></Form.Label>
                                        <FormControl type="text" placeholder='' />
                                    </FormGroup>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Order notes (optional)</Form.Label>
                                        <Form.Control as="textarea" rows={4} placeholder='Notes about your order, e.g. special notes for delivery.' />
                                    </Form.Group>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                    <Col sm={4} className='px-4'>
                        <h6 className='main-color f-w-8'>YOUR ORDER</h6>
                        <table className='table'>
                            <tbody>
                                <tr className='py-3'>
                                    <td>Product</td>
                                    <td className='text-end'>SubTotal</td>
                                </tr>
                                <tr className='py-3'>
                                    <td>Basti mein Chor / thief in the Basti  × 1</td>
                                    <td className='text-end main-color'><i className="fa fa-inr"></i> 50.00</td>
                                </tr>
                                <tr className='py-3'>
                                        <td>Subtotal</td>
                                        <td className='text-end'><i className="fa fa-inr"></i> 50.00</td>
                                    </tr>
                                    <tr className='py-3'>
                                        <td>Total</td>
                                        <td className='text-end main-color' style={{ color: '#a20401' }}><i className="fa fa-inr"></i> 50.00</td>
                                    </tr>
                            </tbody>
                        </table>

                        <font size="2" className="text-danger">CREDIT CARD/DEBIT CARD/NETBANKING</font> 
                        <Image src={require('../../assets/images/payment.png')} alt="" className='' /> <br />
                        <font size='2'>Pay securely by Credit or Debit card or Internet Banking through Razorpay.</font> <br /> <br />
                        <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our 
                           <Link to="/"> privacy policy.</Link> 
                            </p>
                            <Button className='btn btn-danger w-100 mt-3'>
                            Place order</Button>
                                
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CheckOut

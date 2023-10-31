import React from 'react'
import { Container, Row, Col, Button, Card, CardBody, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MyAccoutSideBar from './MyAccoutSideBar'
const Register = () => {
    return (
        <>
            <hr />
            <Container>
                <font> Home › My Accoun › Register</font>
                <Row className='pt-5'>
                    <Col sm={9} >
                        <Card className='mb-3 pe-3' style={{ border: 'none' }}>
                            <CardBody className='pe-4'>
                                <h3 className='border-bottom pb-2 text-uppercase main-color'>Register Account</h3>
                                <p className='f-w-6'>Your Personal Details</p>
                                <Form className='pt-4'>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="2">
                                            Full Name <span className="text-danger">*</span>
                                        </Form.Label>
                                        <Col sm="10">
                                            <div className="input-group">
                                                <div className="input-group-text" style={{ background: "#7e1502" }}>
                                                    <i className="fa fa-user-o text-white" aria-hidden="true"></i>
                                                </div>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter your Name"
                                                />
                                            </div>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="2">
                                            Email <span className="text-danger">*</span>
                                        </Form.Label>
                                        <Col sm="10">
                                            <div className="input-group">
                                                <div className="input-group-text" style={{ background: "#7e1502" }}>
                                                    <i className="fa fa-envelope-o text-white" aria-hidden="true"></i>
                                                </div>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter your Email"
                                                />
                                            </div>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="2">
                                            Phone <span className="text-danger">*</span>
                                        </Form.Label>
                                        <Col sm="10">
                                            <div className="input-group">
                                                <div className="input-group-text" style={{ background: "#7e1502" }}>
                                                    <i className="fa fa-phone text-white" aria-hidden="true"></i>
                                                </div>
                                                <Form.Control
                                                    type="number"
                                                    placeholder="Enter Phone No."
                                                />
                                            </div>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="2">
                                            Password <span className="text-danger">*</span>
                                        </Form.Label>
                                        <Col sm="10">
                                            <div className="input-group">
                                                <div className="input-group-text" style={{ background: "#7e1502" }}>
                                                    <i className="fa fa-lock text-white" aria-hidden="true"></i>
                                                </div>
                                                <Form.Control
                                                    type="password"
                                                    placeholder="Enter Password"
                                                />
                                            </div>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="2">
                                            Address <span className="text-danger">*</span>
                                        </Form.Label>
                                        <Col sm="10">
                                            <div className="input-group">
                                                <div className="input-group-text" style={{ background: "#7e1502" }}>
                                                    <i className="fa fa-map-marker text-white" aria-hidden="true"></i>
                                                </div>
                                                <Form.Control as="textarea" rows={2} placeholder="Enter your Address" />
                                            </div>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="2">

                                        </Form.Label>
                                        <Col sm="10">
                                            <p className='pt-1 m-0 p-0'>Already have an account ? <Link to='/account/login'>Login</Link>  </p>
                                            <div className='text-end'>
                                                <Button
                                                    type="submit"
                                                    variant="primary"
                                                    className="bg-main-color px-5"
                                                >
                                                    Register
                                                </Button>
                                            </div>

                                        </Col>
                                    </Form.Group>
                                </Form>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <MyAccoutSideBar />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Register

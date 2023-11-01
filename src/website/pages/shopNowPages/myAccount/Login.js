
import React from 'react'
import { Container, Row, Col, Button, Card, CardBody, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MyAccoutSideBar from './MyAccoutSideBar'
import { fetch } from '../../../../utils'

const Login = () => {

    





    return (
        <>
            <hr />
            <Container>
                <font> Home › My Accoun › Login</font>
                <Row className='pt-5'>
                    <Col sm={9}>
                        <Row>
                            <Col sm={6} >
                                <Card className='mb-3' style={{ border: 'none' }}>
                                    <CardBody >
                                        <h5 className='border-bottom pb-2 text-uppercase'>New Customer</h5>
                                        <p className='f-w-6'>Register Account</p>
                                        <p style={{ fontSize: '15px' }}>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
                                        <Link className='btn btn-primary' to='/account/register'>Continue</Link>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col sm={6}>
                                <Card className='mb-3' style={{ border: 'none' }}>
                                    <CardBody >
                                        <h5 className='border-bottom pb-2 text-uppercase'>RETURNING CUSTOMER</h5>
                                        <p className='f-w-6'>I am a returning customer</p>

                                        <Form className='pt-2'>
                                            <Form.Group className="mb-3">
                                                <Form.Label>
                                                    Email address <span className="text-danger">*</span>
                                                </Form.Label>
                                                <div className="input-group">
                                                    <div className="input-group-text" style={{ background: "#7e1502" }}>
                                                        <i className="fa fa-user-o text-white" aria-hidden="true"></i>
                                                    </div>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Enter Username"
                                                    />
                                                </div>
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>
                                                    Password<span className="text-danger">*</span>
                                                </Form.Label>
                                                <div className="input-group">
                                                    <div className="input-group-text bg-main-color" style={{ background: "#7e1502" }}>
                                                        <i className="fa fa-lock text-white" aria-hidden="true"></i>

                                                    </div>
                                                    <Form.Control
                                                        type="password"
                                                        placeholder="Enter Password"
                                                    />
                                                </div>
                                            </Form.Group>

                                            <div className="text-end">
                                                <a href="#" className="text-primary">
                                                    Forgot Password?
                                                </a>
                                            </div>
                                            <Button
                                                type="submit"
                                                variant="primary"
                                                className="bg-main-color px-5"
                                            >
                                                Login
                                            </Button>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={3}>
                        <MyAccoutSideBar />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login






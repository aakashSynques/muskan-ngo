import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    return (
        <>
            <hr />
            <Container>
                <Row >
                    <div className="col-lg-6 offset-lg-3 mt-5 col-md-8 offset-md-2">
                        <div className="bg-white shadow rounded">
                            <div className="form-left h-100 pt-4 form-padding">
                                <h3 className="text-center">Login</h3>
                                <p className='text-center'>Please login using account detail bellow.</p>
                                <Form className='pt-4'>
                                    <Form.Group className="mb-3">
                                        <Form.Label>
                                            Username or email address <span className="text-danger">*</span>
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
                                        className="w-100 mt-4 bg-main-color"
                                    >
                                        Login
                                    </Button>
                                    <p className='pt-3 text-center'>Don't have an account ? <Link to='/account/register'>Register</Link>  </p>
                                </Form>
                            </div>
                        </div>

                    </div>
                </Row>
            </Container>
        </>
    );
};

export default Login;

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

    return (
        <>
            <hr />
            <Container>
                <Row >
                    <div className="col-lg-6 offset-lg-3 mt-3 col-md-8 offset-md-2">
                        <div className="bg-white shadow rounded">
                            <div className="form-left h-100 pt-4 form-padding">
                                <h3 className="text-center">Register</h3>
                                <p className='text-center'>Please Register using account detail bellow.</p>
                                <Form className='pt-4'>
                                    <Form.Group className="mb-3">
                                        <Form.Label>
                                            User Name <span className="text-danger">*</span>
                                        </Form.Label>
                                        <div className="input-group">
                                            <div className="input-group-text" style={{ background: "#7e1502" }}>
                                                <i className="fa fa-user-o text-white" aria-hidden="true"></i>
                                            </div>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter your Name"
                                            />
                                        </div>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>
                                            Email <span className="text-danger">*</span>
                                        </Form.Label>
                                        <div className="input-group">
                                            <div className="input-group-text" style={{ background: "#7e1502" }}>
                                                <i class="fa fa-envelope-o text-white" aria-hidden="true"></i>
                                            </div>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter your Email"
                                            />
                                        </div>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>
                                            Phone No <span className="text-danger">*</span>
                                        </Form.Label>
                                        <div className="input-group">
                                            <div className="input-group-text" style={{ background: "#7e1502" }}>
                                                <i class="fa fa-phone text-white" aria-hidden="true"></i>
                                            </div>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter your Phone No"
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


                                    <Form.Group className="mb-3">
                                        <Form.Label>
                                            Address <span className="text-danger">*</span>
                                        </Form.Label>
                                        <div className="input-group">
                                            <div className="input-group-text" style={{ background: "#7e1502" }}>
                                                <i class="fa fa-map-marker text-white" aria-hidden="true"></i>
                                            </div>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter your Address"
                                            />
                                        </div>
                                    </Form.Group>



                                    <Button
                                        type="submit"
                                        variant="primary"
                                        className="w-100 mt-4 bg-main-color"
                                    >
                                        Register
                                    </Button>
                                    <p className='pt-3 text-center'>Already have an account ? <Link to='/account/login'>Login</Link>  </p>
                                </Form>
                            </div>
                        </div>

                    </div>
                </Row>
            </Container>
        </>
    );
};

export default Register;

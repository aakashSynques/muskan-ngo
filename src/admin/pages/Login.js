
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import logo from '../../Muskaan-logo.png';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Use useNavigate to get the navigation function


    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/admin/dashboard'); // Replace '/dashboard' with the route you want to navigate to

    };
    return (
        <div className="login-page bg-light">
            <Container>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <div className="bg-white shadow rounded">

                            <div className="form-left h-100 pt-1 pb-5 px-5">
                                <div className="text-center">
                                    <Image src={logo} alt="Logo" fluid className='w-25' style={{ marginTop: "-60px" }} />
                                </div>
                                {/* <h3 className="text-center">Login</h3> */}
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>
                                            Username<span className="text-danger">*</span>
                                        </Form.Label>
                                        <div className="input-group">
                                            <div className="input-group-text" style={{ background: "#7e1502" }}>
                                                {/* <i className="bi bi-person-fill"></i> */}
                                                <i className="fa fa-user-o text-white" aria-hidden="true"></i>
                                            </div>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter Username"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
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
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
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
                                </Form>
                            </div>
                        </div>
                        <p className="text-end text-secondary mt-3">
                            Muskaan NGO
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LoginForm;

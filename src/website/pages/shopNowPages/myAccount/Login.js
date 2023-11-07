import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card, CardBody, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetch } from '../../../../utils';
import { useNavigate } from 'react-router-dom';
import MyAccountSideBar from './MyAccoutSideBar';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../../../../reducers/tokenSlice';

const Login = () => {
    const tokenData = useSelector((state) => state.token);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Please fill in all the required fields.');
            return;
        }
        setLoading(true);
        setError('Wait, checking your details.');
        try {
            const response = await fetch('/customer/login', 'post', {
                customer_email: email,
                customer_password: password,
            });
            if (response.status === 200) {
                const responseData = await response.data;
                if (responseData && responseData.data.token) {
                    const token = responseData.data.token;
                    localStorage.setItem("muskan_token", token);
                    verifyToken(token); // Verify the token after successful login
                    navigate("/account/myprofile");
                } else {
                    setError('Invalid response format');
                }
            } else {
                setError('Login failed. Please check your credentials.');
            }
        } catch (err) {
            if (err.response && err.response.data) {
                setError(err.response.data.message);
            } else {
                setError('An error occurred. Please try again later.');
            }
        } finally {
            setLoading(false);
        }
    };

    const verifyToken = async (token) => {
        try {
            const response = await fetch("/customer/verify", "post", null, {
                Authorization: `Bearer ${token}`,
            });
            if (response.status === 200) {
                const responseData = await response.data;
                if (responseData) {
                    const tokenData = responseData.data.token_data;
                    localStorage.setItem("muskan_token_data", JSON.stringify(tokenData));
                    dispatch(setToken(tokenData));

                } else {
                    console.error('Invalid token data format');
                }
            } else {
                console.error('Token verification failed');
            }
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("muskan_token");
        if (token) {
            verifyToken(token);
        }
    }, []);


    return (
        <>
            <hr />
            <Container>

       


                <p> Home › My Account › Login</p>
                <Row className='pt-5'>
                    <Col sm={12}>
                        <Row>
                            <Col sm={6}>
                                <Card className='mb-3' style={{ border: 'none' }}>
                                    <CardBody>
                                        <h5 className='border-bottom pb-2 text-uppercase'>New Customer</h5>
                                        <p className='f-w-6'>Register Account</p>
                                        <p style={{ fontSize: '15px' }}>
                                            By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
                                        </p>
                                        <Link className='btn btn-primary' to='/account/register'>
                                            Continue
                                        </Link>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col sm={6}>
                                <Card className='mb-3' style={{ border: 'none' }}>
                                    <CardBody>
                                        <h5 className='border-bottom pb-2 text-uppercase'>RETURNING CUSTOMER</h5>
                                        <p className='f-w-6'>I am a returning customer</p>

                                        <Form className='pt-2'>
                                            <Form.Group className='mb-3'>
                                                <Form.Label>
                                                    Email address <span className='text-danger'>*</span>
                                                </Form.Label>
                                                <div className='input-group'>
                                                    <div className='input-group-text' style={{ background: '#7e1502' }}>
                                                        <i className='fa fa-user-o text-white' aria-hidden='true'></i>
                                                    </div>
                                                    <Form.Control
                                                        type='text'
                                                        placeholder='Enter Email'
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        id='email'
                                                    />
                                                </div>
                                            </Form.Group>
                                            {error && error === 'Please fill in all the required fields.' && (
                                                <p className='text-danger'>Please enter a valid email</p>
                                            )}

                                            <Form.Group className='mb-3'>
                                                <Form.Label>
                                                    Password<span className='text-danger'>*</span>
                                                </Form.Label>
                                                <div className='input-group'>
                                                    <div className='input-group-text bg-main-color' style={{ background: '#7e1502' }}>
                                                        <i className='fa fa-lock text-white' aria-hidden='true'></i>
                                                    </div>
                                                    <Form.Control
                                                        type='password'
                                                        placeholder='Enter Password'
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        id='password'
                                                    />
                                                </div>
                                            </Form.Group>
                                            {error && error === 'Please fill in all the required fields.' && (
                                                <p className='text-danger'>Please enter a valid Password</p>
                                            )}

                                            <div className='text-end'>
                                                <a href='#' className='text-primary'>
                                                    Forgot Password?
                                                </a>
                                            </div>

                                            <Button variant='primary' className='bg-main-color px-5' onClick={handleSubmit}>
                                                {loading ? 'Logging in...' : 'Login'}
                                            </Button>
                                        </Form>

                                        {error && <p className='text-danger'>{error}</p>}
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Login;

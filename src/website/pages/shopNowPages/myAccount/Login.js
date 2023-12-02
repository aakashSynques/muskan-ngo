import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card, CardBody, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetch } from '../../../../utils';
import { useNavigate } from 'react-router-dom';
import LoginSideNav from './LoginSideNav';
// import { useDispatch, useSelector } from 'react-redux';
// import { setToken } from '../../../../reducers/tokenSlice';

const Login = () => {
    // const tokenData = useSelector((state) => state.token);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("muskan_token");
        if (token) {
            verifyToken(token);
        }
    }, []);
    const verifyToken = async (token) => {
        try {
            const response = await fetch("/customer/verify", "post", null, {
                Authorization: `Bearer ${token}`,
            });
            if (response.status === 200) {
                const responseData = await response.data;
                if (responseData) {
                    const tokenData = responseData.data.token_data;
                    const exp = tokenData.exp;
                    const currentTimestamp = Math.floor(Date.now() / 1000);
                    if (exp > currentTimestamp) {
                        // Token is still valid
                        localStorage.setItem("muskan_token_data", JSON.stringify(tokenData));
                      
                        navigate("/account/myprofile");
                    } else {
                        // console.error('Token has expired');
                        alert('Token has expired');
                        navigate("/account/login");
                    }
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
    return (
        <>
            <hr />
            <Container>
                <p> Home › My Account › Login</p>
                <Row className='pt-3'>
                    <Col sm={12}>
                        <Row>
                            <Col sm={4}>
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
                            <Col sm={5}>
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
                                                {/* <a href='#' className='text-primary'>
                                                    Forgot Password?
                                                </a> */}
                                                <Link to="/account/forgotPwd" className='text-primary'>Forgot Password?</Link>
                                            </div>

                                            <Button variant='primary' className='bg-main-color px-5' onClick={handleSubmit}>
                                                {loading ? 'Logging in...' : 'Login'}
                                            </Button>
                                        </Form>

                                        {error && <p className='text-danger'>{error}</p>}
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col sm={3}>
                                <LoginSideNav />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Login;

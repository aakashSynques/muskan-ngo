import React, { useState } from 'react'
import { Container, Row, Col, Button, Card, CardBody, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import MyAccoutSideBar from './MyAccoutSideBar'
import { fetch } from '../../../../utils'
import LoginSideNav from './LoginSideNav'
const Register = () => {
    const navigate = useNavigate();
    const [registrationMessage, setRegistrationMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [formData, setFormData] = useState({
        customer_password: '',
        confirmPassword: '',
        customer_mobile: '',
        customer_address: '',
        customer_email: '',
        customer_fname: '',
        customer_lname: '',
    });
    const registerUser = async (e) => {
        e.preventDefault();
        // Assuming you have a state variable passwordsMatch
        // Check if passwords match before submitting the form
        if (formData.customer_password !== formData.confirmPassword) {
            setPasswordsMatch(false);
            // setRegistrationMessage('Passwords do not match');
            return;
        }

        try {
            const body = {
                customer_password: formData.customer_password,
                confirmPassword: formData.confirmPassword,
                customer_mobile: formData.customer_mobile,
                customer_address: "",
                customer_email: formData.customer_email,
                customer_fname: formData.customer_fname,
                customer_lname: formData.customer_lname,
            };
            const response = await fetch('/customer/register', 'POST', body, null);
            if (response.data.success) {
                const token = response.data.token; // Assuming the response contains a unique token
                setRegistrationMessage(response.message); // Display the response message
                navigate("/account/login");

            } else {
                setRegistrationMessage(response.message);
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setErrorMessage(<font color="red"><b>{error.response.data.message}</b></font>);
            } else if (error && error.message) {
                setErrorMessage(<font color="red"><b>{error.message}</b></font>);
            } else {
                setErrorMessage(<font color="red"><b>Something went wrong.</b></font>);
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    return (
        <>
            <hr />
            <Container>
                <font> Home › My Accoun › Register</font>
                <Row className='pt-4'>
                    <Col sm={9} >
                        <Card className='mb-3' style={{ border: 'none' }}>
                            <CardBody>
                                <h5 className='border-bottom pb-2 text-uppercase'>Register Account</h5>
                                <p>If you already have an account with us, please login at the login page.</p>

                                <h5 >Your Personal Details</h5> <hr />
                                <Form className='pt-2' onSubmit={registerUser}>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="3" className='text-end-lg text-start-sm'>
                                            First Name <span className="text-danger">*</span>
                                        </Form.Label>
                                        <Col sm="9">
                                            <div className="input-group">
                                                <div className="input-group-text" style={{ background: "#7e1502" }}>
                                                    <i className="fa fa-user-o text-white" aria-hidden="true"></i>
                                                </div>
                                                <Form.Control
                                                    type="text"
                                                    name="customer_fname"
                                                    value={formData.customer_fname}
                                                    onChange={handleChange}
                                                    placeholder="First Name"
                                                />
                                            </div>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="3">
                                            Last Name <span className="text-danger">*</span>
                                        </Form.Label>
                                        <Col sm="9">
                                            <div className="input-group">
                                                <div className="input-group-text" style={{ background: "#7e1502" }}>
                                                    <i className="fa fa-user-o text-white" aria-hidden="true"></i>
                                                </div>
                                                <Form.Control
                                                    type="text"
                                                    name="customer_lname"
                                                    value={formData.customer_lname}
                                                    onChange={handleChange}
                                                    placeholder="Last Name"
                                                />
                                            </div>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="3">
                                            Email <span className="text-danger">*</span>
                                        </Form.Label>
                                        <Col sm="9">
                                            <div className="input-group">
                                                <div className="input-group-text" style={{ background: "#7e1502" }}>
                                                    <i className="fa fa-envelope-o text-white" aria-hidden="true"></i>
                                                </div>
                                                <Form.Control
                                                    type="text"
                                                    name="customer_email"
                                                    value={formData.customer_email}
                                                    onChange={handleChange}
                                                    placeholder="Email"
                                                />
                                            </div>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="3">
                                            Phone <span className="text-danger">*</span>
                                        </Form.Label>
                                        <Col sm="9">
                                            <div className="input-group">
                                                <div className="input-group-text" style={{ background: "#7e1502" }}>
                                                    <i className="fa fa-phone text-white" aria-hidden="true"></i>
                                                </div>
                                                <Form.Control
                                                    type="number"
                                                    name="customer_mobile"
                                                    value={formData.customer_mobile}
                                                    onChange={handleChange}
                                                    placeholder="Mobile Number"
                                                />
                                            </div>
                                        </Col>
                                    </Form.Group>


                                    <h5 className='pt-4'>Your Password</h5> <hr />
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="3">
                                            Password <span className="text-danger">*</span>
                                        </Form.Label>
                                        <Col sm="9">
                                            <div className="input-group">
                                                <div className="input-group-text" style={{ background: "#7e1502" }}>
                                                    <i className="fa fa-lock text-white" aria-hidden="true"></i>
                                                </div>
                                                <Form.Control
                                                    type="password"
                                                    name="customer_password"
                                                    value={formData.customer_password}
                                                    onChange={handleChange}
                                                    placeholder="Password"
                                                />
                                            </div>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="3">
                                            Password Confirm <span className="text-danger">*</span>
                                        </Form.Label>
                                        <Col sm="9">
                                            <div className="input-group">
                                                <div className="input-group-text" style={{ background: "#7e1502" }}>
                                                    <i className="fa fa-lock text-white" aria-hidden="true"></i>
                                                </div>
                                                <Form.Control
                                                    type="password"
                                                    name="confirmPassword"
                                                    value={formData.confirmPassword}
                                                    onChange={handleChange}
                                                    placeholder="Confirm Password"
                                                />
                                            </div>
                                            {!passwordsMatch && <p className="text-danger">Passwords do not match</p>}
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="3">
                                        </Form.Label>
                                        <Col sm="9">
                                            <p className='pt-1 m-0 p-0'>Already have an account ? <Link to='/account/login'>Login</Link>  </p>
                                            <div className='text-end'>

                                                <p className='text-danger'>{registrationMessage}</p>
                                                <p color="red" size='2' >{errorMessage}</p>

                                                <Button
                                                    type="submit" // Add type="button" to prevent form submission
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
                        <LoginSideNav />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Register


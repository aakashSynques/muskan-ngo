import React, { useState } from 'react'
import { Container, Row, Col, Button, Card, CardBody, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import MyAccoutSideBar from './MyAccoutSideBar'
import { fetch } from '../../../../utils'
const Register = () => {
    const navigate = useNavigate();
        const [formData, setFormData] = useState({
        customer_password: '',
        customer_mobile: '',
        customer_address: '',
        customer_email: '',
        customer_fname: '',
        customer_lname: '',
    });
    const [registrationMessage, setRegistrationMessage] = useState('');
    const registerUser = async (e) => {
        e.preventDefault();
        if (Object.values(formData).some((value) => value === '')) {
            setRegistrationMessage('Please fill in all fields.');
            return;
        }
        try {
            const body = {
                customer_password: formData.customer_password,
                customer_mobile: formData.customer_mobile,
                customer_address: formData.customer_address,
                customer_email: formData.customer_email,
                customer_fname: formData.customer_fname,
                customer_lname: formData.customer_lname,
            };
            const response = await fetch('/customer/register', 'POST', body, null);
            if (response.data.success) {
                const token = response.data.token; // Assuming the response contains a unique token
                setRegistrationMessage(response.message); // Display the response message
                navigate("/account/login");
                console.log(response.message);
            } else {
                setRegistrationMessage(response.message);
                console.log(response.message);
            }
        } catch (err) {
            setRegistrationMessage('Email is already in use.');
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
                <Row className='pt-5'>
                    <Col sm={9} >
                        <Card className='mb-3 pe-3' style={{ border: 'none' }}>
                            <CardBody className='pe-4'>
                                <h3 className='border-bottom pb-2 text-uppercase main-color'>Register Account</h3>
                                <p className='f-w-6'>Your Personal Details</p>
                                <Form className='pt-4' onSubmit={registerUser}>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="2">
                                            First Name <span className="text-danger">*</span>
                                        </Form.Label>
                                        <Col sm="10">
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
                                        <Form.Label column sm="2">
                                            Last Name <span className="text-danger">*</span>
                                        </Form.Label>
                                        <Col sm="10">
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
                                                    name="customer_email"
                                                    value={formData.customer_email}
                                                    onChange={handleChange}
                                                    placeholder="Email"
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
                                                    name="customer_mobile"
                                                    value={formData.customer_mobile}
                                                    onChange={handleChange}
                                                    placeholder="Mobile Number"

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
                                                    name="customer_password"
                                                    value={formData.customer_password}
                                                    onChange={handleChange}
                                                    placeholder="Password"
                                                />
                                            </div>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="2">
                                            Address
                                        </Form.Label>
                                        <Col sm="10">
                                            <div className="input-group">
                                                <div className="input-group-text" style={{ background: "#7e1502" }}>
                                                    <i className="fa fa-map-marker text-white" aria-hidden="true"></i>
                                                </div>
                                                <Form.Control as="textarea" rows={2}
                                                    name="customer_address"
                                                    value={formData.customer_address}
                                                    onChange={handleChange}
                                                    placeholder="Address"
                                                />
                                            </div>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="2">

                                        </Form.Label>
                                        <Col sm="10">
                                            <p className='pt-1 m-0 p-0'>Already have an account ? <Link to='/account/login'>Login</Link>  </p>
                                            <div className='text-end'>
                                                {registrationMessage && (
                                                    <p>{registrationMessage}</p>

                                                )}
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
                    {/* <Col sm={3}>
                        <MyAccoutSideBar />
                    </Col> */}
                </Row>
            </Container>
        </>
    )
}

export default Register



// import React, { useState } from 'react';
// import { Container, Row, Col, Button, Card, CardBody, Form } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import MyAccoutSideBar from './MyAccoutSideBar';
// import { fetch } from '../../../../utils';

// const Register = () => {
//     const [formData, setFormData] = useState({
//         customer_password: '',
//         customer_mobile: '',
//         customer_address: '',
//         customer_email: '',
//         customer_fname: '',
//         customer_lname: '',
//     });
//     const [registrationMessage, setRegistrationMessage] = useState('');

//     const registerUser = async (e) => {
//         e.preventDefault();

//         if (Object.values(formData).some((value) => value === '')) {
//             setRegistrationMessage('Please fill in all fields.');
//             return;
//         }
//         try {
//             const body = {
//                 customer_password: formData.customer_password,
//                 customer_mobile: formData.customer_mobile,
//                 customer_address: formData.customer_address,
//                 customer_email: formData.customer_email,
//                 customer_fname: formData.customer_fname,
//                 customer_lname: formData.customer_lname,
//             };
//             const response = await fetch('/customer/register', 'POST', body, null);
//             if (response.data.success) {
//                 setRegistrationMessage(response.message); // Display the response message
//                 console.log(response.message);
//             } else {
//                 setRegistrationMessage(response.message);
//                 console.log(response.message);
//             }
//         } catch (err) {
//             setRegistrationMessage(response.message);
//         }
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     return (
//         <>
//             <hr />
//             <Container>
//                 <font> Home › My Account › Register</font>
//                 <Row className="pt-5">
//                     <Col sm={9}>
//                         <Card className="mb-3 pe-3" style={{ border: 'none' }}>
//                             <CardBody className="pe-4">
//                                 <h3 className="border-bottom pb-2 text-uppercase main-color">Register Account</h3>
//                                 <p className="f-w-6">Your Personal Details</p>
//                                 <Form className="pt-4" onSubmit={registerUser}>
//                                     {/* Form fields here */}
//                                 </Form>
//                                 {/* Display the registration message */}
//                                 {registrationMessage && (
//                                     <div className="mt-3">
//                                         <p>{registrationMessage}</p>
//                                     </div>
//                                 )}
//                             </CardBody>
//                         </Card>
//                     </Col>
//                     <Col sm={3}>
//                         <MyAccoutSideBar />
//                     </Col>
//                 </Row>
//             </Container>
//         </>
//     );
// };

// export default Register;

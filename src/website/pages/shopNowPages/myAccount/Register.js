// import React, { useState } from 'react'
// import { Container, Row, Col, Button, Card, CardBody, Form } from 'react-bootstrap'
// import { Link, useNavigate } from 'react-router-dom'
// import MyAccoutSideBar from './MyAccoutSideBar'
// import { fetch } from '../../../../utils'
// import LoginSideNav from './LoginSideNav'
// const Register = () => {
//     const navigate = useNavigate();
//     const [registrationMessage, setRegistrationMessage] = useState('');
//     const [errorMessage, setErrorMessage] = useState("");
//     const [passwordsMatch, setPasswordsMatch] = useState(true);
//     const [formData, setFormData] = useState({
//         customer_password: '',
//         confirmPassword: '',
//         customer_mobile: '',
//         customer_address: '',
//         customer_email: '',
//         customer_fname: '',
//         customer_lname: '',
//     });
//     const registerUser = async (e) => {
//         e.preventDefault();
//         if (formData.customer_password !== formData.confirmPassword) {
//             setPasswordsMatch(false);
//             return;
//         }

//         try {
//             const body = {
//                 customer_password: formData.customer_password,
//                 confirmPassword: formData.confirmPassword,
//                 customer_mobile: formData.customer_mobile,
//                 customer_address: "",
//                 customer_email: formData.customer_email,
//                 customer_fname: formData.customer_fname,
//                 customer_lname: formData.customer_lname,
//             };
//             const response = await fetch('/customer/register', 'POST', body, null);
//             if (response.data.success) {
//                 const token = response.data.token; // Assuming the response contains a unique token
//                 setRegistrationMessage(response.message); // Display the response message
//                 navigate("/account/login");

//             } else {
//                 setRegistrationMessage(response.message);
//             }
//         } catch (error) {
//             if (error.response && error.response.data && error.response.data.message) {
//                 setErrorMessage(<font color="red"><b>{error.response.data.message}</b></font>);
//             } else if (error && error.message) {
//                 setErrorMessage(<font color="red"><b>{error.message}</b></font>);
//             } else {
//                 setErrorMessage(<font color="red"><b>Something went wrong.</b></font>);
//             }
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
//                 <font> Home › My Accoun › Register</font>
//                 <Row className='pt-4'>
//                     <Col sm={9} >
//                         <Card className='mb-3' style={{ border: 'none' }}>
//                             <CardBody>
//                                 <h5 className='border-bottom pb-2 text-uppercase'>Register Account</h5>
//                                 <p>If you already have an account with us, please login at the login page.</p>

//                                 <h5 >Your Personal Details</h5> <hr />
//                                 <Form className='pt-2' onSubmit={registerUser}>
//                                     <Form.Group as={Row} className="mb-3">
//                                         <Form.Label column sm="3" className='text-end-lg text-start-sm'>
//                                             First Name <span className="text-danger">*</span>
//                                         </Form.Label>
//                                         <Col sm="9">
//                                             <div className="input-group">
//                                                 <div className="input-group-text" style={{ background: "#7e1502" }}>
//                                                     <i className="fa fa-user-o text-white" aria-hidden="true"></i>
//                                                 </div>
//                                                 <Form.Control
//                                                     type="text"
//                                                     name="customer_fname"
//                                                     value={formData.customer_fname}
//                                                     onChange={handleChange}
//                                                     placeholder="First Name"
//                                                 />
//                                             </div>
//                                         </Col>
//                                     </Form.Group>
//                                     <Form.Group as={Row} className="mb-3">
//                                         <Form.Label column sm="3">
//                                             Last Name <span className="text-danger">*</span>
//                                         </Form.Label>
//                                         <Col sm="9">
//                                             <div className="input-group">
//                                                 <div className="input-group-text" style={{ background: "#7e1502" }}>
//                                                     <i className="fa fa-user-o text-white" aria-hidden="true"></i>
//                                                 </div>
//                                                 <Form.Control
//                                                     type="text"
//                                                     name="customer_lname"
//                                                     value={formData.customer_lname}
//                                                     onChange={handleChange}
//                                                     placeholder="Last Name"
//                                                 />
//                                             </div>
//                                         </Col>
//                                     </Form.Group>

//                                     <Form.Group as={Row} className="mb-3">
//                                         <Form.Label column sm="3">
//                                             Email <span className="text-danger">*</span>
//                                         </Form.Label>
//                                         <Col sm="9">
//                                             <div className="input-group">
//                                                 <div className="input-group-text" style={{ background: "#7e1502" }}>
//                                                     <i className="fa fa-envelope-o text-white" aria-hidden="true"></i>
//                                                 </div>
//                                                 <Form.Control
//                                                     type="text"
//                                                     name="customer_email"
//                                                     value={formData.customer_email}
//                                                     onChange={handleChange}
//                                                     placeholder="Email"
//                                                 />
//                                             </div>
//                                         </Col>
//                                     </Form.Group>

//                                     <Form.Group as={Row} className="mb-3">
//                                         <Form.Label column sm="3">
//                                             Phone <span className="text-danger">*</span>
//                                         </Form.Label>
//                                         <Col sm="9">
//                                             <div className="input-group">
//                                                 <div className="input-group-text" style={{ background: "#7e1502" }}>
//                                                     <i className="fa fa-phone text-white" aria-hidden="true"></i>
//                                                 </div>
//                                                 <Form.Control
//                                                     type="number"
//                                                     name="customer_mobile"
//                                                     value={formData.customer_mobile}
//                                                     onChange={handleChange}
//                                                     placeholder="Mobile Number"
//                                                 />
//                                             </div>
//                                         </Col>
//                                     </Form.Group>

//                                     <h5 className='pt-4'>Your Password</h5> <hr />
//                                     <Form.Group as={Row} className="mb-3">
//                                         <Form.Label column sm="3">
//                                             Password <span className="text-danger">*</span>
//                                         </Form.Label>
//                                         <Col sm="9">
//                                             <div className="input-group">
//                                                 <div className="input-group-text" style={{ background: "#7e1502" }}>
//                                                     <i className="fa fa-lock text-white" aria-hidden="true"></i>
//                                                 </div>
//                                                 <Form.Control
//                                                     type="password"
//                                                     name="customer_password"
//                                                     value={formData.customer_password}
//                                                     onChange={handleChange}
//                                                     placeholder="Password"
//                                                 />
//                                             </div>
//                                         </Col>
//                                     </Form.Group>

//                                     <Form.Group as={Row} className="mb-3">
//                                         <Form.Label column sm="3">
//                                             Password Confirm <span className="text-danger">*</span>
//                                         </Form.Label>
//                                         <Col sm="9">
//                                             <div className="input-group">
//                                                 <div className="input-group-text" style={{ background: "#7e1502" }}>
//                                                     <i className="fa fa-lock text-white" aria-hidden="true"></i>
//                                                 </div>
//                                                 <Form.Control
//                                                     type="password"
//                                                     name="confirmPassword"
//                                                     value={formData.confirmPassword}
//                                                     onChange={handleChange}
//                                                     placeholder="Confirm Password"
//                                                 />
//                                             </div>
//                                             {!passwordsMatch && <p className="text-danger">Passwords do not match</p>}
//                                         </Col>
//                                     </Form.Group>

//                                     <Form.Group as={Row} className="mb-3">
//                                         <Form.Label column sm="3">
//                                         </Form.Label>
//                                         <Col sm="9">
//                                             <p className='pt-1 m-0 p-0'>Already have an account ? <Link to='/account/login'>Login</Link>  </p>
//                                             <div className='text-end'>
//                                                 <Button
//                                                     type="submit"
//                                                     variant="primary"
//                                                     className="bg-main-color px-5"
//                                                 >
//                                                     Register
//                                                 </Button>
//                                             </div>
//                                         </Col>
//                                     </Form.Group>

//                                 </Form>
//                             </CardBody>
//                         </Card>
//                     </Col>
//                     <Col sm={3}>
//                         <LoginSideNav />
//                     </Col>
//                 </Row>
//             </Container>
//         </>
//     )
// }

// export default Register

import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  Form,
  Spinner,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import MyAccoutSideBar from "./MyAccoutSideBar";
import { fetch } from "../../../../utils";
import LoginSideNav from "./LoginSideNav";
import { useInput } from "../../../../hook/use-hook";

const isName = (value) => {
  if (value.trim() === "") {
    return { validated: false, message: "Please Enter Your First Name." };
  } else {
    return { validated: true, message: "" };
  }
};

const isLastName = (value) => {
  if (value.trim() === "") {
    return { validated: false, message: "Please Enter Your Last Name." };
  } else {
    return { validated: true, message: "" };
  }
};

const isEmail = (value) => {
  if (value.trim() === "") {
    return { validated: false, message: "Please Enter Your Email." };
  } else if (!/\S+@\S+\.\S+/.test(value)) {
    return { validated: false, message: "Your Email Is Invalid." };
  } else {
    return { validated: true, message: "" };
  }
};

const isMobile = (value) => {
  if (value.trim() === "") {
    return { validated: false, message: "Please Enter Your Mobile Number." };
  } else if (!/^\d{10}$/.test(value)) {
    return { validated: false, message: "Please Enter A Valid Mobile Number." };
  } else {
    return { validated: true, message: "" };
  }
};

const isPassword = (value) => {
  if (value.trim() === "") {
    return { validated: false, message: "Please Enter Your Password." };
  } else if (value.length < 6) {
    return {
      validated: false,
      message: "Password Should Contain Minimum 6 Characters.",
    };
  } else {
    return { validated: true, message: "" };
  }
};
const isConfirmPassword = (value) => {
  if (value.trim() === "") {
    return {
      validated: false,
      message: "Please Confirm Your Password.",
    };
  } else {
    return { validated: true, message: "" };
  }
};

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);
  const [registrationMessage, setRegistrationMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [validationErrors, setValidationErrors] = useState({
    customer_fname: "",
    customer_lname: "",
    customer_email: "",
    customer_mobile: "",
    customer_password: "",
    confirmPassword: "",
  });
  const [formData, setFormData] = useState({
    customer_password: "",
    confirmPassword: "",
    customer_mobile: "",
    customer_address: "",
    customer_email: "",
    customer_fname: "",
    customer_lname: "",
  });

  const {
    hasError: hasErrorName,
    enterValue: enterValueName,
    onChangeHandler: onChangeHandlerName,
    reset: resetName,
    message: NameMessage,
    isTouch: isTouchName,
    onBlurHandler: onBlurHandlerName,
  } = useInput(isName);

  const {
    hasError: hasErrorLastName,
    enterValue: enterValueLastName,
    onChangeHandler: onChangeHandlerLastName,
    reset: resetLastName,
    message: LastNameMessage,
    isTouch: isTouchLastName,
    onBlurHandler: onBlurHandlerLastName,
  } = useInput(isLastName);

  const {
    hasError: hasErrorEmail,
    enterValue: enterValueEmail,
    onChangeHandler: onChangeHandlerEmail,
    reset: resetEmail,
    message: emailMessage,
    isTouch: isTouchEmail,
    onBlurHandler: onBlurHandlerEmail,
  } = useInput(isEmail);

  const {
    hasError: hasErrorPassword,
    enterValue: enterValuePassword,
    message: passwordMessage,
    onChangeHandler: onChangeHandlerPassword,
    reset: resetPassword,
    isTouch: isTouchPassword,
    onBlurHandler: onBlurHandlerPwd,
  } = useInput(isPassword);

  const {
    hasError: hasErrorConfirmPassword,
    enterValue: enterValueConfirmPassword,
    message: ConfirmpasswordMessage,
    onChangeHandler: onChangeHandlerConfirmPassword,
    reset: resetConfirmPassword,
    isTouch: isTouchConfirmPassword,
    onBlurHandler: onBlurHandlerConPwd,
  } = useInput(isConfirmPassword);

  const {
    hasError: hasErrorMobile,
    enterValue: enterValueMobile,
    message: mobileMessage,
    onChangeHandler: onChangeHandlerMobile,
    reset: resetMobile,
    isTouch: isTouchMobile,
    onBlurHandler: onBlurHandlerMobile,
  } = useInput(isMobile);

  // const validateForm = () => {
  //     const errors = {};

  //     // Validate First Name
  //     if (!formData.customer_fname.trim()) {
  //         errors.customer_fname = 'First Name is required';
  //     }

  //     // Validate Last Name
  //     if (!formData.customer_lname.trim()) {
  //         errors.customer_lname = 'Last Name is required';
  //     }

  //     // Validate Email
  //     if (!formData.customer_email.trim()) {
  //         errors.customer_email = 'Email is required';
  //     } else if (!/\S+@\S+\.\S+/.test(formData.customer_email)) {
  //         errors.customer_email = 'Invalid email address';
  //     }

  //     // Validate Mobile Number
  //     if (!formData.customer_mobile.trim()) {
  //         errors.customer_mobile = 'Mobile Number is required';
  //     } else if (!/^\d{10}$/.test(formData.customer_mobile)) {
  //         errors.customer_mobile = 'Mobile Number must be exactly 10 digits';
  //     }

  //     // Validate Password
  //     if (!formData.customer_password.trim()) {
  //         errors.customer_password = 'Password is required';
  //     }

  //     // Validate Confirm Password
  //     if (!formData.confirmPassword.trim()) {
  //         errors.confirmPassword = 'Confirm Password is required';
  //     } else if (formData.customer_password !== formData.confirmPassword) {
  //         errors.confirmPassword = 'Passwords do not match';
  //     }

  //     setValidationErrors(errors);

  //     // Return true if there are no errors
  //     return Object.values(errors).every((error) => error === '');
  // };

  const validateForm = () => {
    if (
      hasErrorName === true ||
      hasErrorLastName === true ||
      hasErrorEmail === true ||
      hasErrorMobile === true ||
      hasErrorPassword === true ||
      hasErrorConfirmPassword === true
    ) {
      return false;
    } else if (
      !isTouchName ||
      !isTouchLastName ||
      !isTouchEmail ||
      !isTouchMobile ||
      !isTouchPassword ||
      !isTouchConfirmPassword
    ) {
      return false;
    } else if (enterValuePassword !== enterValueConfirmPassword) {
      return false;
    }
  };

  const registerUser = async (e) => {
    e.preventDefault();
    console.log(validateForm());
    // Validate the form
    if (!validateForm()) {
      return;
    }

    try {
      const body = {
        // customer_password: formData.customer_password,
        // confirmPassword: formData.confirmPassword,
        // customer_mobile: formData.customer_mobile,
        // customer_address: '',
        // customer_email: formData.customer_email,
        // customer_fname: formData.customer_fname,
        // customer_lname: formData.customer_lname,
        customer_password: enterValuePassword,
        confirmPassword: enterValueConfirmPassword,
        // customer_mobile: enterv,
        customer_address: "",
        customer_email: enterValueEmail,
        customer_fname: enterValueName,
        customer_lname: enterValueLastName,
      };
      const response = await fetch("/customer/register", "POST", body, null);

      // if (response.data.success) {
      //     const token = response.data.token; // Assuming the response contains a unique token
      //     setRegistrationMessage(response.message); // Display the response message
      //     navigate("/account/login");
      // } else {
      //     setRegistrationMessage(response.message);
      // }

      if (response.data.success) {
        const token = response.data.token;
        setRegistrationMessage(response.message);

        // Navigate after a short delay to give time for the user to see the success message
        setTimeout(() => {
          navigate("/account/login");
        }, 4000); // Adjust the delay time as needed
      } else {
        setRegistrationMessage(response.message);
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setErrorMessage(<font color="red">{error.response.data.message}</font>);
      } else if (error && error.message) {
        setErrorMessage(<font color="red">{error.message}</font>);
      } else {
        setErrorMessage(<font color="red">Something went wrong.</font>);
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
      {pageLoading && (
        <div className="page-loader text-center py-5">
          {" "}
          <Spinner animation="border" size="sm" /> <br />
          Loading...
        </div>
      )}
      <Container>
        <font> Home › My Account › Register</font>
        <Row className="pt-4">
          <Col sm={9}>
            <Card className="mb-3" style={{ border: "none" }}>
              <CardBody>
                <h5 className="border-bottom pb-2 text-uppercase">
                  Register Account
                </h5>
                <p>
                  If you already have an account with us, please login at the
                  login page.
                </p>
                <h5>Your Personal Details</h5> <hr />
                <Form className="pt-2" onSubmit={registerUser}>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label
                      column
                      sm="3"
                      className="text-end-lg text-start-sm"
                    >
                      First Name <span className="text-danger">*</span>
                    </Form.Label>
                    <Col sm="9">
                      <div className="input-group">
                        <div
                          className="input-group-text"
                          style={{ background: "#7e1502" }}
                        >
                          <i
                            className="fa fa-user-o text-white"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <Form.Control
                          type="text"
                          name="customer_fname"
                          // value={formData.customer_fname}
                          // onChange={handleChange}
                          onChange={onChangeHandlerName}
                          value={enterValueName}
                          onBlur={onBlurHandlerName}
                          placeholder="First Name"
                        />
                      </div>
                      <p className="text-danger">
                        {validationErrors.customer_fname}
                      </p>
                      {hasErrorName && (
                        <strong className="text-danger">{NameMessage}</strong>
                      )}
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="3">
                      Last Name <span className="text-danger">*</span>
                    </Form.Label>
                    <Col sm="9">
                      <div className="input-group">
                        <div
                          className="input-group-text"
                          style={{ background: "#7e1502" }}
                        >
                          <i
                            className="fa fa-user-o text-white"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <Form.Control
                          type="text"
                          name="customer_lname"
                          // value={formData.customer_lname}
                          // onChange={handleChange}
                          onChange={onChangeHandlerLastName}
                          value={enterValueLastName}
                          onBlur={onBlurHandlerLastName}
                          placeholder="Last Name"
                        />
                      </div>
                      <p className="text-danger">
                        {validationErrors.customer_lname}
                      </p>
                      {hasErrorLastName && (
                        <strong className="text-danger">
                          {LastNameMessage}
                        </strong>
                      )}
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="3">
                      Email <span className="text-danger">*</span>
                    </Form.Label>
                    <Col sm="9">
                      <div className="input-group">
                        <div
                          className="input-group-text"
                          style={{ background: "#7e1502" }}
                        >
                          <i
                            className="fa fa-envelope-o text-white"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <Form.Control
                          type="text"
                          name="customer_email"
                          // value={formData.customer_email}
                          // onChange={handleChange}
                          onChange={onChangeHandlerEmail}
                          value={enterValueEmail}
                          onBlur={onBlurHandlerEmail}
                          placeholder="Email"
                        />
                      </div>
                      <p className="text-danger">
                        {validationErrors.customer_email}
                      </p>
                      {hasErrorEmail && (
                        <strong className="text-danger">{emailMessage}</strong>
                      )}
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="3">
                      Phone <span className="text-danger">*</span>
                    </Form.Label>
                    <Col sm="9">
                      <div className="input-group">
                        <div
                          className="input-group-text"
                          style={{ background: "#7e1502" }}
                        >
                          <i
                            className="fa fa-phone text-white"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <Form.Control
                          type="number"
                          name="customer_mobile"
                          //   value={formData.customer_mobile}
                          //   onChange={handleChange}
                          onChange={onChangeHandlerMobile}
                          value={enterValueMobile}
                          onBlur={onBlurHandlerMobile}
                          placeholder="Mobile Number"
                          maxLength={10} // Set the maximum length to 10
                        />
                      </div>
                      <p className="text-danger">
                        {validationErrors.customer_mobile}
                      </p>
                      {hasErrorMobile && (
                        <strong className="text-danger">{mobileMessage}</strong>
                      )}
                    </Col>
                  </Form.Group>
                  <h5 className="pt-4">Your Password</h5> <hr />
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="3">
                      Password <span className="text-danger">*</span>
                    </Form.Label>
                    <Col sm="9">
                      <div className="input-group">
                        <div
                          className="input-group-text"
                          style={{ background: "#7e1502" }}
                        >
                          <i
                            className="fa fa-lock text-white"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <Form.Control
                          type="password"
                          name="customer_password"
                          // value={formData.customer_password}
                          // onChange={handleChange}
                          onChange={onChangeHandlerPassword}
                          value={enterValuePassword}
                          onBlur={onBlurHandlerPwd}
                          placeholder="Password"
                        />
                      </div>
                      <p className="text-danger">
                        {validationErrors.customer_password}
                      </p>
                      {hasErrorPassword && (
                        <strong className="text-danger">
                          {passwordMessage}
                        </strong>
                      )}
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="3">
                      Password Confirm <span className="text-danger">*</span>
                    </Form.Label>
                    <Col sm="9">
                      <div className="input-group">
                        <div
                          className="input-group-text"
                          style={{ background: "#7e1502" }}
                        >
                          <i
                            className="fa fa-lock text-white"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <Form.Control
                          type="password"
                          name="confirmPassword"
                          // value={formData.confirmPassword}
                          // onChange={handleChange}
                          onChange={onChangeHandlerConfirmPassword}
                          value={enterValueConfirmPassword}
                          onBlur={onBlurHandlerConPwd}
                          placeholder="Confirm Password"
                        />
                      </div>
                      <p className="text-danger">
                        {validationErrors.confirmPassword}
                      </p>
                      {hasErrorConfirmPassword && (
                        <strong className="text-danger">
                          {ConfirmpasswordMessage}
                        </strong>
                      )}
                      {!passwordsMatch && (
                        <p className="text-danger">Passwords do not match</p>
                      )}

                      <Form.Group as={Row} className="mb-3">
                        <Col sm="12">
                          <p className="pt-0 m-0 p-0">
                            Already have an account ?{" "}
                            <Link to="/account/login">Login</Link>{" "}
                          </p>
                          <p className="text-end">{errorMessage}</p>
                          <div className="text-end">
                            <Button
                              type="submit"
                              variant="primary"
                              className="bg-main-color px-5"
                              disabled={loading}
                            >
                              {loading ? (
                                <Spinner animation="border" size="sm" />
                              ) : (
                                "Register"
                              )}
                            </Button>
                          </div>
                        </Col>
                      </Form.Group>
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
  );
};

export default Register;

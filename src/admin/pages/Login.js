
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import logo from '../../Muskaan-logo.png';
import { useNavigate, Link } from 'react-router-dom';
import { fetch } from '../../utils';
import { useInput } from "../../hook/use-hook";

const isEmail = (value) => {
  if (value.trim() === "") {
    return { validated: false, message: "Please Enter Your Email." };
  } else if (!/\S+@\S+\.\S+/.test(value)) {
    return { validated: false, message: "Please Enter A Valid Email." };
  } else {
    return { validated: true, message: "" };
  }
};
const isPassword = (value) => {
  if (value.trim() === "") {
    return { validated: false, message: "Please Enter Your Password." };
  } else if (value.length<6) {
    return { validated: false, message: "Minimum 6 characters." };
  } else {
    return { validated: true, message: "" };
  }
};

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const {
    hasError: hasErrorEmail,
    enterValue: enterValueEmail,
    onChangeHandler: onChangeHandlerEmail,
    reset: resetEmail,
    message: emailMessage,
    isTouch: isTouchEmail,
    onBlurHandler: onBlurHandlerEmail,
  } = useInput(isEmail);
  // , setEmailTouchblur
  const {
    hasError: hasErrorPassword,
    enterValue: enterValuePassword,
    message: passwordMessage,
    onChangeHandler: onChangeHandlerPassword,
    reset: resetPassword,
    isTouch: isTouchPassword,
    onBlurHandler: onBlurHandlerPwd,
  } = useInput(isPassword);
  // , setisPasswordTouch
  const verifyTokenAdmin = async (token) => {
    try {
      const response = await fetch("/user/verify", "post", null, {
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
            localStorage.setItem(
              "muskan_token_data_admin",
              JSON.stringify(tokenData)
            );

            navigate("/admin/dashboard");
          } else {
            // console.error('Token has expired');
            alert("Token has expired");
            navigate("/admin");
          }
        } else {
          console.error("Invalid token data format");
        }
      } else {
        console.error("Token verification failed");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!email || !password) {
    //   setError("Please fill in all the required fields.");
    //   return;
    // }
    if (hasErrorPassword === true || hasErrorEmail === true) {
      return false;
    } 
    setLoading(true);
    setError("Wait, checking your details.");
    try {
      const response = await fetch("/user/login", "post", {
        user_email: enterValueEmail,
        user_password: enterValuePassword,
      });
      if (response.status === 200) {
        const responseData = await response.data;
        if (responseData && responseData.data.token) {
          const token = responseData.data.token;
          localStorage.setItem("muskan_token_admin", token);
            verifyTokenAdmin(token);
            resetEmail();
            resetPassword();
        } else {
          setError("Invalid response format");
        }
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.message);
      } else {
        setError("An error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="bg-white shadow rounded">
              <div className="form-left h-100 pt-1 pb-5 px-5">
                <div className="text-center">
                  <Image
                    src={logo}
                    alt="Logo"
                    fluid
                    className="w-25"
                    style={{ marginTop: "-60px" }}
                  />
                </div>
                {/* <h3 className="text-center">Login</h3> */}
                <Form>
                  {/* <Form.Group className="mb-3">
                                        <Form.Label>
                                            Username<span className="text-danger">*</span>
                                        </Form.Label>
                                        <div className="input-group">
                                            <div className="input-group-text" style={{ background: "#7e1502" }}>
                                                <i className="fa fa-user-o text-white" aria-hidden="true"></i>
                                            </div>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter Username"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                            />
                                        </div>
                                    </Form.Group> */}

                  <Form.Group className="mb-3">
                    <Form.Label>
                      Email address <span className="text-danger">*</span>
                    </Form.Label>
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
                        placeholder="Enter Email"
                        // onChange={(e) => setEmail(e.target.value)}
                        onChange={onChangeHandlerEmail}
                                              value={enterValueEmail}
                                              onBlur={onBlurHandlerEmail}
                        id="email"
                      />
                    </div>
                  </Form.Group>
                  {error &&
                    error === "Please fill in all the required fields." && (
                      <p className="text-danger">Please enter a valid email</p>
                    )}

                  {hasErrorEmail && (
                    <strong className="text-danger">{emailMessage}</strong>
                  )}

                  {/* 
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
                                    </Form.Group> */}

                  <Form.Group className="my-3">
                    <Form.Label>
                      Password<span className="text-danger">*</span>
                    </Form.Label>
                    <div className="input-group">
                      <div
                        className="input-group-text bg-main-color"
                        style={{ background: "#7e1502" }}
                      >
                        <i
                          className="fa fa-lock text-white"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        //   onChange={(e) => setPassword(e.target.value)}
                        onChange={onChangeHandlerPassword}
                                              value={enterValuePassword}
                                              onBlur={onBlurHandlerPwd}
                        id="password"
                      />
                    </div>
                  </Form.Group>
                  {error &&
                    error === "Please fill in all the required fields." && (
                      <p className="text-danger">
                        Please enter a valid Password
                      </p>
                    )}
                  {hasErrorPassword && (
                    <strong className="text-danger">
                      {passwordMessage}
                    </strong>
                  )}
                  <div className="text-end">
                    {/* <a href='#' className='text-primary'>
                                                    Forgot Password?
                                                </a> */}
                    <Link to="/account/forgotPwd" className="text-primary">
                      Forgot Password?
                    </Link>
                  </div>

                  <Button
                    variant="primary"
                    className="bg-main-color px-5"
                    onClick={handleSubmit}
                  >
                    {loading ? "Logging in..." : "Login"}
                  </Button>
                </Form>

                {error && <p className="text-danger">{error}</p>}
              </div>
            </div>
            <p className="text-end text-secondary mt-3">Muskaan NGO</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginForm;

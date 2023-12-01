import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, CardBody } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetch } from '../../../../utils';
import LoginSideNav from './LoginSideNav';

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const forgetPassword = async () => {
    const body = {
      customer_email: email,
    };
    try {
      setLoading(true);
      const response = await fetch(
        '/customer/forget',
        'POST',
        body,
        null
      );
      if (response) {
        setSuccessMessage(response.data.message);
      }
    }
    catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(<font color="red"><b>{error.response.data.message}</b></font>);
      } else if (error && error.message) {
        setErrorMessage(<font color="red"><b>{error.message}</b></font>);
      } else {
        setErrorMessage(<font color="red"><b>Something went wrong.</b></font>);
      }
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');
    await forgetPassword();
  };



  return (
    <>
      <hr />
      <Container >
        <font> Home › My Accoun › Forgot Password</font>
        <Row className='pt-4'>
          {/* <Col sm={4}>
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
          </Col> */}

          <Col sm={9} className='pe-lg-5 pe-md-1'>
            <div className='pe-lg-5 pe-xs-1'>
              <h5 className='pb-2 text-uppercase'>Forgot Your Password?</h5>
              <hr />
              <font className='pb-2'>
                Enter the e-mail address associated with your account. Click submit to have a
                password reset link e-mailed to you.
              </font>
              <p className='f-w-6 pt-3 border-bottom pb-3'>Your E-Mail Address</p>

              <Form className='pt-4' onSubmit={handleFormSubmit}>
                <Form.Group as={Row} className='mb-3'>
                  <div className='input-group'>
                    <div className='input-group-text' style={{ background: '#7e1502' }}>
                      <i className='fa fa-envelope-o text-white' aria-hidden='true'></i>
                    </div>
                    <Form.Control
                      type='email'
                      placeholder='Enter your Email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </Form.Group>

                <Form.Group as={Row} className='mb-3'>
                  <Form.Label column sm='8'>
                    <span className="text-success">{successMessage}</span>
                    <span className="text-danger">{errorMessage}</span>

                  </Form.Label>
                  <Col sm='4'>
                    <div className='text-end'>
                      <Button
                        type='submit'
                        variant='primary'
                        className='bg-main-color px-5'
                        disabled={loading}
                      >
                        {loading ? 'Loading...' : 'Continue'}
                      </Button>
                    </div>
                  </Col>
                </Form.Group>
              </Form>
            </div>
          </Col>
          <Col sm={3}>
            <LoginSideNav />
          </Col>

        </Row>
      </Container>
    </>
  )
}

export default ForgotPassword

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, CardBody } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetch } from '../../../../utils';

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const forgetPassword = async () => {
    const body = {
      customer_email: email,
    };

    try {
      setLoading(true);
      const response = await fetch(
        '/customer/forget',
        'POST',
        JSON.stringify(body),
        null
      );
      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await forgetPassword();
  };




  return (
    <>
      <hr />
      <Container >
        <font> Home › My Accoun › Forgot Password</font>
        <Row className='pt-5'>
          <Col sm={5}>
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




          <Col sm={7} className='pe-lg-5 pe-md-1'>
            <div className='pe-lg-5 pe-xs-1'>
              <h3 className='pb-2 text-uppercase main-color'>Forgot Your Password?</h3>
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
                  <Form.Label column sm='2'></Form.Label>
                  <Col sm='10'>
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

        </Row>
      </Container>
    </>
  )
}

export default ForgotPassword

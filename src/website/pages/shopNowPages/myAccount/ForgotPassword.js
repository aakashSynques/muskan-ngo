import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import MyAccountSideBar from './MyAccoutSideBar'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <>
      <hr />
      <Container >
        <font> Home › My Accoun › Forgot Password</font>
        <Row className='pt-5'>
        <Col sm={3}>
            <MyAccountSideBar />
          </Col>

          <Col sm={9} className='pe-5'>
            <div className='pe-5'>
              <h3 className=' pb-2 text-uppercase main-color'>Forgot Your Password?</h3>
              <font className=" pb-2">Enter the e-mail address associated with your account. Click submit to have a password reset link e-mailed to you.</font>
              <p className='f-w-6 pt-3 border-bottom pb-3'>Your E-Mail Address</p>

              {/* <Form className='pt-4'>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="3">
                    <span className="text-danger">*</span>  E-Mail Address
                  </Form.Label>
                  <Col sm="9">
                    <div className="input-group">
                      <div className="input-group-text" style={{ background: "#7e1502" }}>
                        <i className="fa fa-envelope-o text-white" aria-hidden="true"></i>
                      </div>
                      <Form.Control
                        type="text"
                        placeholder="Enter your Email"
                      />
                    </div>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="2">

                  </Form.Label>
                  <Col sm="10">
                    <div className='text-end'>
                      <Button
                        type="submit"
                        variant="primary"
                        className="bg-main-color px-5"
                      >
                        Continue
                      </Button>
                    </div>

                  </Col>
                </Form.Group>
              </Form> */}
              <Form>
                
              </Form>
            </div>
          </Col>
        
        </Row>
      </Container>
    </>
  )
}

export default ForgotPassword

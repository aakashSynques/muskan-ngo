import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import MyAccountSideBar from './MyAccoutSideBar'

const AddressBook = () => {
    return (
        <>
            <hr />
            <Container>
                <font> Home › My Accoun › Address Book</font>
                <Row className='pt-5'>

                    <Col sm={9}>
                        <h3 className=' pb-1 text-uppercase main-color'>Address Book</h3>
                        {/* <font class=" pb-2">Enter the e-mail address associated with your account. Click submit to have a password reset link e-mailed to you.</font> */}
                        <p className='f-w-6 pt-1 border-bottom pb-3'>Add Shipping address</p>
                        <Form className='pt-2'>
                            <Row>
                                <Form.Group className="mb-3 col-sm-6">
                                    <Form.Label>
                                        First Name <span className="text-danger">*</span>
                                    </Form.Label>
                                    <div className="input-group">

                                        <Form.Control
                                            type="text"
                                        />
                                    </div>
                                </Form.Group>
                                <Form.Group className="mb-3 col-sm-6">
                                    <Form.Label>
                                        Last Name <span className="text-danger">*</span>
                                    </Form.Label>
                                    <div className="input-group">

                                        <Form.Control
                                            type="text"
                                        />
                                    </div>
                                </Form.Group>

                                <Form.Group className="mb-3 col-sm-6">
                                    <Form.Label>
                                        Company name (optional)
                                    </Form.Label>
                                    <div className="input-group">

                                        <Form.Control
                                            type="text"
                                        />
                                    </div>
                                </Form.Group>


                                <Form.Group className="mb-3 col-sm-6">
                                    <Form.Label>
                                        Country / Region <span className="text-danger">*</span>
                                    </Form.Label>
                                    <div className="input-group">

                                        <Form.Control
                                            type="text"
                                        />
                                    </div>
                                </Form.Group>


                                <Form.Group className="mb-3 col-sm-12">
                                    <Form.Label>
                                        Street address <span className="text-danger">*</span>
                                    </Form.Label>
                                    <div className="input-group">
                                        <Form.Control
                                            type="text"
                                            placeholder='House number and street name'
                                        />
                                    </div>
                                    <div className="input-group mt-3">
                                        <Form.Control
                                            type="text"
                                            placeholder='Apartment, suite, unit, etc. (optional)'
                                        />
                                    </div>
                                </Form.Group>

                                <Form.Group className="mb-3 col-sm-12">
                                    <Form.Label>
                                        Twon / City <span className="text-danger">*</span>
                                    </Form.Label>
                                    <div className="input-group">
                                        <Form.Control
                                            type="text"
                                        />
                                    </div>
                                </Form.Group>


                                <Form.Group className="mb-3 col-sm-6">
                                    <Form.Label>
                                        State <span className="text-danger">*</span>
                                    </Form.Label>
                                    <div className="input-group">

                                        <Form.Control
                                            type="text"
                                        />
                                    </div>
                                </Form.Group>
                                <Form.Group className="mb-3 col-sm-6">
                                    <Form.Label>
                                        PIN Code <span className="text-danger">*</span>
                                    </Form.Label>
                                    <div className="input-group">

                                        <Form.Control
                                            type="text"
                                        />
                                    </div>
                                </Form.Group>


                            </Row>



                            <Button
                                type="submit"
                                variant="primary"
                                className="bg-main-color px-5"
                            >
                               Save Address
                            </Button>
                        </Form>
                    </Col>

                    <Col sm={3}>
                        <MyAccountSideBar />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AddressBook

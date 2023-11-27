import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MyAccountSideBar from './MyAccoutSideBar';
import { fetch } from '../../../../utils';

const MyProfile = () => {
    const [show, setShow] = useState(false);
    const [error, setError] = useState(null);
    const tokenDataFromLocalStorage = localStorage.getItem("muskan_token_data");
    const parsedTokenData = tokenDataFromLocalStorage ? JSON.parse(tokenDataFromLocalStorage) : null;
    console.log('tokenDataFromLocalStorage', parsedTokenData)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleEditProfile = async () => {
        try {
            const response = await fetch('/customer/update-profile', 'POST', null , null);
            if (response) {
                handleClose();
                setError(null); // Clear any previous errors
            } else {
                setError('Profile update failed. Please try again.');
            }
        } catch (error) {
            setError('An error occurred while updating your profile.');
        }
    }

    return (
        <div>
            <hr />
            <Container>
                <p> Home › My Account › Login</p>
                <Row className='mt-5'>
                    <Col sm={3}>
                        <MyAccountSideBar />
                    </Col>
                    <Col sm={9}>
                        <Card>
                            <CardHeader className='bg-light font-15'><b>Profile Details</b> &nbsp;
                                <i className='fa fa-edit cursor main-color' onClick={handleShow}></i> </CardHeader>
                            <CardBody>
                                <font size="3">Your Profile details</font>
                                <div className="mt-1 bg-light p-4 border" >
                                    <table className="table table-borderless" style={{ background: "none" }}>
                                        <tbody>
                                            <tr>
                                                <td>Name :</td>
                                                <td>
                                                    {parsedTokenData.customer_fname} {parsedTokenData.customer_lname}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Email : </td>
                                                <td>
                                                    {parsedTokenData.customer_email}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Phone : </td>
                                                <td>
                                                    {parsedTokenData.customer_mobile}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Address :</td>
                                                <td>
                                                    {parsedTokenData.customer_address}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>




                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title><h5>Edit Profile Details</h5></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Form.Group className="mb-3" as={Col} md="6">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="customer_fname"

                                />
                            </Form.Group>

                            <Form.Group className="mb-3" as={Col} md="6">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="customer_lname"

                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Mobile</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="customer_mobile"

                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="customer_mobile"

                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="customer_address"

                                />
                            </Form.Group>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" >
                        Save Changes
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {error && <div className="text-danger">{error}</div>}
        </div>
    );
}

export default MyProfile;

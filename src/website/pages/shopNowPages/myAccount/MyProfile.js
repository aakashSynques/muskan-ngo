import React, { useState} from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MyAccountSideBar from './MyAccoutSideBar';
import { fetch } from '../../../../utils';

const MyProfile = () => {

    const [show, setShow] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        customer_fname: '',
        customer_lname: '',
        customer_mobile: '',
        customer_email: '',
        customer_address: ''
    });

    const tokenDataFromLocalStorage = localStorage.getItem("muskan_token_data");
    const parsedTokenData = tokenDataFromLocalStorage ? JSON.parse(tokenDataFromLocalStorage) : null;

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setFormData({
            customer_fname: parsedTokenData.customer_fname,
            customer_lname: parsedTokenData.customer_lname,
            customer_mobile: parsedTokenData.customer_mobile,
            customer_email: parsedTokenData.customer_email,
            customer_address: parsedTokenData.customer_address
        });
        setShow(true);
    };

    const handleEditProfile = async () => {
        const body = {
            customer_id: parsedTokenData.customer_id,
            ...formData
        };

        try {
            const response = await fetch('/customer/update-profile', 'POST', body, null);
            if (response) {
                // Update local storage data              
                handleClose();
                const updatedTokenData = { ...parsedTokenData, ...formData };
                localStorage.setItem("muskan_token_data", JSON.stringify(updatedTokenData));
        
                setError(null); // Clear any previous errors
            } else {
                setError('Profile update failed. Please try again.');
            }
        } catch (error) {
            setError('An error occurred while updating your profile.');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    return (
        <div>

            <hr />
            <Container>
                <p> Home › My Account › My Profile</p>
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
                                            {/* <tr>
                                                <td>Address :</td>
                                                <td>
                                                    {parsedTokenData.customer_address}
                                                </td>
                                            </tr> */}
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
                                    value={formData.customer_fname}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" as={Col} md="6">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="customer_lname"
                                    value={formData.customer_lname}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Mobile</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="customer_mobile"
                                    value={formData.customer_mobile}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="customer_email"
                                    value={formData.customer_email}
                                    onChange={handleInputChange}
                                    readOnly
                                />
                            </Form.Group>
{/* 
                            <Form.Group className="mb-3">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="customer_address"
                                    value={formData.customer_address}
                                    onChange={handleInputChange}
                                />
                            </Form.Group> */}
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleEditProfile}>
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
};

export default MyProfile;

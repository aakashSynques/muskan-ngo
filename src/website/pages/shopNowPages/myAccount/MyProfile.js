import { useState } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MyAccountSideBar from './MyAccoutSideBar';
import { fetch } from '../../../../utils';

const MyProfile = () => {
    // Retrieve token data from localStorage
    const tokenDataFromLocalStorage = localStorage.getItem("muskan_token_data");
    const parsedTokenData = tokenDataFromLocalStorage ? JSON.parse(tokenDataFromLocalStorage) : null;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleEditProfile = async () => {
        const body = {
            customer_id: parsedTokenData.customer_id,
            customer_email: '',
            customer_fname: '',
            customer_lname: '',
            customer_mobile: '',
            customer_address:'',
        }
        try {
            const response = await fetch('/customer/update-profile', 'POST', body, null);
            if (response) {
                console.log('updated data success')
            } else {
                console.log('updated faild')
            }

        } catch (error) {
            console.log('errro', error)
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
                                <font size="3">Your Profile  details</font>

                                <div className="mt-1 bg-light p-4 border" >
                                    <table className="table table-borderless" style={{ background: "none" }}>
                                        <tbody>
                                            <tr>
                                                <td>Name :</td>
                                                <td>{parsedTokenData ? `${parsedTokenData.customer_fname} ${parsedTokenData.customer_lname}` : 'N/A'}</td>
                                            </tr>
                                            <tr>
                                                <td>Email : </td>
                                                <td>{parsedTokenData ? parsedTokenData.customer_email : 'N/A'}</td>
                                            </tr>
                                            <tr>
                                                <td>Phone : </td>
                                                <td>{parsedTokenData ? parsedTokenData.customer_mobile : 'N/A'}</td>
                                            </tr>
                                            <tr>
                                                <td>Address :</td>
                                                <td>{parsedTokenData ? parsedTokenData.customer_address : 'N/A'}</td>
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
                    <Modal.Title ><h5>Edit Profile Details</h5></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" name="" value={parsedTokenData.customer_fname} placeholder="" />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder=""  value={parsedTokenData.customer_lname}/>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Mobile</Form.Label>
                            <Form.Control type="number" placeholder="" value={parsedTokenData.customer_mobile} />
                        </Form.Group>


                        <Form.Group className="mb-3" >
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder=""  />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default MyProfile;

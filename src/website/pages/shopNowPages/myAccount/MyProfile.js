import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'react-bootstrap';
import MyAccountSideBar from './MyAccoutSideBar';

const MyProfile = () => {
    // Retrieve token data from localStorage
    const tokenDataFromLocalStorage = localStorage.getItem("muskan_token_data");
    const parsedTokenData = tokenDataFromLocalStorage ? JSON.parse(tokenDataFromLocalStorage) : null;

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
                            <CardHeader className='bg-light'><b>Profile Details</b> </CardHeader>
                            <CardBody>
                                <table className="table table-borderless pb-0 mb-0">
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
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MyProfile;

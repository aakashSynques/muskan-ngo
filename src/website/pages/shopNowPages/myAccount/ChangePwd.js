import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, CardHeader, CardBody } from 'react-bootstrap';

import { fetch } from '../../../../utils';
import MyAccountSideBar from './MyAccoutSideBar';

const ChangePwd = () => {
    const tokenDataFromLocalStorage = localStorage.getItem('muskan_token_data');
    const parsedTokenData = tokenDataFromLocalStorage ? JSON.parse(tokenDataFromLocalStorage) : null;

    const [old_password, setOldPassword] = useState('');
    const [new_password, setNewPassword] = useState('');
    const [confirm_new_password, setConfirmNewPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [passwordChanged, setPasswordChanged] = useState(false);
    const [passwordMismatchError, setPasswordMismatchError] = useState(false);
    const [error, setError] = useState(null); // State variable to store the API error message
    const changePwd = async () => {
        const body = {
            customer_id: parsedTokenData.customer_id,
            old_password: old_password,
            new_password: new_password
        };
        try {
            setLoading(true);
            const response = await fetch('/customer/change-password', 'POST', body, null);
            if (response) {
                
                setPasswordChanged(true);
            } else {
                setError('Failed to change password');
            }
        } catch (error) {
            setError('An error occurred while changing the password'); 

        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check for empty values and password mismatch
        if (old_password === '' || new_password === '' || confirm_new_password === '') {
            // Handle empty values
            alert('All fields are required');
        } else if (new_password !== confirm_new_password) {
            // Handle password mismatch
            setPasswordMismatchError(true);
        } else {
            // All validation passed, change the password
            changePwd();
            setPasswordMismatchError(false); // Reset the error state
        }
    };

    return (
        <div>
            <hr />
            <Container>
                <font> Home › My Account › Forgot Password</font>
                <Row className='pt-5'>
                    <Col sm={3}>
                        <MyAccountSideBar />
                    </Col>

                    <Col sm={9} className='pe-5'>
                        <Card>
                            <CardHeader className="bg-light">
                                <b>Change Password</b>
                            </CardHeader>
                            <CardBody>
                                <font size="3">Your password has expired; Please choose a new password.</font>

                                <div className="mt-4 bg-light p-4 border">

                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Old Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="Password"
                                                value={old_password}
                                                onChange={(e) => setOldPassword(e.target.value)}
                                                required // This makes the field required
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>New Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="New Password"
                                                value={new_password}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                                required // This makes the field required
                                            />
                                        </Form.Group>

                                        {passwordMismatchError && (
                                            <p className='text-danger'>New password and confirm new password do not match.</p>
                                        )}
                                        <Form.Group className="mb-3">
                                            <Form.Label>Confirm New Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="Confirm Password"
                                                value={confirm_new_password}
                                                onChange={(e) => setConfirmNewPassword(e.target.value)}
                                                required // This makes the field required
                                            />
                                        </Form.Group>


                                        {error && (
                                            <p className='text-danger'>{error}</p> // Display the error message on the screen
                                        )}


                                        {passwordChanged ? (
                                            <p className='text-success'>Password has been changed successfully.</p>
                                        ) : (
                                            <>
                                                <Button variant="primary" type="submit" disabled={loading}>
                                                    {loading ? 'Please wait, resetting password...' : 'Set Password'}
                                                </Button>
                                            </>
                                        )}
                                    </Form>

                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ChangePwd;

import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
const LeaveReplyForm = () => {
    return (
        <>
            <h4 className='mt-4 text-uppercase'>Leve a reply</h4>
            <p>Your email address will not be published. Required fields are marked *</p>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} >
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group as={Col} >
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>
                    <Form.Group as={Col} >
                        <Form.Label>Website</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3 mt-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Row>
                <Button type='submit' className='btn btn-primery'>Post Comment</Button>
            </Form>
        </>
    )
}

export default LeaveReplyForm

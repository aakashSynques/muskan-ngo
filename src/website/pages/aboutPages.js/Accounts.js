import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Accounts = () => {
    return (
        <>
            <Container className='mt-5'>
                <h4 className='text-center'>KINDLY FIND ALL OUR ACCOUNTS REPORTS BELOW</h4>
                <Row className='mt-5'>
                    <Col sm={3}>

                        <h6>FCRA Quarterly Report</h6>
                    </Col>
                    <Col sm={3}>

                        <h6>Audited Accounts</h6>
                    </Col>
                    <Col sm={3}>

                        <h6>Annual Report</h6>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Accounts



import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import AboutSideBar from './AboutSideBar'

const WhoWeWork = () => {
    return (
        <>
            <div className='connect-bg fixed-bg'>
                <Container className='text-center text-white'>
                    <h1>Who We Work With</h1>
                </Container>
            </div>
            <div className='bgpettern pb-5'>
                <Container className='pt-4'>
                    <h4>Who We Work With</h4>
                    <p>Home  / Who We Work With</p>
                    <Row className='with_aside-border history'>
                        <Col sm={10}>
                        <h5 className='text-center pt-5'>Who We Work With</h5>
                        </Col>
                        <Col sm={2} className='with_aside-border-left pt-3 '>
                            <h4>About Us</h4>
                            <AboutSideBar />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default WhoWeWork
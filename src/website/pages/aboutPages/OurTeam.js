


import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import AboutSideBar from './AboutSideBar'

const OurTeam = () => {
    return (
        <>
            <div className='connect-bg fixed-bg'>
                <Container className='text-center'>
                    {/* <h1>Connect</h1> */}
                </Container>
            </div>
            <div className='bgpettern pb-5'>
                <Container className='pt-4'>
                    <h4>Our Team</h4>
                    <p>Home  / Our Team</p>
                    <Row className='with_aside-border history'>
                        <Col sm={10}>

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

export default OurTeam
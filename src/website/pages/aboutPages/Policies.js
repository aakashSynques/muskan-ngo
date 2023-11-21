
import React from 'react'
import { Container, Col, Row, Card, Image, } from 'react-bootstrap'
import AboutSideBar from './AboutSideBar'
import policies1 from '../../assets/pdfFile/Policy - Gender Policy.pdf'
import policies2 from '../../assets/pdfFile/Policy - Child Protection Policy.pdf'
import policies3 from '../../assets/pdfFile/Policy -  HR policy_compressed.pdf'


const Policies = () => {
    return (
        <>
            <div className='connect-bg fixed-bg'>
                <Container className='text-center'>
                    {/* <h1>Connect</h1> */}
                </Container>
            </div>
            <div className='bgpettern pb-5'>
                <Container className='pt-4'>
                    <h4>Policies</h4>
                    <p>Home  / Policies</p>
                    <Row className='with_aside-border history'>
                        <Col sm={10} className='pt-4'>
                            <Row>
                                <Col sm={4}>
                                    <div className='white-bg-tile'>
                                        <Image
                                            src={require('../../assets/images/gender.png')}
                                            alt="" className='w-100 rounded-50 px-5 py-3 ' />
                                        <div className='text-center '>
                                            <h6>GENDER POLICY</h6>
                                            <a href={policies1} target="_blank" download>
                                                <i class="fa fa-download" aria-hidden="true"></i>  Download
                                            </a>
                                        </div>
                                    </div>
                                </Col>

                                <Col sm={4}>
                                    <div className='white-bg-tile'>
                                        <Image
                                            src={require('../../assets/images/child.png')}
                                            alt="" className='w-100 rounded-50 px-5 py-3' />
                                        <div className='text-center '>
                                            <h6>CHILD PROTECTION POLICY</h6>
                                            <a href={policies2} target="_blank" download>
                                                <i class="fa fa-download" aria-hidden="true"></i>  Download
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
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

export default Policies
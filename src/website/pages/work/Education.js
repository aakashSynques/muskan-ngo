import React from 'react'
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import Language from './workAccordian/Language';
import Libraries from './workAccordian/Libraries';
import BuildingPerspectives from './workAccordian/BuildingPerspectives';
import IndigenousEducation from './workAccordian/IndigenousEducation';
import Scientific from './workAccordian/Scientific';
const Education = () => {
    return (
        <>
      
            <div className='connect-bg fixed-bg'>
                <Container className='text-center text-white'>
                    {/* <h1>Connect</h1> */}
                    <h1>Education</h1>
                </Container>
            </div>

            <div className='mt-5'>
                <Container>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Language as a Tool for Expression</Accordion.Header>
                            <Accordion.Body>
                                <Language />
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Books and Libraries</Accordion.Header>
                            <Accordion.Body>
                                <Libraries />
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Building Perspectives</Accordion.Header>
                            <Accordion.Body>
                                <BuildingPerspectives />
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Indigenous Education</Accordion.Header>
                            <Accordion.Body>
                                <IndigenousEducation />
                            </Accordion.Body>
                        </Accordion.Item>


                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Scientific Temper</Accordion.Header>
                            <Accordion.Body>
                                <Scientific />
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                </Container>
            </div>
        </>
    )
}

export default Education

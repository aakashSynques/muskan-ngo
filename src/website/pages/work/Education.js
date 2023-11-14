import React from 'react'
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import Language from './workAccordian/Language';
import Libraries from './workAccordian/Libraries';
import BuildingPerspectives from './workAccordian/BuildingPerspectives';
import IndigenousEducation from './workAccordian/IndigenousEducation';


const Education = () => {
    return (
        <>
            <div className='contact-bg fixed-bg'>
                <Container className='text-center'>
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                </Container>
            </div>
        </>
    )
}

export default Education

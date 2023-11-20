import React from 'react'
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import AzadJugnuClub from './empoweringAccordian/AzadJugnuClub';
import YuwaonKiAwaz from './empoweringAccordian/YuwaonKiAwaz';
import UltimateFrisbee from './empoweringAccordian/UltimateFrisbee';
import ChildProtection from './empoweringAccordian/ChildProtection';
import Theatre from './empoweringAccordian/Theatre';
import YouthFellowships from './empoweringAccordian/YouthFellowships';

const Empowering = () => {
    return (
        <>
                <div className='contact-bg fixed-bg'>
                    <Container className='text-center'>
                        <h1>Empowering Children And Youth</h1>
                    </Container>
                </div>

                <div className='mt-5'>
                    <Container>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Azad Jugnu Club</Accordion.Header>
                                <Accordion.Body>
                                    <AzadJugnuClub/>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Yuwaon Ki Awaz</Accordion.Header>
                                <Accordion.Body>    
                                    <YuwaonKiAwaz />
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Ultimate Frisbee</Accordion.Header>
                                <Accordion.Body>
                                    <UltimateFrisbee />
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Child Protection</Accordion.Header>
                                <Accordion.Body>
                                    <ChildProtection />
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Theatre</Accordion.Header>
                                <Accordion.Body>
                                    <Theatre />
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="5">
                                <Accordion.Header>Youth Fellowships</Accordion.Header>
                                <Accordion.Body>
                                        <YouthFellowships />
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                    </Container>
                </div>
            </>
    )
}

export default Empowering
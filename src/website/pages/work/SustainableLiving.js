import React from 'react'
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import PermacultureAndComposting from './sustainableLivingAccordian/PermacultureAndComposting';
import MittiKaGhar from './sustainableLivingAccordian/MittiKaGhar';
import ReducePlastic from './sustainableLivingAccordian/ReducePlastic';

const SustainableLiving = () => {
    return (
        <>
            <div className='contact-bg fixed-bg'>
                <Container className='text-center'>
                    <h1>Sustainable Living</h1>
                </Container>
            </div>

            <div className='mt-5'>
                <Container>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Permaculture And Composting </Accordion.Header>
                            <Accordion.Body>
                                <PermacultureAndComposting />
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Mitti ka Ghar</Accordion.Header>
                            <Accordion.Body>
                                <MittiKaGhar />
                            </Accordion.Body>
                        </Accordion.Item>


                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Reduce Plastic</Accordion.Header>
                            <Accordion.Body>
                                    <ReducePlastic />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>
            </div>
        </>
    )
}

export default SustainableLiving
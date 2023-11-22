import React from 'react'
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import DocumentsAndEntitlements from './issuesOfDignityAccordian/DocumentsAndEntitlements';
import DenotifiedTribes from './issuesOfDignityAccordian/DenotifiedTribes';
import MentalHealth from './issuesOfDignityAccordian/MentalHealth';
const IssuesOfDignity = () => {
    return (
        <>
           <div className='connect-bg fixed-bg'>
                <Container className='text-center text-white'>
                    <h1>Issues Of Dignity And Survival</h1>
                </Container>
            </div>

            <div className='mt-5'>
                <Container>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Documents And Entitlements</Accordion.Header>
                            <Accordion.Body>
                                <DocumentsAndEntitlements />
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Denotified Tribes</Accordion.Header>
                            <Accordion.Body>
                                <DenotifiedTribes />
                            </Accordion.Body>
                        </Accordion.Item>

                        
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Mental Health</Accordion.Header>
                            <Accordion.Body>
                            <MentalHealth />
                            </Accordion.Body>
                        </Accordion.Item>

                      

                    </Accordion>
                </Container>
            </div>
            </>
    )
}

export default IssuesOfDignity
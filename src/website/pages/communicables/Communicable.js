import React from 'react'
import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Blog from './Blog';
import Reports from './Reports';
import FieldRealities from './FieldRealities';
import CommunityStorie from './CommunityStorie';
import ChildrenLiterature from './ChildrenLiterature';
import Reflections from './Reflections';
import ClassRoom from './ClassRoom';
import Accordion from 'react-bootstrap/Accordion';

const Communicable = () => {
    return (
        <>
            <div className='connect-bg fixed-bg'>
                <Container className='text-center text-white'>
                    <h1>Communicables</h1>
                </Container>
            </div>
            <div className='mt-5 communicable'>
                <Container>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Reports / Updates</Accordion.Header>
                            <Accordion.Body>
                                <Reports />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Field Realities</Accordion.Header>
                            <Accordion.Body>
                                <FieldRealities />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Community Stories</Accordion.Header>
                            <Accordion.Body>
                                <CommunityStorie />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Children's Literature</Accordion.Header>
                            <Accordion.Body>
                                <ChildrenLiterature />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Reflections</Accordion.Header>
                            <Accordion.Body>
                                <Reflections />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Blog</Accordion.Header>
                            <Accordion.Body>
                                Blogs
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>Classroom Experiences</Accordion.Header>
                            <Accordion.Body>
                               <ClassRoom />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>
            </div>
            {/* 
            <div className='mt-5 communication-tab'>
                <Container>
                    <Tabs
                        defaultActiveKey="seven"
                        id="fill-tab-example"
                        className="mb-3"
                        fill
                    >
                        

                        <Tab eventKey="one" title="Reports / Updates">
                            <Reports />
                        </Tab>

                        <Tab eventKey="two" title="Field Realities">
                            <FieldRealities />
                        </Tab>

                        <Tab eventKey="tree" title="Community Stories">
                         <CommunityStorie />
                        </Tab>
                        <Tab eventKey="four" title="Children’s Literature">
                          <ChildrenLiterature />
                        </Tab>
                        <Tab eventKey="five" title="Reflections">
                          <Reflections />
                        </Tab>
                        <Tab eventKey="seven" title="Blog ">
                            <Blog />
                        </Tab>
                        <Tab eventKey="six" title="Classroom experiences">
                    <ClassRoom />
                        </Tab>
                    </Tabs>
                </Container>
            </div> */}

        </>
    )
}

export default Communicable

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

const Communicable = () => {
    return (
        <>
            <div className='contact-bg fixed-bg'>
                <Container className='text-center'>
                    <h1>Communicables</h1>
                </Container>
            </div>

            <div className='mt-5 communication-tab'>
                <Container>
                    <Tabs
                        defaultActiveKey="seven"
                        id="fill-tab-example"
                        className="mb-3"
                        fill
                    >
                        <Tab eventKey="seven" title="Blog">
                            <Blog />
                        </Tab>

                        <Tab eventKey="one" title="Reports">
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
                        <Tab eventKey="six" title="Classroom experiences">
                    <ClassRoom />
                        </Tab>
                    </Tabs>
                </Container>
            </div>

        </>
    )
}

export default Communicable

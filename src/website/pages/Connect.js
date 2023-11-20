import React from 'react'
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReCAPTCHA from 'react-google-recaptcha';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Contect from './connectTabs/Contect';
import Career from './connectTabs/Career';
import Internship from './connectTabs/Internship';
import Volunteer from './connectTabs/Volunteer';
import Jobs from './connectTabs/Jobs';
import DonateNow from './connectTabs/DonateNow';


const Connect = () => {

  return (
    <>
      <div className='contact-bg fixed-bg'>
        <Container className='text-center'>
          <h1>Connect</h1>
        </Container>
      </div>




      <div className='mt-5 communication-tab'>
        <Container>
          <Tabs
            defaultActiveKey="one"
            id="fill-tab-example"
            className="mb-3"
            fill
          >

            <Tab eventKey="six" title="Donate Now">
              <DonateNow />
            </Tab>
            <Tab eventKey="two" title="Jobs">
              {/* <Jobs /> */}
              <Career />
            </Tab>
            <Tab eventKey="five" title="Valunteer">
              <Volunteer />
            </Tab>
            {/* <Tab eventKey="tree" title="Career">
                <Career />
            </Tab> */}
            <Tab eventKey="tree" title="Social Media">
              {/* <Career /> */}
              Social Media
            </Tab>
            <Tab eventKey="four" title=" Internship">
              <Internship />
            </Tab>
            <Tab eventKey="one" title="Contact us">
              <Contect />
            </Tab>
          </Tabs>
        </Container>
      </div>
    </>
  )
}

export default Connect

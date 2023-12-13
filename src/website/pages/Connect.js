import React from 'react'
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReCAPTCHA from 'react-google-recaptcha';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Contect from './connectTabs/Contect';

import Internship from './connectTabs/Internship';
import Volunteer from './connectTabs/Volunteer';
import DonateNow from './connectTabs/DonateNow';
import Jobs from './connectTabs/Jobs';



const Connect = () => {

  return (
    <>
      <div className='connect-bg fixed-bg'>
        <Container className='text-center text-white'>
          <h1>Connect</h1>
        </Container>
      </div>

      <div className='mt-5 communication-tab'>
        <Container>
          <Tabs
            defaultActiveKey="one"
            id="fill-tab-example"

          // fill
          >

            <Tab eventKey="one" title="Donate Now">
              <DonateNow />
            </Tab>
            <Tab eventKey="two" title="Jobs">
              <Jobs />
            </Tab>
            <Tab eventKey="five" title="Volunteer">
              <Volunteer />
            </Tab>
            <Tab eventKey="tree" title="Social Media">
              {/* <Career /> */}
              Social Media
            </Tab>
            <Tab eventKey="four" title=" Internship">
              <Internship />
            </Tab>
            <Tab eventKey="six" title="Contact Us">
              <Contect />
            </Tab>
          </Tabs>
        </Container>
      </div>
    </>
  )
}

export default Connect

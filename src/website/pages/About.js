
import React from 'react'
import { Container, Col, Row, Card } from 'react-bootstrap'
import AboutSideBar from './aboutPages/AboutSideBar'



const About = () => {
  return (
    <>
      <div className='connect-bg fixed-bg'>
        <Container className='text-center text-white'>
          <h1>About Us</h1>
        </Container>
      </div>
      <div className='bgpettern pb-5'>
        <Container className='pt-4'>
          <h4>About</h4>
          <p>Home  / About</p>
          <Row className='with_aside-border history'>
            <Col sm={10} className='tab_tabbing mt-4'>
              <p>
                At Muskaan, we have come to a belief that realization of empowerment through education journey in the lives of children and young people from marginalized communities would be wholesome when there would be conscious and consistent attempts to assess and address their own living realities and similarly the other vulnerable communities. To ensure this, we adopt critical learning processes within the space of formal school as well as community spaces/contexts.
              </p>
              <p>We engage with the members of the community and develop collective capabilities of people of varied age groups, whilst being conscious that each of the community members is also on their personal journey. The intent is to ensure that there can be a space through which each member of the community can also draw strength from a collective pursuit as well. Developing thought leaders of marginalized communities who can determine the essential interventions at the community level is at core of our mandate.</p>
              <p>Working with people, we believe that we cannot segregate issues of their lives and select/limit the organizational mandate. To do so based on organizational convenience is to turn the back to the unjust ecosystem that exists.  Therefore, issues of protection as sexual abuse, violence, or access to entitlements, as health or PDS are all areas which have become an integral concern to us.</p>
              <p>We have been actively working and learning on this journey with members of denotifed tribes and the urban poor since 1998.</p>
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

export default About

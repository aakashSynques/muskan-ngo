import React from 'react'
import { Container, Col, Row, Tab, Tabs, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AboutSideBar from './AboutSideBar'

const History = () => {
  return (
    <>
      <div className='connect-bg fixed-bg'>
        <Container className='text-center text-white'>
          <h1>History</h1>
        </Container>
      </div>
      <div className='bgpettern pb-5'>
        <Container className='pt-4'>
          <h4>Our History</h4>
          <p>Home  / Our History</p>


          <Row className='with_aside-border history'>
            {/* <Col sm={10} className='pt-3'>
              <h5>
                1997 - 1998: Commitment to Education
              </h5>
              <p>In 1997, we began with the goal of enrolling marginalized children in the formal schooling
                system by preparing them for admissions in age-appropriate classes. Over time, we recognized
                that sending these children to school was merely a small part of a broader and longer journey
                towards any meaningful and substantial transformation in their lives. During this period, we
                continually got a better understanding of what the formal schooling experience had to offer to the
                children from the marginalized Adivasi communities.</p>

              <h5>
                1998 – 2005: Challenging Educational Barriers and Seeking Solutions
              </h5>
              <p>Despite ensuring a smooth transition of our children into schools and providing them constant
                support in terms of academics, provisions of uniforms and other supplies, children only
                experienced rebuke and disrespect. Instead of gaining confidence and education through the
                formal schooling experience, children were becoming quiet and subservient. Eventually we
                concluded that schooling experiences differed based on social and economic standing.</p>
              <p>Children from marginalized communities like Pardhis and Gonds come with a lot of trauma and
                challenges because of systemic issues. They experience and witness different kinds of violence,
                financial crisis, difficulties getting access to government facilities, et al. All these combined
                together impact their daily lives and hence their education.</p>
              <p>We earnestly began observing and addressing the realities of the communities.</p>

              <h5>2005 – 2015: Empowering Education and Community Development Initiatives</h5>
              <p><em>Now, many grassroots realities were being tackled by us:</em></p>

              <strong>Education:</strong>
              <ul>
                <li>We established a formal school known as “Jeevan Shiksha Pahel.”</li>
                <li>We started residential camps for out-of-school children, and also a hostel for girls to support
                  them in their struggles against early marriages and difficult working and living conditions.</li>
                <li>We were working on enhancing the curriculum within Government schools by setting-up
                  libraries in schools</li>
                <li>We were giving additional academic inputs to children who were being considered ‘behind’
                  the class expectation.</li>
                <li>We were training teachers at a cluster level.</li>
                <li>We were creating and conducting parent-teacher association meetings.</li>
              </ul>

              <strong>Health &amp; Living Conditions:</strong>
              <ul>
                <li>We started addressing the challenges faced by the urban poor… especially by denotified
                  tribes. Issues such as health, malnutrition, sanitation became an integral part of our mission.</li>
                <li>We took up a city-wide mapping of informal settlements and advocated for targeted
                  interventions to reach the most vulnerable amongst the urban poor. This work contributed to
                  the urban health planning in the state.</li>
              </ul>
              <strong>Violence:</strong>
              <p>
                Tinti Bai’s suicide triggered by institutional violence on her jolted us in 2007. We started
                addressing the issue of police violence on children of the Pardhi community from the police.</p>
              <strong>Identity &amp; Paperwork:</strong>
              <p>As our children were reaching high school, we were also striving for caste certificates of migrant
                adivasi communities with little success.</p>
              <h5>2015 – 2019: Strategic Community Interventions &amp; Multi-Faceted Initiatives</h5>
              <strong>Child Protection:</strong>
              <p>We launched planned interventions at a community level for child protection as against case-by-
                case basis earlier. Cases of sexual abuse of children by various perpetrators, known to children
                within families or by people in authority as a teacher, were taken up with full strength.</p>
              <strong>Violence:</strong>
              <p>Indramal Bai, another death due to police harassment, pushed us to work more closely with
                denotified tribes.</p>
              <strong>Education:</strong>
              <p>All this was in parallel to the intensive work in education with children, taking them from one
                new milestone to the other, and formal education certificates becoming a reality for these
                communities.</p>
              <p>Finding the marginalized child’s voice in children’s literature has become a growing area of
                work for us.</p>
              <h5>2019-2023: Education, Community Interventions &amp; Functionary Sensitization</h5>
              <strong>COVID:</strong>
              <ul>
                <li>We did intensive relief work by delivering rations and household needs to shanties</li>
                <li>We continued with our thrust on education by taking the school-work to the communities in
                  the form of community-based learning centres and set-up more libraries and began work in
                  community settlements in surrounding villages.</li>
              </ul>
              <strong>Mental Health:</strong>
              <p>During this period, we developed a trauma lens in our work with vulnerable communities, and
                are engaging in different therapies to support the people in their healing journeys. Groups led by
                community youth are now taking up change and transformation journeys with their own people.</p>
              <strong>Functionary Trainings:</strong>
              <p>Trainings of functionaries from various departments to make them sensitive to child protection
                concerns has been our new initiative towards making Bhopal a safe city for children.</p>
            </Col> */}
            <Col sm={10} className='pt-3 history-tab'>
              <h3 className='text-uppercase py-2'>
                founding and the rise of <span className='main-color' style={{ fontWeight: "700" }}> muskaan ngo</span>  services
              </h3>
              <Tabs
                defaultActiveKey="tab1"
                id="justify-tab-example"
                className="mb-5 mt-4"
                justify
              >
                <Tab eventKey="tab1" title="1997-1998">
                  <Row>
                    <Col lg={5} md={12}>
                      <Image src={require('../../assets/images/histry1.jpg')} alt="" className='img-fluid rounded-2 pb-2' />
                    </Col>
                    <Col lg={7} md={12}>
                      <h4 className='main-color'>1997 - 1998: Commitment to Education</h4>
                      <p>In 1997, we began with the goal of enrolling marginalized children in the formal schooling system by preparing them for admissions in age-appropriate classes. Over time, we recognized that sending these children to school was merely a small part of a broader and longer journey towards any meaningful and substantial transformation in their lives. During this period, we continually got a better understanding of what the formal schooling experience had to offer to the children from the marginalized Adivasi communities.</p>
                    </Col>
                  </Row>
                </Tab>
                <Tab eventKey="tab2" title="1998-2005">
                  <Row>
                    <Col sm={5}>
                      <Image src={require('../../assets/images/history2.jpg')} alt="" className='img-fluid rounded-2 pb-2' />
                    </Col>
                    <Col sm={7}>
                      <h4 className='main-color'>1998 – 2005: Challenging Educational Barriers and Seeking Solutions</h4>
                      <p>Despite ensuring a smooth transition of our children into schools and providing them constant support in terms of academics, provisions of uniforms and other supplies, children only experienced rebuke and disrespect. Instead of gaining confidence and education through the formal schooling experience, children were becoming quiet and subservient. Eventually we concluded that schooling experiences differed based on social and economic standing.</p>
                      <p>Children from marginalized communities like Pardhis and Gonds come with a lot of trauma and challenges because of systemic issues.
                      </p>
                    </Col>
                    <Col sm={12}>
                      <p>           They experience and witness different kinds of violence, financial crisis, difficulties getting access to
                        government facilities, et al. All these combined together impact their daily lives and hence their education.</p>
                      <p>We earnestly began observing and addressing the realities of the communities.</p>
                    </Col>
                  </Row>
                </Tab>
                <Tab eventKey="tab3" title="2005-2015">
                  <Row>
                    <Col sm={5}>
                      <Image src={require('../../assets/images/history3.jpg')} alt="" className='img-fluid rounded-2 pb-2' />
                    </Col>
                    <Col sm={7}>
                      <h4 className='main-color'>2005 – 2015: Empowering Education and Community Development Initiatives</h4>
                      <em>Now, many grassroots realities were being tackled by us:</em>
                      <h6 className='pt-2'>Education:</h6>
                      <ul>
                        <li>We established a formal school known as “Jeevan Shiksha Pahel.”</li>
                        <li>We started residential camps for out-of-school children, and also a hostel for girls to support them in their struggles against early marriages and difficult working and living conditions.</li>
                        <li>We were working on enhancing the curriculum within Government schools by setting-up libraries in schools</li>

                      </ul>
                    </Col>
                    <Col sm={12}>
                      <ul>
                        <li>We were giving additional academic inputs to children who were being considered ‘behind’ the class expectation.</li>
                        <li>We were training teachers at a cluster level.</li>
                        <li>We were creating and conducting parent-teacher association meetings.
                        </li>
                      </ul>

                      <h6 className='pt-2'>Health & Living Conditions:</h6>
                      <ul>
                        <li>We started addressing the challenges faced by the urban poor… especially by denotified tribes. Issues such as health, malnutrition, sanitation became an integral part of our mission.</li>
                        <li>We took up a city-wide mapping of informal settlements and advocated for targeted interventions to reach the most vulnerable amongst the urban poor. This work contributed to the urban health planning in the state.</li>
                      </ul>
                      <h6 className='pt-2'>Violence:</h6>
                      <ul>
                        <li>Tinti Bai’s suicide triggered by institutional violence on her jolted us in 2007. We started addressing the issue of police violence on children of the Pardhi community from the police.</li>
                      </ul>
                      <h6 className='pt-2'>Identity & Paperwork:</h6>
                      <ul>
                        <li>As our children were reaching high school, we were also striving for caste certificates of migrant adivasi communities with little success.</li>
                      </ul>
                    </Col>
                  </Row>
                </Tab>
                <Tab eventKey="tab4" title="2015-2019">
                  <Row>
                    <Col sm={5}>
                      <Image src={require('../../assets/images/history4.jpg')} alt="" className='img-fluid rounded-2 pb-2' />
                    </Col>
                    <Col sm={7}>
                      <h4 className='main-color'>2015 – 2019: Strategic Community Interventions & Multi-Faceted Initiatives</h4>

                      <p><strong>Child Protection : </strong>
                        We launched planned interventions at a community level for child protection as against case-by- case basis earlier. Cases of sexual abuse of children by various perpetrators, known to children within families or by people in authority as a teacher, were taken up with full strength.
                      </p>
                      <p><strong>Violence :</strong> Indramal Bai, another death due to police harassment, pushed us to work more closely with denotified tribes.
                      </p>

                    </Col>
                    <Col sm={12}>
                      <p className='pt-2'><strong>Education : </strong>
                        All this was in parallel to the intensive work in education with children, taking them from one new milestone to the other, and formal education certificates becoming a reality for these communities.
                      </p>
                      <p>Finding the marginalized child’s voice in children’s literature has become a growing area of work for us.</p>
                    </Col>
                  </Row>
                </Tab>
                <Tab eventKey="tab5" title="2019-2023">
                  <Row>
                    <Col sm={5}>
                      <Image src={require('../../assets/images/history5.jpg')} alt="" className='img-fluid rounded-2 pb-2' />
                    </Col>
                    <Col sm={7}>
                      <h4 className='main-color'>2019-2023: Education, Community Interventions & Functionary Sensitization</h4>
                      <h6>COVID : </h6>
                      <ul>
                        <li>We did intensive relief work by delivering rations and household needs to shanties</li>
                        <li>We continued with our thrust on education by taking the school-work to the communities in the form of community-based learning centres and set-up more libraries and began work in community settlements in surrounding villages.</li>
                      </ul>
                    </Col>
                    <Col sm={12} className='pt-2'>
                      <p><strong>Mental Health : </strong> During this period, we developed a trauma lens in our work with vulnerable communities, and are engaging in different therapies to support the people in their healing journeys. Groups led by community youth are now taking up change and transformation journeys with their own people.</p>
                      <p><strong>Functionary Trainings:</strong> Trainings of functionaries from various departments to make them sensitive to child protection concerns has been our new initiative towards making Bhopal a safe city for children.</p>
                    </Col>
                  </Row>
                </Tab>
              </Tabs>
            </Col>

            <Col sm={2} className='with_aside-border-left pt-3 '>
              <h4>About Us</h4>
              {/* <ul >
                <li>
                  <Link to="/about-us/history">History</Link>
                </li>
                <li>
                  <Link to='/about-us/accounts'>Mission</Link>
                </li>
                <li>
                  <Link>Our Team</Link>
                </li>
                <li>
                  <Link>Who We Work With</Link>
                </li>
                <li>
                  <Link>Financials</Link>
                </li>
                <li>
                  <Link>Policies</Link>
                </li>
                <li>
                  <Link>Collaborations</Link>
                </li>
              </ul> */}
              <AboutSideBar />
            </Col>
          </Row>
        </Container>
      </div>

    </>
  )
}

export default History
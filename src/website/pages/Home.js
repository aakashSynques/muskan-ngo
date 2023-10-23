import React from 'react'
import NavigationBar from '../layout/NavigationBar'
import '../assets/css/navbar.css'
import Slider from '../component/Slider'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import about1 from '../assets/images/about1.jpg'
import about2 from '../assets/images/about2.jpg'
import ShopNowItem from '../component/ShopNowItem'

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <Slider />

      {/* About section */}
      <Container className='pt-5'>
        <Row>
          <Col sm={6}>
            <div className='about-section section-title pe-5 pt-4'>
              <h2>About Us</h2>
              <p>At Muskaan, we are committed to empowering children and young individuals from marginalized communities through education. Our approach encourages and enables them to explore and address the realities of their own lives as well as of other vulnerable people around them. We adopt these critical learning processes in our formal school and out-of-school community spaces, as libraries and learning centres.</p>
              <p>Muskaan operates at the grassroots level in informal urban settlements and villages in order to nurture the potential of people across various age groups and life-stages. We try to focus on individual journeys of community members while drawing strength from collective pursuits. A key aspect of our undertaking is to strengthen leadership within marginalized communities, enabling them to spearhead and guide interventions at community level.</p>

              <Button className='btn btn-danger'>Learn more</Button>
            </div>
          </Col>
          <Col sm={6}>
            <div className="about-image about-one-img">
              <img src={about1} alt="muskaan ngo" className="shadow d-none d-sm-block" />
              <img src={about2} alt="muskaan ngo" className="shadow" />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Shop now section */}
      <ShopNowItem />


      <section className="about-section bd-bottom shape circle padding">
        <Container>
          <Row>
            <Col lg={12} className="text-center section-title">
              <h2>Our Work</h2>
              <p>We work in a wide range of areas to maximize the impact we can create.</p>
            </Col>
          </Row>
          <Row>
            <Col lg={4} className="mrgn-top20">
              <div className="work-box">
                <Image src="images" width={200} alt="Education" />
                <h3>EDUCATION</h3>
                <p>More than 90% of children of marginalized communities do not finish school.</p>
                <a href="#">
                  Read More
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </Col>
            <Col lg={4} className="mrgn-top20">
              <div className="work-box">
                <Image src={require('../assets/images/workimges/education.png')} width={200} alt="Education" />
                <h3>EDUCATION</h3>
                <p>More than 90% of children of marginalized communities do not finish school.</p>
                <a href="#">
                  Read More
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </Col>
            <Col lg={4} className="mrgn-top20">
              <div className="work-box">
                <Image src="http://demo1.q4hosting.com/muskaan-template/images/education.png" width={200} alt="Education" />
                <h3>EDUCATION</h3>
                <p>More than 90% of children of marginalized communities do not finish school.</p>
                <a href="#">
                  Read More
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </div>
  )
}

export default Home

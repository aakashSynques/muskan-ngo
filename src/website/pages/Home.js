import React from 'react'
import '../assets/css/navbar.css'
import '../assets/css/footer.css'
import Slider from '../component/Slider'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import about1 from '../assets/images/about1.jpg'
import about2 from '../assets/images/about2.jpg'
import ShopNowItem from '../component/ShopNowItem'
import { Link } from 'react-router-dom'
import WorkBox from '../component/WorkBox'
import Footer from '../layout/Footer'

const Home = () => {
  return (
    <div>

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


      {/* <section className="about-section bd-bottom shape circle padding">
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
                <Image src={require('../assets/images/workimges/education.png')} width={200} alt="Education" />
                <h3 className='f-w-6 pt-2'>EDUCATION</h3>
                <p>More than 90% of children of marginalized communities do not finish school.</p>
                <Link to="/" className='text-dark'>
                  Read More
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </Link>
              </div>
            </Col>
            <Col lg={4} className="mrgn-top20">
              <div className="work-box">
                <Image src={require('../assets/images/workimges/capable.png')} width={200} alt="Education" />
                <h3 className='f-w-6 pt-2'>EMPOWERING CHILDREN AND YOUTH</h3>
                <p>We believe that with the kind of energy that youth contains</p>
                <Link to="/" className='text-dark'>
                  Read More
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </Link>
              </div>
            </Col>
            <Col lg={4} className="mrgn-top20">
              <div className="work-box">
                <Image src={require('../assets/images/workimges/life.png')} width={200} alt="Education" />
                <h3 className='f-w-6 pt-2'>ISSUES OF DIGNITY AND SURVIVAL</h3>
                <p>The current atmosphere demands documentation that proves the.</p>
                <Link to="/" className='text-dark'>
                  Read More
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}
      <section className="about-section bd-bottom shape circle padding">
        <Container>
          <Row>
            <Col lg={12} className="text-center section-title">
              <h2>Our Work</h2>
              <p>We work in a wide range of areas to maximize the impact we can create.</p>
            </Col>
          </Row>
          <Row>
            <WorkBox
              imageSrc={require('../assets/images/workimges/education.png')}
              title="EDUCATION"
              description="More than 90% of children of marginalized communities do not finish school."
            />
            <WorkBox
              imageSrc={require('../assets/images/workimges/capable.png')}
              title="EMPOWERING CHILDREN AND YOUTH"
              description="We believe that with the kind of energy that youth contains."
            />
            <WorkBox
              imageSrc={require('../assets/images/workimges/life.png')}
              title="ISSUES OF DIGNITY AND SURVIVAL"
              description="The current atmosphere demands documentation that proves the."
            />
            <WorkBox
              imageSrc={require('../assets/images/workimges/livelyhood-2.png')}
              title="LIVELIHOODS"
              description="With the challenges of Covid-19 pandemic and the lockdowns."
            />

            <WorkBox
              imageSrc={require('../assets/images/workimges/living.png')}
              title="SUSTAINABLE LIVING"
              description="We believe in the philosophy of sustainable living that aims"
            />
            <WorkBox
              imageSrc={require('../assets/images/workimges/three-books.png')}
              title="PUBLICATIONS"
              description="Muskaan Publication Catalouge"
            />
          </Row>
        </Container>
      </section>


      <section className='bg-light p70'>
        <Container>
          <Row>
            <Col lg={12} className="text-center section-title">
              <h2>Our Happy Faces</h2>
            </Col>
          </Row>
          <Row>
            <Col sm={4} className='py-3'>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/otCK_01YrLo?si=KHX1NQBI2jKYj-o3"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </Col>
            <Col sm={4} className='py-3'>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/Y8MH3x2wxbo?si=Y1uAxhV01g5Pc7zL"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </Col>
            <Col sm={4} className='py-3'>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/Y8MH3x2wxbo?si=Y1uAxhV01g5Pc7zL"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </Col>
          </Row>
          <div className="col-lg-12 text-center section-title">
            <a href="https://www.youtube.com/@muskaanbhopal/videos" target="_blank" className="btn-1">See more</a>
          </div>
        </Container>
      </section>

      <section className="p70">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center section-title">
              <h2>Recent Blogs</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 padding-15">
              <div className="blog-post">
                <Image src={require('../assets/images/blog/blog-1.jpg')} alt="blog post" className='w-100' />
                <div className="blog-content">
                  <span className="date">January 01, 2021</span>
                  <h3>
                    <a href="#">पायल खो गई</a>
                  </h3>
                  <p>
                    मटमैली धूप, काई-से रंग का आसमान और उसके नीचे काई
                    रंग का ही तालाब, सीमेंट और धूल से रंगे चिथड़े, चिन्दियाँ
                    और बच्चे! क्या यह रंग किसी कलर के डब्बे में मिलेंगे?
                  </p>
                  <a href="#" className="post-meta"><b>Read More</b></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 padding-15">
              <div className="blog-post">
                <Image src={require('../assets/images/blog/blog-2.jpg')} alt="blog post" className='w-100' />
                <div className="blog-content">
                  <span className="date">December 19, 2022</span>
                  <h3>
                    <a href="#" className='text-dark'>इंग्लिश रीडर किन मानकों पर है खरी</a>
                  </h3>
                  <p>
                    लेखक: शिवानी तनेजा
                    अनुवाद: अचलेश शर्मा
                    पाठ्य पुस्तक समीक्षा वर्तमान शिक्षा प्रणाली, यहाँ तक
                    कि प्राथमिक कक्षाओं
                  </p>
                  <a href="#" className="post-meta"><b>Read More</b></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 padding-15">
              <div className="blog-post">
                <Image src={require('../assets/images/blog/blog-3.jpg')} alt="blog post" className='w-100' />
                <div className="blog-content">
                  <span className="date">December 19, 2022</span>
                  <h3><a href="#">सफरनामा: एक बाल अखबार का</a></h3>
                  <p>
                    By महेश झरबड़े
                    नवीन हाईस्कूल 25वीं बटालियन,भोपाल में प्राथमिक शाला
                    के बच्चों के साथ काम करते
                  </p>
                  <a href="#" className="post-meta"><b>Read More</b></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

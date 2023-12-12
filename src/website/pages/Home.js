import React from 'react'
import Slider from '../component/Slider'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import about1 from '../assets/images/about1.jpg'
import about2 from '../assets/images/about2.jpg'
// import ShopNowItem from '../component/ShopNowItem'
import { Link } from 'react-router-dom'
import WorkBox from '../component/WorkBox'
import '../assets/css/style.css'
import Youtube from 'react-lazyload-youtube'
import 'react-lazyload-youtube/dist/index.css'
import video1 from '../assets/video/video1.mp4'
import video2 from '../assets/video/video2.mp4'
import video3 from '../assets/video/video3.mp4'

const Home = () => {
  return (
    <div>
      <Slider />

      {/* About section */}
      <Container className='pt-5'>
        <Row>
          <Col sm={6}>
            <div className='about-section section-title pe-lg-5 pt-4 pe-md-0 animate__animated animate__fadeInLeft'>
              <h2 >About Us</h2>
              <p>At Muskaan, we are committed to empowering children and young individuals from marginalized communities through education. Our approach encourages and enables them to explore and address the realities of their own lives as well as of other vulnerable people around them. We adopt these critical learning processes in our formal school and out-of-school community spaces, as libraries and learning centres.</p>
              <p>Muskaan operates at the grassroots level in informal urban settlements and villages in order to nurture the potential of people across various age groups and life-stages. We try to focus on individual journeys of community members while drawing strength from collective pursuits. A key aspect of our undertaking is to strengthen leadership within marginalized communities, enabling them to spearhead and guide interventions at community level.</p>
              <Link to="/about-us"><Button className='btn btn-danger'>Learn more</Button> </Link>
            </div>
          </Col>
          <Col sm={6}>
            <div className="about-image about-one-img d-none d-sm-block">
              <img src={about1} alt="muskaan ngo" className="shadow d-none d-sm-block img-fluid"   loading="lazy"  height="auto"/>
              <img src={about2} alt="muskaan ngo" className="shadow imh-fluid" loading="lazy" height="auto"/>
            </div>
          </Col>
        </Row>
      </Container>


      <section className="about-section bd-bottom shape circle padding mt-5">
        <Container>
          <Row>
            <Col lg={12} className="text-center section-title">
              <h2>Our Work</h2>
              <p>We work in a wide range of areas to maximize the impact we can create.</p>
            </Col>
          </Row>
          <Row>
            <WorkBox
              imageSrc={require('../assets/images/workimge/education.png')}
              title="EDUCATION"
              alt='education'
              description="More than 90% of children of marginalized communities do not finish school."
              link="/work/education"
            />
            <WorkBox
              imageSrc={require('../assets/images/workimge/capable.png')}
              alt='empowering-children-and-youth'
              title="EMPOWERING CHILDREN AND YOUTH"
              description="We believe that with the kind of energy that youth contains."
              link='/work/empowering-children-and-youth'
            />
            <WorkBox
              imageSrc={require('../assets/images/workimge/life.png')}
             alt="issues-of-dignity-and-survival"
              title="ISSUES OF DIGNITY AND SURVIVAL"
              description="The current atmosphere demands documentation that proves the."
              link='/work/issues-of-dignity-and-survival'
            />
            <WorkBox
              imageSrc={require('../assets/images/workimge/livelyhood-2.png')}
              alt='liveLihoods'
              title="LIVELIHOODS"
              description="With the challenges of Covid-19 pandemic and the lockdowns."
              link='/work/liveLihoods'
            />

            <WorkBox
              imageSrc={require('../assets/images/workimge/living.png')}
              alt='sustainable-living'        
              title="SUSTAINABLE LIVING"
              description="We believe in the philosophy of sustainable living that aims"
              link='/work/sustainable-living'
            />
            <WorkBox
              imageSrc={require('../assets/images/workimge/three-books.png')}
              title="PUBLICATIONS"
              description="Muskaan Publication Catalouge"
              link='/work/publication'
              alt='publication'
            />
          </Row>
        </Container>
      </section>

      {/* Shop now section */}
      <section className="bg-light py-5 mt-5" >
        <Container>
          <Row>
            <Col lg={12} className="text-center section-title">
              <h2>Shop Now</h2>
              <p></p>
            </Col>
            <Col lg={2}></Col>
            <Col lg={4} className="padding-15 pstn-relative">
              <Link to='/books'>
                <Image src={require('../assets/images/shopimg1.webp')} 
                alt="Assorted books on a shelf" 
                role="img" 
                loading="lazy"                 
                aria-label="Assorted books"
                className="w-100 img-fluid"/>
               <h3 className="img-text">Books</h3>
              </Link>
            </Col>
            <Col lg={4} className="padding-15 pstn-relative">
              <Image src={require('../assets/images/shoimg2 .webp')}  alt="diaries" role="img"  className='w-100' loading="lazy"  aria-label="Diaries"/>
              <h3 className="img-text">Diaries</h3>
            </Col>
           {/* <Col lg={4} className="padding-15 pstn-relative">
              <Image src={require('../assets/images/shopimg3.jpg')} fluid alt="Face Masks" className='w-100' />
              <h3 className="img-text">Face Masks</h3>
            </Col> */}
            <Col lg={2}></Col>
          </Row>
        </Container>
      </section>

      <section className='bg-light p70'>
        <Container>
          <Row>
            <Col lg={12} className="text-center section-title">
              <h2>Muskaan's YouTube Channel</h2>
            </Col>
          </Row>
          <Row>

            <Col sm={4} className='py-3'> 
              {/* <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/otCK_01YrLo?si=KHX1NQBI2jKYj-o3"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe> */}

              {/* <Youtube width="100%" height="315px" videoId="otCK_01YrLo?feature=shared"/> */}
              {/* <Youtube width="100%" height="315px" videoId="otCK_01YrLo&t=2s" /> */}

              {/* <video width="100%" height="auto" controls>
                <source src={video1} type="video/mp4" />
              </video> */}

              <video width="100%" height="auto" controls="">
        <track kind="captions" src="path/to/captions.vtt" srclang="en" label="English" />
        <source src={video1} type="video/mp4" />
      </video>

            </Col>


            <Col sm={4} className='py-3'>
              {/* <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/Y8MH3x2wxbo?si=Y1uAxhV01g5Pc7zL"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe> */}
              <video width="100%" height="auto" controls>
              <track kind="captions" src="path/to/captions.vtt" srclang="en" label="English" />
                <source src={video2} type="video/mp4" />
              </video>
            </Col>
            <Col sm={4} className='py-3'>
              {/* <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/nK6NuHGeDrg?si=y1k8Wjgo5zPq3T7m"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe> */}
              <video width="100%" height="auto" controls>
              <track kind="captions" src="path/to/captions.vtt" srclang="en" label="English" />
                <source src={video3} type="video/mp4" />
              </video>
            </Col>
          </Row>
          <div className="col-lg-12 text-center section-title">
            <a href="https://www.youtube.com/@muskaanbhopal" target="_blank" className="btn-1">See more</a>
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
                <Image src={require('../assets/images/blog/blog-1.webp')} alt="blog post" className='w-100' loading="lazy"             width="100%" height="auto"/>
                <div class="blog-content" style={{ backgroundColor: '#F5F5F5', color: '#333' }}>

                  <span className="date"  style={{color: '#000'}}>January 01, 2021</span>
                  <h3>
                    <a href="#">पायल खो गई</a>
                  </h3>
                  <p>
                    मटमैली धूप, काई-से रंग का आसमान और उसके नीचे काई
                    रंग का ही तालाब, सीमेंट और धूल से रंगे चिथड़े, चिन्दियाँ
                    और बच्चे! क्या यह रंग ....
                  </p>
                  <a href="#" className="post-meta"><b>Read More</b></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 padding-15">
              <div className="blog-post">
                <Image src={require('../assets/images/blog/blog-2.webp')} alt="blog post" className='w-100' loading="lazy"             width="100%" height="auto"/>
                <div class="blog-content" style={{ backgroundColor: '#F5F5F5', color: '#333' }}>
                  <span className="date"  style={{color: '#000'}}>December 19, 2022</span>
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
                <Image src={require('../assets/images/blog/blog-3.webp')} alt="blog post" className='w-100' loading="lazy" />
                <div class="blog-content" style={{ backgroundColor: '#F5F5F5', color: '#333' }}>

                  <span className="date"  style={{color: '#000'}}>December 19, 2022</span>
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

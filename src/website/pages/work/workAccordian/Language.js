import React from 'react'
import { Image, Row, Col } from 'react-bootstrap'

const Language = () => {
    return (
        <>
            <p>In Muskaan, language knows no barriers, some children belong to Gond Community, some are Pardhi, some speak Urdu, and some Hindi. We work more with a multi-linguistic approach rather than sticking to a set scale of language. It is more like giving space to them where they could easily express themselves.Hence, it is very important to develop a curriculum that compliments their environment
                and surroundings. That curriculum is followed by different activities and methods which allow brainstorming and broadening their imaginations.</p>

            <h5 className="fst-italic"> Through Story-Telling, Sight-words, and Listening</h5>
            <p>The storytelling session is not confined to reading out stories from books. Children try to assume and add more incidents to the existing story,
                sometimes they form new stories or write their own experiences in any language they know, and those who cannot write, narrate them through their
                drawings or orally.</p>
            <Image src={require('../../../assets/images/7.jpg')} alt="" className='w-20 me-5' />
            <Image src={require('../../../assets/images/8.png')} alt="" className='w-25' />



            <h5 className="fst-italic mt-5">Circle-Time</h5>
            <Row>
                <Col sm={8}>
                    <p>Circle time is conducted once a week in which children get a platform to express their thoughts on different topics like happiness, emotions, family, problems, surroundings, personal experiences, needs and wants, aggression, non-living things, patience, imagination,help, work and more. Right now, they are at an age and environment where reflecting and expressing oneself is difficult,so, this activity helps them tolook out the things minutely with different perspectives. If we will ask them to speak or write on a random topic, they will not speak or write much, but if we give them the topics which they can relate to or which are close to their heart, they express without hesitation, irrespective of language
                    </p>
                </Col>
                <Col sm={4}>
                    <Image src={require('../../../assets/images/6.jpg')} alt="" className='w-75' />
                </Col>
            </Row>


            <h5 className="fst-italic mt-5">Nearby visits to farms and other places-</h5>
            <p>It is one more way to teach them language and create more curiosity. They prepare their own set of questions to be asked during a visit, as a result, they learn new things and relate to them.</p>
            <Row>
                <Col sm={4}>
                    <Image src={require('../../../assets/images/3.jpg')} alt="" className='w-75' />
                </Col>
                <Col sm={4}>
                    <Image src={require('../../../assets/images/4.jpg')} alt="" className='w-75' />
                </Col>
                <Col sm={4}>
                    <Image src={require('../../../assets/images/5.jpg')} alt="" className='w-75' />
                </Col>
            </Row>



            <h5 className="fst-italic mt-5">Working on initial sounds-</h5>
            <Row>
                <Col sm={8}>
                    <p>Small age group children are not familiar with vocabulary and sentences, so it is important to work with the sounds, not through sequential alphabetical sounds, but by using the words which are spoken in their language or whatever they find in their surroundings which help them to retain new words. They draw and speak a few sentences of what they want to express and the teachers write, which makes them
                        understand the different forms of communication also. Engaging them in one-to-one conversations helps them to understand and respond appropriately.
                    </p>
                </Col>
                <Col sm={4}>
                    <Image src={require('../../../assets/images/1.jpg')} alt="" className='w-75' />
                </Col>
            </Row>






            <h5 className="fst-italic mt-5">Woking on Self-Image-</h5>
            <p>
                Self-image plays an important role in the practice of learning something. Learning in a healthy environment is critical for both the mental and physical development of a child. That’s why it is important to know how well a child understands emotions and how well s/he is able to express them in the class. We regularly make them speak on such topics, to boost their self-esteem and confidence.
            </p>
            <a href='https://www.youtube.com/embed/KoiZwiVBd4c?si=BqFkj3oqYW1WZTcD' target='_blank'>Youtube channel to library sessions </a>
            {/* 
            <Row>
                <Col sm={3}>
                    <iframe width="100%" height="250" src="https://www.youtube.com/embed/KoiZwiVBd4c?si=BqFkj3oqYW1WZTcD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <p className='fw-bold main-color'>Enhancing expressions in Children</p>
                </Col>
                <Col sm={3}>
                    <iframe width="100%" height="250" src="https://www.youtube.com/embed/eAkrClR6HcM?si=UnLc6o_igFEeUYcY"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <p className='fw-bold main-color'>Learning to read and write first language</p>
                </Col>
                <Col sm={3}>
                    <iframe width="100%" height="250" src="https://www.youtube.com/embed/OBZbjA5AFrQ?si=zu2q0Vh-Ift5vVrk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <p className='fw-bold main-color'>Understanding Word Order- A multilingual Approach </p>
                </Col>
            </Row> */}
        </>
    )
}

export default Language

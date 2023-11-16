import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BlogCompoent from './BlogCompoent';
const Blog = () => {
    const apiData = [
        {
            imagePath: 'blog1.jpg',
            date: { day: '06', monthYear: 'Jun 2023' },
            title: 'पायल खो गई.',
            content: 'शेफाली जैन मटमैली  धूप,  काई-से  रंग  का आसमान और उसके नीचे काई रंग का ही तालाब, सीमेंट और धूल से रंगे चिथड़े, चिन्दियाँ और बच्चे! क्या यह रंग किसी कलर के डब्बे में मिलेंगे? क्या यह रंग किसी ऐसी किताब में मिलेंगे जो खासकर बच्चों के लिए बनाई गई हो?',
            linkTo: '/communicable/details', // Update the linkTo accordingly
        },

        {
            imagePath: 'blog1.jpg',
            date: { day: '06', monthYear: 'Jun 2023' },
            title: 'पायल खो गई.',
            content: 'शेफाली जैन मटमैली  धूप,  काई-से  रंग  का आसमान और उसके नीचे काई रंग का ही तालाब, सीमेंट और धूल से रंगे चिथड़े, चिन्दियाँ और बच्चे! क्या यह रंग किसी कलर के डब्बे में मिलेंगे? क्या यह रंग किसी ऐसी किताब में मिलेंगे जो खासकर बच्चों के लिए बनाई गई हो?',
            linkTo: '/communicable/details', // Update the linkTo accordingly
        },

        {
            imagePath: 'blog1.jpg',
            date: { day: '06', monthYear: 'Jun 2023' },
            title: 'पायल खो गई.',
            content: 'शेफाली जैन मटमैली  धूप,  काई-से  रंग  का आसमान और उसके नीचे काई रंग का ही तालाब, सीमेंट और धूल से रंगे चिथड़े, चिन्दियाँ और बच्चे! क्या यह रंग किसी कलर के डब्बे में मिलेंगे? क्या यह रंग किसी ऐसी किताब में मिलेंगे जो खासकर बच्चों के लिए बनाई गई हो?',
            linkTo: '/communicable/details', // Update the linkTo accordingly
        },
        // Add more items as needed
    ];
    return (
        <>
            <Container className='mt-5'>
                <Row>
                    {apiData.map((item, index) => (
                        <Col sm={4} className='my-2'>
                            <BlogCompoent key={index} {...item} />
                        </Col>
                    ))}
                </Row>

            </Container>
        </>
    )
}

export default Blog

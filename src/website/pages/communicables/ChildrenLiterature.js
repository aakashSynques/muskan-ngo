

import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BlogCompoent from './BlogCompoent';
const ChildrenLiterature = () => {
    const apiData = [
        {
            imagePath: 'childern.jpg',
            date: { day: '06', monthYear: 'Jun 2023' },
            title: 'रीड अलाउड से पढ़ने की ओर',
            content: 'By नीतू यादव लायब्रेरी  एजुकेटर  कोर्स (एल.ई.सी. 2017) के दौरान मैंने पढ़ने से जुड़ी गतिविधियों के बारे में कई लेख…',
            linkTo: '/communicable/details', // Update the linkTo accordingly
        }
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

export default ChildrenLiterature

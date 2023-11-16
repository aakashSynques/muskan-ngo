
import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BlogCompoent from './BlogCompoent';
const Reflections = () => {
    const apiData = [
        {
            imagePath: 'shiksha.jpg',
            date: { day: '06', monthYear: 'Jun 2023' },
            title: 'शिक्षा का उद्देश्य',
            content: 'लेखक:   शिवानी तनेजा अनुवाद: भरत त्रिपाठी शहरी वंचित समुदायों के सन्दर्भ में राष्ट्रीय पाठ्यचर्या की रूपरेखा 2005 के मुताबिक,…',
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

export default Reflections

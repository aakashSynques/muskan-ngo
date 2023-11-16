

import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BlogCompoent from './BlogCompoent';


const FieldRealities = () => {
    const apiData = [
        {
            imagePath: 'field.jpg',
            date: { day: '06', monthYear: 'Jun 2023' },
            title: 'A grain in an empty bowl: Government services in the urban context',
            content: 'Anganwadis, ICDS and PDS are huge government programmes meant to cater to the health and nutritional requirements of the poor.…',
            linkTo: '/communicable/details', // Update the linkTo accordingly
        },
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
export default FieldRealities







import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BlogCompoent from './BlogCompoent';


const Reports = () => {
    const apiData = [
        {
            imagePath: 'report.jpg',
            date: { day: '06', monthYear: 'Jun 2023' },
            title: 'Petition By Working Adolescents Demanding Attention And Child-Rights Friendly Response From The State On The 29th April 2021, The Eve…',
            content: 'We, as working children’s unions/organisations, demand that all Acts, Policies, Guidelines and Programmes meant to uphold the best interests of…',
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

export default Reports







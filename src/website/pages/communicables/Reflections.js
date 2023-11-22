
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
            {/* <div className='connect-bg fixed-bg'>
                <Container className='text-center text-white'>
                    <h1>Reflections</h1>
                </Container>
            </div>
            <Container className='mt-5'>
                <Row>
                    {apiData.map((item, index) => (
                        <Col sm={4} className='my-2'>
                            <BlogCompoent key={index} {...item} />
                        </Col>
                    ))}
                </Row>

            </Container> */}
            <div className='report-table-font'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Writer(s)</th>
                            <th scope="col">Title       </th>
                            <th scope="col">Year of Publication
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Shivani Taneja and Ragini Lalit</td>
                            <td><a href='https://www.thequint.com/voices/opinion/systemic-discrimination-of-dalits-in-schools-and-the-death-of-education'
                                target='_blank'>Derogation & Isolation: Dalit Students Remain Marginalised Across India
                            </a></td>
                            <td>Published on The Quint on 14/9/22</td>
                        </tr>
                        <tr>
                            <td>महेश झरबड़े  </td>
                            <td><a href='https://publications.azimpremjiuniversity.edu.in/3719/'
                                target='_blank'>स्कूल की भाषा बनाम बच्चे की भाषा बच्चों से सीखना
                            </a></td>
                            <td>Published in Paathshaala Bhitar aur Bahar (12)</td>
                        </tr>
                        <tr>
                            <td>Shivani Taneja</td>
                            <td><a href='#' className='text-black'>Bringing the Last Child into School
                            </a></td>
                            <td>Published in The Learning Curve, August 2020</td>
                        </tr>
                        <tr>
                            <td>Shivani Taneja</td>
                            <td><a href='https://www.eklavya.in/magazine-activity/sandarbh-magazines/255-sandarbh-from-issue-91-to-100/sandarbh-issue-91/938-shiksha-ka-uddeshya'
                                target='_blank'>शिक्षा का उद्देश्य
                            </a></td>
                            <td>Published in Sandarbh - Issue 91 (March-April 2014)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Reflections

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
            {/* <div className='connect-bg fixed-bg'>
                <Container className='text-center text-white'>
                    <h1>Reports</h1>
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
                            <th scope="col">Title
                            </th>
                            <th scope="col">Year of Publication
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Brajesh Verma</td>
                            <td>
                                <a href='#'
                                    className='text-black' > शिक्षा में समुदाय की भागीदारी</a></td>
                            <td>Published in Samuhik Pahal - Vol 2 Issue 12</td>
                        </tr>
                        <tr>
                            <td>Brajesh Verma</td>
                            <td>
                                <a href='#'
                                    className='text-black' > Insights on Education Among the Urban Poor A case Study of Bhopal
                                </a></td>
                            <td>2013 </td>
                        </tr>
                        <tr>
                            <td>Brajesh Verma</td>
                            <td>
                                <a href='#'
                                    className='text-black' > Children on Child-Labour and Schools </a></td>
                            <td>2013 </td>
                        </tr>
                        <tr>
                            <td>Brajesh Verma</td>
                            <td>
                                <a href='#'
                                    className='text-black' > In the Name of Arresting Crime   </a></td>
                            <td>2013 </td>
                        </tr>
                        <tr>
                            <td>Brajesh Verma</td>
                            <td>
                                <a href='#'
                                    className='text-black' > मजल: पारधी समुदाय की परिस्थिति पर एक अध्ययन
                                </a></td>
                            <td>2013 </td>
                        </tr>
                        <tr>
                            <td>Brajesh Verma</td>
                            <td>
                                <a href='#'
                                    className='text-black' > विमुक्त जातियों की स्थिति: बाल अधिकारों पर केन्द्रित
                                </a></td>
                            <td>2013 </td>
                        </tr>
                        <tr>
                            <td>Brajesh Verma</td>
                            <td>
                                <a href='#'
                                    className='text-black' > Hum Bhi Iss Desh Ke Bacche Hain, Hum Bharat Ke Naagrik Hain                                    </a></td>
                            <td>2013 </td>
                        </tr>
                        <tr>
                            <td>Brajesh Verma</td>
                            <td>
                                <a href='#'
                                    className='text-black' > Publication Newsletters    </a></td>
                            <td>November 2022 and September 2020
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Reports







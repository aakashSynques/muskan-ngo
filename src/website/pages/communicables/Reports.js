import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BlogCompoent from './BlogCompoent';
import report1 from '../../assets/pdfFile/Education in Bastis - Bhopal, 2013_compressed.pdf'
import arrestingENG from '../../assets/pdfFile/in the name of arresting crime - english, 2015.pdf'
import arrestingHindi from '../../assets/pdfFile/in the name of arresting crime- hindi, 2015.pdf'
import childrepoert from '../../assets/pdfFile/jan 2018 dnt chn report_compressed.pdf'
import pardhi from '../../assets/pdfFile/Pardhi Report 2018 Hindi_majal_compressed.pdf'


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
                            <td></td>
                            <td>
                                <a href='http://www.concernedforworkingchildren.org/news/2021/04/petition-by-working-adolescents-demanding-attention-and-child-rights-friendly-response-from-the-state-on-the-29th-april-2021-the-eve-of-national-child-labour-day-india/#_ftnref3' target='_blank'
                                 >Petition by working adolescents demanding attention and child-rights friendly response from the State                                    </a></td>
                            <td>Compiled on the 29th April 2021, the eve of National Child Labour Day, India</td>
                        </tr>

                        <tr>
                            <td>Brajesh Verma</td>
                            <td>
                                <a
                                    className='text-black' > शिक्षा में समुदाय की भागीदारी</a></td>
                            <td>Published in Samuhik Pahal - Vol 2 Issue 12</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <a href={report1} target="_blank">Insights on Education Among the Urban Poor A case Study of Bhopal
                                </a></td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <a href='#'
                                    className='text-black' > Children on Child-Labour and Schools </a></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <a href={arrestingENG} target="_blank" > In the Name of Arresting Crime   - ( English ) </a></td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <a href={arrestingHindi} target="_blank" > In the Name of Arresting Crime   - ( Hindi ) </a></td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <a href={pardhi} target="_blank"> मजल: पारधी समुदाय की परिस्थिति पर एक अध्ययन
                                </a></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <a  href={childrepoert} target="_blank" > विमुक्त जातियों की स्थिति: बाल अधिकारों पर केन्द्रित
                                </a></td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <a href='#'
                                    className='text-black' > Hum Bhi Iss Desh Ke Bacche Hain, Hum Bharat Ke Naagrik Hain                                    </a></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
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







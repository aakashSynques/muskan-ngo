

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
            {/* <div className='connect-bg fixed-bg'>
                <Container className='text-center text-white'>
                    <h1>Field Realities</h1>
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
                            <td>Sushma Malviya, Shashikala Narnaware and Gulab Shailoo</td>
                            <td><a href='https://www.eklavya.in/magazine-activity/sandarbh-magazines/643-sandarbh-131-to-140/sandarbh-issue-132/4113-corona-kal-me-bacchon-ki-manosthati-pr-ek-najar'  target='_black'> कोरोना काल में बच्चों की मनोस्थिति पर एक नज़र </a></td>
                            <td>Published in Sandarbh - Issue 132 (Jan-Feb 2021)
                            </td>
                        </tr>
                        <tr>
                            <td>Neelansh Sethi and Heman Oza</td>
                            <td>
                                <a
                                    href='https://www.thecitizen.in/index.php/en/NewsDetail/index/9/20395/Urban-Adivasis-of-Bhopal-Left-to-Struggle-as-Pandemic-Rages--'
                                     target='_black'> Urban adivasis of Bhopal left to struggle as pandemic rages
                                </a></td>
                            <td>Published in The Citizen on 25/5/21
                            </td>
                        </tr>
                        <tr>
                            <td>Heman Oza</td>
                            <td>
                                <a href='https://maktoobmedia.com/2021/05/04/violations-and-violence-everyday-reality-of-denotified-communities-in-india/'  target='_black'>
                                    Violations and Violence: Everyday relaity of denotified communities in India
                                </a></td>
                            <td>Published on Maktoob Media on 4/5/21 </td>
                        </tr>

                        <tr>
                            <td>Maheen Mirza</td>
                            <td>
                                <a href='http://base.d-p-h.info/en/fiches/dph/fiche-dph-8469.html'  target='_black'>
                                    Urban poverty and malnutrition increase in Madhya Pradesh
                                </a></td>
                            <td>Published in May, 2010</td>
                        </tr>

                        <tr>
                            <td>Maheen Mirza</td>
                            <td>
                                <a href='http://base.d-p-h.info/en/fiches/dph/fiche-dph-8470.html'  target='_black'>
                                    Migrating towards Hunger

                                </a></td>
                            <td>Published in May, 2010</td>
                        </tr>

                        <tr>
                            <td>Maheen Mirza</td>
                            <td>
                                <a href='http://base.d-p-h.info/en/fiches/dph/fiche-dph-8471.html'  target='_black'>
                                    Biscuits for breakfast: Empty calories for the hungry poor
                                </a></td>
                            <td>Published in May, 2010</td>
                        </tr>

                        <tr>
                            <td>Maheen Mirza</td>
                            <td>
                                <a href='http://base.d-p-h.info/en/fiches/dph/fiche-dph-8461.html'  target='_black'>
                                    A grain in an empty bowl: Government services in the urban context

                                </a></td>
                            <td>Published in May, 2010</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    )
}
export default FieldRealities







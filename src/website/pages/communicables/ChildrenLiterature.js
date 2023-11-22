

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
            {/* <div className='connect-bg fixed-bg'>
                <Container className='text-center text-white'>
                    <h1>Children's  Literature</h1>
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
                            <td>Seminar Report</td>
                            <td><a href='https://www.india-seminar.com/2022/751/751-Pardhis1.htm'
                                target='_blank'>Where is My Story: Crossing the Margins in Children's Literature
                            </a></td>
                            <td>Report of the Seminar on Diverse Children's Literature held in Bhopal in August 2019</td>
                        </tr>

                        <tr>
                            <td>Shivani Taneja and Ragini Lalit</td>
                            <td><a href='https://www.thebookreviewindia.org/stories-for-a-more-humane-world/'
                                target='_blank'>Stories for a more Humane World
                            </a></td>
                            <td>Published in The Book Review - November 2022 Issue</td>
                        </tr>

                        <tr>
                            <td>Brajesh Verma</td>
                            <td><a href='https://www.eklavya.in/pdfs/Sandarbh/Sandarbh_139/59-65_Stories_Breaking_the_Genders_Grip.pdf'
                                target='_blank'>जेंडर की जकड़न को तोड़ती कहानियाँ
                            </a></td>
                            <td>Published in Sandarbh - Issue 139 (March- April 2022)</td>
                        </tr>
                        <tr>
                            <td>नीतू यादव</td>
                            <td><a href='https://www.eklavya.in/magazine-activity/sandarbh-magazines/641-sandarbh-131-to-140/sandarbh-issue-131/4106-ek-kahani-kai-vichar' target='_blank'>एक कहानी कई विचार
                            </a></td>
                            <td>Published in Sandarbh - Issue 139 (March- April 2022)</td>
                        </tr>
                        <tr>
                            <td>महेश झरबड़े  </td>
                            <td>
                                <a href='https://www.eklavya.in/magazine-activity/sandarbh-magazines/662-sandarbh-131-to-140/sandarbh-issue-137-nov-dec-2021'
                                    target='_blank'>सामाजिक बदलाव का माध्यम हैं कहानियाँ
                                </a></td>
                            <td>Published in Sandarbh -Issue 137 (Nov-Dec 2021)</td>
                        </tr>
                        <tr>
                            <td>नीतू यादव</td>
                            <td>
                                <a href='https://azimpremjiuniversity.edu.in/publications/2021/magazine/pathshala-bheetar-aur-bahar-issue-7'
                                    target='_blank'>पढो-रखो श्रंखला: एक खास पुस्तक संग्रह
                                </a></td>
                            <td>Published in Paathshaala Bhitar aur Bahar (7) - March 2021</td>
                        </tr>
                        <tr>
                            <td>नीतू यादव</td>
                            <td>
                                <a href='https://www.eklavya.in/magazine-activity/sandarbh-magazines/613-sandarbh-121-to-130/sandarbh-issue-126/3591-pustkalaya-me-display-ka-mehatva'
                                    target='_blank'>पुस्तकालय में डिस्प्ले का महत्व
                                </a></td>
                            <td>Published in Sandarbh  - Issue 126 (Jan-Feb 2020)</td>
                        </tr>
                        <tr>
                            <td>नीतू यादव</td>
                            <td>
                                <a href='https://www.eklavya.in/magazine-activity/sandarbh-magazines/584-sandarbh-111-to-120/sandarbh-issue-120/3204-read-allowed-se-padhne-ki-or'
                                    target='_blank'>रीड अलाउड से पढ़ने की ओर
                                </a></td>
                            <td>Published in Sandarbh -Issue 120 (Jan-Feb 2019)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ChildrenLiterature

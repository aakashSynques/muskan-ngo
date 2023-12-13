import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BlogCompoent from './BlogCompoent';
const ClassRoom = () => {
    const apiData = [
        {
            imagePath: 'classroom.jpg',
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
                    <h1>     Classroom Experiences</h1>
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
                <table className="table table-responsive">
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
                            <td>Rubina Khan and Mahesh Jharbade</td>
                            <td><a href='https://azimpremjiuniversity.edu.in/publications/2022/magazine/pathshala-bheetar-aur-bahar-issue-11'
                                target='_blank'>जीवन में गणित                             </a></td>
                            <td>Published in Pathshala Bheetar aur Bahar Issue 11 (March 2022)</td>
                        </tr>
                        <tr>
                            <td>बृजेश बर्मा और सविता सोहित</td>
                            <td><a href='https://issuu.com/wiprofoundation/docs/samuhik_pahal_vol_2_issue_5'
                                target='_blank'>स्कूल को बच्चों के अनुरूप ढालने का एक अनुभव: जीवन शिक्षा पहल
                            </a></td>
                            <td>Published in Samuhik Pahal - Vol 2 Issue 5 (January 2022)</td>
                        </tr>
                        <tr>
                            <td>रुबीना खान </td>
                            <td><a href='https://www.eklavya.in/magazine-activity/sandarbh-magazines/585-sandarbh-111-to-120/sandarbh-issue-119/3222-bazar-aur-baccho-ko-sheekhna'
                                target='_blank'>बाज़ार और बच्चों का सीखना
                            </a></td>
                            <td>Sandarbh - Issue 119 (Nov-Dec 2018)</td>
                        </tr>
                        <tr>
                            <td>लक्ष्मी यादव</td>
                            <td><a href='https://www.eklavya.in/magazine-activity/sandarbh-magazines/540-sandarbh-111-to-120/sandarbh-issue-117/3212-basti-learning-center-me-ek-bacche-ka-safar'
                                target='_blank'>बस्ती लर्निंग सेंटर में एक बच्चे का सफर
                            </a></td>
                            <td>Published in Sandarbh - Issue 117 (July-August 2018)</td>
                        </tr>
                        <tr>
                            <td>महेश झरबड़े </td>
                            <td><a href='https://www.eklavya.in/magazine-activity/sandarbh-magazines/487-sandarbh-111-to-120/sandarbh-issue-111/1860-baccho-ke-bich-akhbar-ke-sath-kuch-gatividhiyan'
                                target='_blank'>बच्चों के बीच अखबार के साथ कुछ गतिविधियाँ
                            </a></td>
                            <td>Published in Sandarbh - Issue 111 (July-Aug 2017)</td>
                        </tr>
                        <tr>
                            <td>कमल किशोर मालवीय</td>
                            <td><a href='https://www.eklavya.in/magazine-activity/sandarbh-magazines/483-sandarbh-101-to-110/sandarbh-issue-110/1842-chah-saal-ki-chokri'
                                target='_blank'>छह साल की छोकरी
                            </a></td>
                            <td>Published in Sandarbh - Issue 110 (May-June 2017)</td>
                        </tr>
                        <tr>
                            <td>ब्रजेश वर्मा</td>
                            <td><a href='https://www.eklavya.in/magazine-activity/sandarbh-magazines/331-sandarbh-101-to-110/sandarbh-issue-106/1486-golu-ne-padhna-sikha'
                                target='_blank'>गोलू ने पढ़ना सीखा
                            </a></td>
                            <td>Sandarbh - Issue 106 (Sep-Oct 2016)</td>
                        </tr>
                        <tr>
                            <td>कमल किशोर मालवीय</td>
                            <td><a href='https://www.eklavya.in/magazine-activity/sandarbh-magazines/321-sandarbh-101-to-110/sandarbh-issue-1004/1382-chlate-chalte'
                                target='_blank'>चलते-चलते
                            </a></td>
                            <td>Sandarbh - Issue 106 (Sep-Oct 2016)</td>
                        </tr>
                        <tr>
                            <td>Savita Sohit and Shivani Taneja</td>
                            <td><a href='https://www.eklavya.in/magazine-activity/sandarbh-magazines/304-sandarbh-101-to-110/sandarbh-issue-102/1225-bahubhshi-kaksha-me-vyakran-ke-niyamo-ko-dhundna'
                                target='_blank'>बहुभाषीय कक्षा में व्याकरण के नियमों को ढूँढ़ना
                            </a></td>
                            <td>Published in Sandarbh - Issue 102 (Jan-Feb 2016)</td>
                        </tr>
                        <tr>
                            <td>Jayasree Subramanian & Brajesh Verma</td>
                            <td><a href='#' className='text-black'>Introducing fractions using share and measure interpretations: A report from classroom trials
                            </a></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>महेश झरबड़े </td>
                            <td><a href='https://www.eklavya.in/magazine-activity/sandarbh-magazines/251-sandarbh-from-issue-81-to-90/sandarbh-issue-89/967-baccho-ke-nam-bhi-rochak-tlm' target='_blank'>बच्चों के नाम भी हैं रोचक टीएलएम
                            </a></td>
                            <td>Published in Sandarbh - Issue 89 (November-December 2013)</td>
                        </tr>
                        <tr>
                            <td>महेश झरबड़े </td>
                            <td><a href='https://www.eklavya.in/magazine-activity/sandarbh-magazines/191-sandarbh-from-issue-81-to-90/sandarbh-issue-82/543-safarnama-ek-baal-akhvaar-ka' target='_blank'>
                                सफरनामा: एक बाल अखबार का
                            </a></td>
                            <td>Published in Sandarbh - Issue 82 (July-October 2012)</td>
                        </tr>
                        <tr>
                            <td>Shivani Taneja</td>
                            <td><a href='https://www.eklavya.in/magazine-activity/sandarbh-magazines/281-sandarbh-from-issue-71-to-80/sandarbh-issue-75/1046-english-reader-kin-manko-per-hain-khari' target='_blank'>
                                इंग्लिश रीडर किन मानकों पर है खरी
                            </a></td>
                            <td>Published in Sandarbh - Issue 75 (May-June 2011)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ClassRoom

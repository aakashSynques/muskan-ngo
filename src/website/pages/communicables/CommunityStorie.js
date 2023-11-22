// import React from 'react'

// const CommunityStorie = () => {
//   return (
//     <>

//     </>
//   )
// }

// export default CommunityStorie


import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BlogCompoent from './BlogCompoent';
const CommunityStorie = () => {
    const apiData = [
        {
            imagePath: 'communicaty.jpg',
            date: { day: '06', monthYear: 'Jun 2023' },
            title: 'Ekjutta Divas: DNT-NT Communities Show Solidarity in the Face of State Violence',
            content: 'At a recent even in Bhopal, members of the two communities talked about how they are regularly rounded up en…',
            linkTo: '/communicable/details', // Update the linkTo accordingly
        }
    ];
    return (
        <>
            {/* <div className='connect-bg fixed-bg'>
                <Container className='text-center text-white'>
                    <h1>Community Stories</h1>
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
                            <td>
                                Manjana, Kareena, Aanam, Jyoteshwari, and Saanish from Pardhi Youth Collective,
                                Majal, Bhopal</td>
                            <td><a href='https://www.india-seminar.com/2022/751/751-Pardhis1.htm' target='_blank'> We Won't Sit Quietly: Pardhi Women Demand Justice
                            </a></td>
                            <td>Published in Seminar Issue 751 - March 2022</td>
                        </tr>
                        <tr>
                            <td>Malkin, Saanish and Tasveer with inputs from Dhruva Desai, Heman Oza</td>
                            <td><a href='https://thewire.in/rights/ekjutta-divas-dnt-nt-communities-bhopal' target='_blank'>Ek jutta Divas: DNT-NT Communities Show Solidarity in the Face of State Violence
                            </a></td>
                            <td>Published on The Wire on 27/1/2021</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default CommunityStorie

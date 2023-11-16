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

export default CommunityStorie

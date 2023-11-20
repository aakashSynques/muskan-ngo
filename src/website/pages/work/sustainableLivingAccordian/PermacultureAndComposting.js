import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'

const PermacultureAndComposting = () => {
  return (
        <>
          <Row>
            <Col sm={6}>
            <Image src={require('../../../assets/images/permaculture.jpg')} alt="" className='w-100' />

            </Col>
            <Col sm={6}>
                <p>In three bastis of Bhopal, the process of making compost through kitchen waste is being carried out. The people of Bastis have made a compost pit in which every household dumps their kitchen waste along with the dry leaves. The dry leaves are being dumped so that it doesn’t smell. The monitoring of this whole process is being done under the leadership of youths of the community. In two-three months waste changes its form into compost and then it is ensured that it gets dried and filtered to turn it into small particles.</p>
                <p>The community is also practicing vegetable and kitchen gardens within the bastis and compost is being used in these gardens. It completely creates a circular economy and leads a path towards sustainable living. We try to sell it through different fairs that exhibit organic products, and also try to connect with local farmers as the idea is to promote sustainable living.</p>
            </Col>
          </Row>
        </>
  )
}

export default PermacultureAndComposting
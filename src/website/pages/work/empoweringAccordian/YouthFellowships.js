import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'

const YouthFellowships = () => {
    return (
        <>
            <Row>
                <Col sm={6}>
                    <Image src={require('../../../assets/images/youth.jpg')} alt="" className='w-100' />
                </Col>
                <Col sm={6}>
                    <p>The children in the vulnerable communities are expected to start earning and providing for the family right from an early age. Several children have also picked up a fight with their families in order to keep up with their studies. Even when they fight and continue their studies, it is very difficult to manage individual expenses.</p>
                    <p>We feel that in order to ensure that first generation learners in several communities can keep on their studies, it is important that they are provided with a little fellowship amount that can help them to manage their own expenses if not be able to provide for the family. This also works as a motivation for several children to not turn to scrap collection and focus on their studies. Several young people who have been married in their early ages and are still willing to continue their education, do so through this sort of fellowship as they study alongside working on things of their interest and in their respective communities. For example, someone coaches a frisbee team, someone engages with children in theatrical activities, someone runs library centers with younger children, etc.</p>
                </Col>
            </Row>
            <p>This becomes a little financial assistance for young people to pursue their education and also keep going forward towards the dream for the upward socio-economic mobility of their respective communities.</p>

        </>
    )
}

export default YouthFellowships
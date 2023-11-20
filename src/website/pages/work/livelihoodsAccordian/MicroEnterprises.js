import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'

const MicroEnterprises = () => {
    return (
        <>

            <p>Vulnerable communities are often at the lower rung of the socio-economic ladder and with the brunt of the pandemic, the economic conditions and social conditions had further hit the communities drastically. The communities with whom we work in the district of Bhopal were in a similar state of despair. During both the lockdowns and the subsequent lifting of the lockdown, the tribal and de-notified tribes of Bhopal were left with almost no source of income as the informal economy had become staggered due the pandemic. Essentially the survival of people was in question due to the pandemic, but with lack of all the social, economic and welfare based coping resources/mechanisms, the situation was worse for such communities.</p>
            <Row>
                <Col sm={6}>
                    <Image src={require('../../../assets/images/micro.jpg')} alt="muskaan" className='w-100' />
                </Col>
                <Col sm={6}>
                    <p>During this phase, we started small scale interventions with individuals from the community who were in the worst possible conditions. Small support or financial assistance were provided to individuals that can support their home-based micro enterprise which can be initiated with little investment and can avail a stable source of income to the individual to sustain their families.</p>
                    <p>People had initiated a range of such micro enterprises where some people commenced their home-based ration shops, some started stalls of food whereas some people opened up their mobile phone repairing shops. Some of these shops became a source of income for the individuals during that phase whereas several people continued it and are now sustaining based on that initiative.</p>
                    <p>Several of these individuals who were financially assisted have now started to return the parts of the amount that they were availed as loan with zero percentage interest and without a pressure to return timely and specific installments for the same.</p>
                </Col>
            </Row>
            <p>The mechanism to identify the individuals who were in a state of absolute despair during the pandemic was done through the assistance of Shahri Mazdoor Sangathan and the karyakarnis of the sangathan within the basti. Karyakranis became the most authentic point of contact and engaged in this process with tireless commitment during the pandemic to ensure that the socio-economic vulnerability does not take the lives of people furthermore than the already devastating impact that the pandemic had been causing.</p>
        </>
    )
}

export default MicroEnterprises
import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'

const DocumentsAndEntitlements = () => {
  return (
        <>
            <Row>
                <Col sm={6}>
                <Image src={require('../../../assets/images/entitlements..jpg')} alt="" className='w-100' />

                </Col>
                <Col sm={6}>
                <p>The trauma with which vulnerable communities live is often layered and complex. Trauma also stems from diverse spaces and people and impacts differently at an individual level, community level and at the organizational level as well. At Muskaan, the community with whom we work lives with the range of issues from violence at the hands of institutional stakeholders (police, teachers in school, etc.) to violence at home (husband beating up wife or parents beating children) to neglect, ignorance, fights, usage of substance, addiction, etc. This also creates a loop of traumatizing memories that keeps surfacing.</p>

<p>With the tribal and de-notified tribes with whom we engage, the situation is similar. However, the issue of documents and entitlements which are of utmost importance, stand in a way as a big hurdle for the communities. Documents like Aadhar card, Ration card, Ayushmaan card, Birth certificate, Death certificate, Caste certificate, etc. ensures food and nutrition, schooling and education, healthcare, pension, financial relief, etc. However, most of the people in the community either lack these documents or have errors in them.</p>

                </Col>
            </Row>
            <p>As the people in the department also do not make the mechanism to rectify the errors very accessible, the people in the community struggle with the void. These things are fundamental for survival and lack of documents to access these makes the community helpless.</p>
            <p>These issues are also necessary to address and thereby Muskaan attempts to ensure that these errors can be rectified and essential documents and entitlements can be appropriately made.</p>
        </>
  )
}

export default DocumentsAndEntitlements
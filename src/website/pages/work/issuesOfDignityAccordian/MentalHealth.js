import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'

const MentalHealth = () => {
  return (
    <>
    <p>The trauma with which vulnerable communities live is often layered and complex. Trauma also stems from diverse spaces and people and impacts differently at an individual level, community level and at the organizational level as well. At Muskaan, the community with whom we work lives with the range of issues from violence at the hands of institutional stakeholders (police, teachers in school, etc.) to violence at home (husband beating up wife or parents beating children) to neglect, ignorance, fights, usage of substance, addiction, etc. This also creates a loop of traumatizing memories that keeps surfacing.</p>
        <Row>
            <Col sm={6}>
            <Image src={require('../../../assets/images/mental.jpg')} alt="" className='w-100' />

            </Col>
            <Col sm={6}>
                <p>In several of these communities and more so among the De-notified tribes who carry a stigma of criminality, one can evidently sense the vulnerability. There have been several instances of people taking their own lives and most of the people have attempted suicide and almost everyone has been through suicide ideation. This includes everyone irrespective of age and gender as men, women and children between the age of 10 to 70 years have attempted suicide.</p>
                <p>Amidst such horrifying realities, we at Muskaan try to de-escalate the frequency of such realities in diverse ways. Our Mental Health team engages with the communities through dance and movement therapy (DMT) and attempts to create a space to express the experiences of trauma and break the denial. The team also engages with youth groups and children’s groups through DMT sessions. Along with this, there are barefoot counselors who are essentially a group of women from different communities and work as neighborhood counselors in their communities and localities. Muskaan’s Mental Health team directly works with basti counsellors who then do individual counseling and group sessions in their localities. As the barefoot basti counselors are also from the community, they very well understand the complex and layered realities and trauma with which their community lives and thereby can also counsel from the point of sensitivity.</p>
            </Col>
        </Row>
        <p>The Mental Health team has also been conducting a research study by interviewing young men and women from 4 different De-notified tribes. The study intends to indulge into miniscule details that can be helpful in understanding Adverse Childhood Experiences (ACE) and where those experiences stem from and how it impacts the way in which one conducts oneself. The suicidal tendencies and the trauma with which one lives, is essential to be understood when several communities have also been carrying a trauma pertaining to historical injustice based on their identity.</p>

        <p>The team also engages in individual counseling within the organization and at the community level too. The team works with men, women, children, youth and adolescents in the community intensively.</p>

    </>
  )
}

export default MentalHealth
import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'

const Theatre = () => {
    return (
        <>
            <Row>
                <Col sm={6}>
                    <Image src={require('../../../assets/images/therter.png')} alt="muskaan" className='w-100' />

                </Col>
                <Col sm={6}>
                    <p>Theatre gives the space to express emotions and it is true in the sense that it also helps to overcome the feeling of fear, guilt, anger, anxiety, and discrimination. Lots of youth of the community explored themselves through theatre and are now living it. It has become an effective tool to demonstrate community issues and problems they are facing.</p>
                    <p>It is also an encouraging move for youth from DNT communities (especially Pardhi and Kanjar community) to participate and learn this art form. Two such Pardhi youth Jeenu and Preeti took training from a Kolkata based theatre group – Jansanskriti, and they are now training other children of the different communities. Few youths were given the fellowship and exposure visits to other groups like Buddhan Theatre, and they have now formed their own theatre group. Around 14 students have taken training from GIZ Theatre, Germany in collaboration with Bodh Gaya Theatre, Bihar.</p>

                </Col>
            </Row>
            <p>It has enhanced their confidence and has given them an opportunity to exchange dialogue on the issues with the community and a large audience. They are also harmonizing with other communities thereby removing the obstacles of caste and gender discrimination. They do not hide their identity anymore now, instead, put efforts to make it much stronger. Small children are also developing their interest, they are eager to learn this diversified art form and are taking initiatives to script new plays, a play on domestic violence was prepared by the group of children after learning from the youth group. They are also preparing and doing plays on saving the environment. They also visit different villages and localities and perform whilst engaging in a dialogue. These performances also attempt to break or address the gender biases and the patriarchal norms.</p>
            <p><strong>One should keep Going-</strong></p>
            <p>Keeping a deeper vision is all which keeps them excited. They are now planning to conduct a drama or a powerful act on a larger level to demonstrate the roots of old customs and traditions that are causing or perpetuating several social evils. Along with it, they are making an immense effort to develop leadership quality among themselves to take everyone together in their journey.</p>
            <p>Whether speaking out the emotions or showcasing one’s art, theatre helps with it all.The youth are now able to identify their skills and now see themselves as an artist!</p>

        </>
    )
}

export default Theatre
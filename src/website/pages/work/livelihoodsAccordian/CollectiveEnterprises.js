import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'

const CollectiveEnterprises = () => {
    return (
        <>
            <p>The primary occupation of the community with whom we engage is scrap collection. But since the door to door service of waste collection was introduced by the government the earnings of the informal scrap collectors reduced drastically. Then in 2020 lockdown was imposed which badly affected the work of the people as it made their lives more miserable. In this situation of crisis collective enterprises at the community level was seen as a way to promote independent economic agency for the girls and women. It was the need of the hour to have an alternative source of income in order to have a security net to the families.</p>
            <Row>
                <Col sm={6}>
                    <Image src={require('../../../assets/images/collective.jpg')} alt="muskaan" className='w-100' />
                </Col>
                <Col sm={6}>
                    <p>Since the first lockdown (2020) was upheld Muskaan has supported two groups to be collective enterprises; one being involved in making hand-made diaries while the other group makes hand-made soaps.</p>
                    <p>Muskaan organized training sessions on making handmade diaries. It was done through collectivising the girls and women of Pardhi community residing in Ahsaan Nagar slum and a group of 10 members was created. In the year 2020, more members have been added to the group and have learned a skill of making diaries. It has taken a lot of personal perseverance for each one of the members of the groups to imagine that there could be another source of income than scrap collection.</p>
                    <p>In its first year of existence the group was successful in making profits and the members had an alternative source of income which aided them to support their families financially. Along with this leadership among the group is being created and nurtured as well.</p>

                </Col>
            </Row>
            <p>The Youth group which is involved in manufacturing hand-made bathing soaps consists of 14 members who belong to urban adivasi communities. After the 2020 lockdown, youth of the communities were under pressure to support their families financially. So they looked at making soaps as an opportunity to learn a new skill and develop a source of income out of it. In the year 2020 the group continued with making soaps and added more skills to their armoury like packaging. Bath soaps are in different variants as Neem, Multani Mitti, Mint, Rose, Aloe Vera, and Lavender. Presently the products are marketed through fairs, exhibitions and trying to connect with local shops as well.</p>
            <p>Along with this they also started practicing saving a small amount of profit which can be used in emergency alongside expanding their activities/ and investing that amount in developing/learning new skills which will aid them in diversifying their products.</p>
            <p>Both the groups are still informal but are aspiring to be profit enterprises and become sustainable businesses.</p>
        </>
    )
}

export default CollectiveEnterprises
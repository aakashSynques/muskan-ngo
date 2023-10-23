import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const ShopNowItem = () => {
    return (
        <section className="bg-light py-5 mt-5">
            <Container>
                <Row>
                    <Col lg={12} className="text-center section-title">
                        <h2>Shop Now</h2>
                        <p></p>
                    </Col>
                    <Col lg={4} className="padding-15 pstn-relative">
                        <Image src="http://demo1.q4hosting.com/muskaan-template/images/img-1.jpg" fluid alt="Books" />
                        <h3 className="img-text">Books</h3>
                    </Col>
                    <Col lg={4} className="padding-15 pstn-relative">
                        <Image src="http://demo1.q4hosting.com/muskaan-template/images/img-2.jpg" fluid alt="Diaries" />
                        <h3 className="img-text">Diaries</h3>
                    </Col>
                    <Col lg={4} className="padding-15 pstn-relative">
                        <Image src="http://demo1.q4hosting.com/muskaan-template/images/img-3.jpg" fluid alt="Face Masks" />
                        <h3 className="img-text">Face Masks</h3>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ShopNowItem;

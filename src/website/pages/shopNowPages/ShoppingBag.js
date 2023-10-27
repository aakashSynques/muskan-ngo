import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'

const ShoppingBag = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col sm={8} className='r-border pr-4'>
                        <Row className='mt-2 pb-2 border-b'>
                            <Col sm={5}>
                                <b> Product Name</b>
                            </Col>
                            <Col sm={3}>
                                <b>Unit Price</b>
                            </Col>
                            <Col sm={2}>
                                <b>Quantity</b>
                            </Col>
                            <Col sm={1}>
                                <b>SubTotal</b>
                            </Col>
                            <Col sm={1}>
                            </Col>
                        </Row>

                        <Row className='py-4 border-b'>
                            <Col sm={5}>
                                <Row>
                                    <Col sm={3}>
                                        <img src='https://store.muskaan.org/wp-content/uploads/2021/11/41-300x300.png' alt="" className='w-100' />
                                    </Col>
                                    <Col sm={9} className='pt-3'> <p>Basti mein Chor / thief in the Basti</p></Col>
                                </Row>
                            </Col>
                            <Col sm={3} className='pt-4'>
                                <span className='main-color'><i className="fa fa-inr"></i> 200.00
                                </span> &nbsp;
                                <font size="1" className="text-secondary">
                                    <del><i className="fa fa-inr"></i> 250.00</del>
                                </font>
                            </Col>
                            <Col sm={2} className='pt-4'>
                                <button className='btn p-0 font-14'> - </button>
                                <span className='px-3'> 4 </span>
                                <button className='btn p-0'>  + </button>
                            </Col>
                            <Col sm={1} className='pt-4'>
                                <font >250.00</font>
                            </Col>
                            <Col sm={1} className='pt-4'>
                                <button className='btn'> <i class="fa fa-times" aria-hidden="true"></i> </button>
                            </Col>
                        </Row>

                        <Row className='py-4 border-b'>
                            <Col sm={5}>
                                <Row>
                                    <Col sm={3}>
                                        <img src='https://store.muskaan.org/wp-content/uploads/2021/11/41-300x300.png' alt="" className='w-100' />
                                    </Col>
                                    <Col sm={9} className='pt-3'> <p>Basti mein Chor / thief in the Basti</p></Col>
                                </Row>
                            </Col>
                            <Col sm={3} className='pt-4'>
                                <span className='main-color'><i className="fa fa-inr"></i> 200.00
                                </span> &nbsp;
                                <font size="1" className="text-secondary">
                                    <del><i className="fa fa-inr"></i> 250.00</del>
                                </font>
                            </Col>
                            <Col sm={2} className='pt-4'>
                                <button className='btn p-0 font-14'> - </button>
                                <span className='px-3'> 4 </span>
                                <button className='btn p-0'>  + </button>
                            </Col>
                            <Col sm={1} className='pt-4'>
                                <font >250.00</font>
                            </Col>
                            <Col sm={1} className='pt-4'>
                                <button className='btn'> <i class="fa fa-times" aria-hidden="true"></i> </button>
                            </Col>
                        </Row>
                        <br /> <br />
                    </Col>

                    <Col sm={4} className='px-4'>
                        <div className='mt-2'>
                            <h6 className='main-color f-w-8'><b>CART TOTALS</b></h6>
                            <table className='table'>
                                <tbody>
                                    <tr className='py-3'>
                                        <td>Subtotal</td>
                                        <td className='text-end'><i className="fa fa-inr"></i> 50.00</td>
                                    </tr>
                                    <tr className='py-3'>
                                        <td>Total</td>
                                        <td className='text-end main-color' style={{ color: '#a20401' }}><i className="fa fa-inr"></i> 50.00</td>
                                    </tr>
                                </tbody>
                            </table>
                            <Button className='btn btn-danger w-100 mt-3'>
                                Proceed to checkout</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ShoppingBag

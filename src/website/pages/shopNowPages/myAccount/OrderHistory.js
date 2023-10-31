import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MyAccountSideBar from './MyAccoutSideBar'
import { Link } from 'react-router-dom'

const OrderHistory = () => {
    return (
        <>
            <hr />
            <Container>
                <font> Home › My Accoun › Order History</font>
                <Row className='pt-5'>
                    <Col sm={9} className='pe-5'>
                        <h3 className=' pb-2  text-uppercase main-color'>Order History</h3>
                        <p className='pb-1 border-bottom' >chek the status of recent orders, manage return, and discover similer products</p>

                        <h6 className='f-w-6 mt-1 pb-3'>Orders History</h6>


                        <Row className='py-3 my-3' style={{ boxShadow: "0px 2px 6px 1px #736e6d69" }}>
                            <Col sm={2} className='px-4'>
                                <img src='https://store.muskaan.org/wp-content/uploads/2021/11/41-300x300.png' alt="" className='w-100' />
                            </Col>
                            <Col sm={7}>
                                <p className='m-0 f-w-6 mb-2'>Basti mein Chor / thief in the Basti</p>
                                <span className='font-14'>Qty : 3</span> <br />
                                <span className='font-14'>Order Id : 328342340</span>
                                <p className='m-0 font-14'> Delivered on :  20/12/2023</p>
                            </Col>
                            <Col sm={3}>
                                <p className='f-w-6'>Rs. 500</p>
                                <div className='pt-5'>
                                    <Link to="" className='main-color'>View Product</Link> | <Link to="" className='main-color'>Buy Again</Link>
                                </div>
                            </Col>

                        </Row>

                        <Row className='py-3 my-3' style={{ boxShadow: "0px 2px 6px 1px #736e6d69" }}>
                            <Col sm={2} className='px-4'>
                                <img src='https://store.muskaan.org/wp-content/uploads/2021/11/41-300x300.png' alt="" className='w-100' />
                            </Col>
                            <Col sm={7}>
                                <p className='m-0 f-w-6 mb-2'>Basti mein Chor / thief in the Basti</p>
                                <span className='font-14'>Qty : 3</span> <br />
                                <span className='font-14'>Order Id : 328342340</span>
                                <p className='m-0 font-14'> Delivered on :  20/12/2023</p>
                            </Col>
                            <Col sm={3}>
                                <p className='f-w-6'>Rs. 500</p>
                                <div className='pt-5'>
                                    <Link to="" className='main-color'>View Product</Link> | <Link to="" className='main-color'>Buy Again</Link>
                                </div>
                            </Col>

                        </Row>


                    </Col>
                    <Col sm={3}>
                        <MyAccountSideBar />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default OrderHistory

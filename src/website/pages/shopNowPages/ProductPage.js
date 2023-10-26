import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import FilterSideNav from './FilterSideNav';

const ProductPage = () => {
    return (
        <>
            {/* <div className='product-banner'>
                <Image src={require('../../assets/images/produtBanner.png')} alt="blog post" className='w-100' />
            </div> */}
            <hr />

            <Container className='py-5'>
                <Row>
                    <Col sm={3} style={{ borderRight: "1px solid #dddddd" }} className='px-5'>
                        <h4><b>Filter</b> </h4>
                        <Col sm={12} className='pt-2'>
                            <FilterSideNav />
                        </Col>
                    </Col>

                    <Col sm={9}>
                        <h4><b>English Graded Readers</b> </h4>
                        <Row className='pt-3'>
                            <Col sm={3} className='pb-5'>
                                <div className='product-item'>
                                    <Link to="/product/details">
                                        <img src='https://store.muskaan.org/wp-content/uploads/2021/11/47-300x300.png' alt="" className='w-100' />
                                    </Link>
                                    <div>
                                        <p className='m-0 pt-3'>Somaru Misses Home</p>
                                        <span>  <i class="fa fa-inr"></i> 200.00</span>
                                        <span className='pull-right'><i class="fa fa-star five-star" aria-hidden="true"></i>
                                            <i class="fa fa-star five-star" aria-hidden="true"></i>
                                            <i class="fa fa-star five-star" aria-hidden="true"></i>
                                            <i class="fa fa-star five-star" aria-hidden="true"></i></span>
                                        <br />

                                        <hr className='my-2' style={{ color: "gray" }} />
                                        <font>
                                            <span className='pull-left'><a href='#' className='font-14 text-dark'>+ Add To Cart</a></span>
                                            <span className='pull-right'><i class="fa fa-heart-o" aria-hidden="true"></i></span>
                                        </font>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={3} className='pb-5'>
                                <div className='product-item'>
                                    <Link to="/product/details">
                                        <img src='https://store.muskaan.org/wp-content/uploads/2021/11/45-300x300.png' alt="" className='w-100' />
                                    </Link>
                                    <div>
                                        <p className='m-0 pt-3'>Somaru Misses Home</p>
                                        <span>  <i class="fa fa-inr"></i> 200.00</span>
                                        <span className='pull-right'>
                                            <i class="fa fa-star five-star" aria-hidden="true"></i>
                                            <i class="fa fa-star five-star" aria-hidden="true"></i>
                                            <i class="fa fa-star five-star" aria-hidden="true"></i>
                                            <i class="fa fa-star five-star" aria-hidden="true"></i>
                                            <i class="fa fa-star five-star" aria-hidden="true"></i>
                                        </span>
                                        <br />

                                        <hr className='my-2' style={{ color: "gray" }} />
                                        <font>
                                            <span className='pull-left'><a href='#' className='font-14 text-dark'>+ Add To Cart</a></span>
                                            <span className='pull-right'><i class="fa fa-heart-o" aria-hidden="true"></i></span>
                                        </font>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={3} className='pb-5'>
                                <div className='product-item'>
                                    <Link to="/product/details">
                                        <img src='https://store.muskaan.org/wp-content/uploads/2021/11/54-300x300.png' alt="" className='w-100' />
                                    </Link>
                                    <div>
                                        <p className='m-0 pt-3'>Somaru Misses Home</p>
                                        <span>  <i class="fa fa-inr"></i> 200.00</span>
                                        <span className='pull-right'><i class="fa fa-star five-star" aria-hidden="true"></i>
                                            <i class="fa fa-star five-star" aria-hidden="true"></i>
                                            <i class="fa fa-star five-star" aria-hidden="true"></i>
                                            <i class="fa fa-star five-star" aria-hidden="true"></i></span>
                                        <br />

                                        <hr className='my-2' style={{ color: "gray" }} />
                                        <font>
                                            <span className='pull-left'><a href='#' className='font-14 text-dark'>+ Add To Cart</a></span>
                                            <span className='pull-right'><i class="fa fa-heart-o" aria-hidden="true"></i></span>
                                        </font>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={3} className='pb-5'>
                                <div className='product-item'>
                                    <Link to="/product/details">
                                        <img src='https://store.muskaan.org/wp-content/uploads/2021/11/41-300x300.png' alt="" className='w-100' />
                                    </Link>
                                    <div>
                                        <p className='m-0 pt-3'>Somaru Misses Home</p>
                                        <span>  <i class="fa fa-inr"></i> 200.00</span>
                                        <span className='pull-right'><i class="fa fa-star five-star" aria-hidden="true"></i>
                                            <i class="fa fa-star five-star" aria-hidden="true"></i>
                                            <i class="fa fa-star five-star" aria-hidden="true"></i>
                                            <i class="fa fa-star five-star" aria-hidden="true"></i></span>
                                        <br />

                                        <hr className='my-2' style={{ color: "gray" }} />
                                        <font>
                                            <span className='pull-left'><a href='#' className='font-14 text-dark'>+ Add To Cart</a></span>
                                            <span className='pull-right'><i class="fa fa-heart-o" aria-hidden="true"></i></span>
                                        </font>
                                    </div>
                                </div>
                            </Col>

                            <Col sm={3} className='pb-5'>
                                <div className='product-item'>
                                    <Link to="/product/details">
                                        <img src='https://store.muskaan.org/wp-content/uploads/2021/11/A-Busy-day-300x300.jpg' alt="" className='w-100' />
                                    </Link>
                                    <div>
                                        <p className='m-0 pt-3'>Somaru Misses Home</p>
                                        <span>  <i class="fa fa-inr"></i> 200.00</span>
                                        <span className='pull-right'><i class="fa fa-star five-star" aria-hidden="true"></i>
                                            <i class="fa fa-star five-star" aria-hidden="true"></i>
                                            <i class="fa fa-star five-star" aria-hidden="true"></i>
                                            <i class="fa fa-star five-star" aria-hidden="true"></i></span>
                                        <br />

                                        <hr className='my-2' style={{ color: "gray" }} />
                                        <font>
                                            <span className='pull-left'><a href='#' className='font-14 text-dark'>+ Add To Cart</a></span>
                                            <span className='pull-right'><i class="fa fa-heart-o" aria-hidden="true"></i></span>
                                        </font>
                                    </div>
                                </div>
                            </Col>

                            <Col sm={3} className='pb-5'>
                                <div className='product-item'>
                                    <Link to="/product/details">
                                        <img src='https://store.muskaan.org/wp-content/uploads/2021/11/41-300x300.png' alt="" className='w-100' />
                                    </Link>
                                    <div>
                                        <p className='m-0 pt-3'>Somaru Misses Home</p>
                                        <span>  <i class="fa fa-inr"></i> 200.00</span>
                                        <span className='pull-right'><i class="fa fa-star five-star" aria-hidden="true"></i>
                                            <i class="fa fa-star five-star" aria-hidden="true"></i>
                                            <i class="fa fa-star five-star" aria-hidden="true"></i>
                                            <i class="fa fa-star five-star" aria-hidden="true"></i></span>
                                        <br />

                                        <hr className='my-2' style={{ color: "gray" }} />
                                        <font>
                                            <span className='pull-left'><a href='#' className='font-14 text-dark'>+ Add To Cart</a></span>
                                            <span className='pull-right'><i class="fa fa-heart-o" aria-hidden="true"></i></span>
                                        </font>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default ProductPage

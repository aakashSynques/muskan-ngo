import React, { useState, useEffect } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import FilterSideNav from './FilterSideNav';
import { fetch } from '../../../utils';
import axios from 'axios';

const ProductPage = () => {
   

    return (
        <>
            <hr />
            <Container className='py-5'>
                <Row>
            
                   <Col sm={9} className='ps-4'>
                        <h4><b>English Graded Readers</b> </h4>
                        <Row className='pt-3'>
                            <Col sm={3} className='pb-5'>
                                <div className='product-item'>
                                    <Link to="/product/details">
                                        <img src='https://store.muskaan.org/wp-content/uploads/2021/11/47-300x300.png' alt="" className='w-100' />
                                    </Link>
                                    <p className='m-0 pt-3'>Somaru Misses Home</p>
                                    <span className='main-color'>  <i className="fa fa-inr"></i> 200.00</span>
                                    <span className='pull-right'><i className="fa fa-star five-star" aria-hidden="true"></i>
                                        <i className="fa fa-star five-star" aria-hidden="true"></i>
                                        <i className="fa fa-star five-star" aria-hidden="true"></i>
                                        <i className="fa fa-star five-star" aria-hidden="true"></i>
                                    </span>
                                    <br />
                                    <hr className='my-2' style={{ color: "gray" }} />
                                    <font>
                                        <span className='pull-left'><a href='#' className='font-14 text-dark'>+ Add To Cart</a></span>
                                        <span className='pull-right'><i className="fa fa-heart-o" aria-hidden="true"></i></span>
                                    </font>
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

import React, { useState, useEffect } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import FilterSideNav from './FilterSideNav';
import { fetch } from '../../../utils';
import axios from 'axios';

const ProductPage = () => {
    const [categoryList, setCategoryList] = useState([]);
    const getCategryList = async () => {
        try {
            const response = await fetch(
                "/category/hierarchy",
                "get",
                null,
                null, // headers
            );
            setCategoryList(response.data.data.category);
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getCategryList();
    }, []);



    const [productList, setProductList] = useState([]);
    const getProductList = async () => {
        try {
            const headers = { 'Content-Type': 'application/json' };
            const body = {
                category_slug: 'books',
                sub_category_slug: 'english-graded-readers',
            };
            const response = await fetch(
                "/product/get-products-by-category",
                "POST",
                body,
                headers, // headers
            );
            setProductList(response.data.data.product_list);
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getProductList();
    }, []);
    console.log('product', productList)





    return (
        <>
            <hr />
            <Container className='py-5'>
                <Row>
                    <Col sm={3} style={{ borderRight: "1px solid #dddddd" }} className='px-3'>
                        <h4><b>Filter</b> </h4>
                        <Col sm={12} className='pt-2'>
                            {/* <FilterSideNav /> */}
                            <h6 className='f-w-6 main-color'>CATEGORIES</h6>
                            <ul>
                                {categoryList.map(category => (
                                    <li key={category.category_id} className='pt-2'>
                                        <Link to="">{category.category_name}</Link>
                                        {category.sub_categorys && category.sub_categorys.length > 0 && (
                                            <ul>
                                                {category.sub_categorys.map(subCategory => (
                                                    <li key={subCategory.category_id}>
                                                        <Link to="/" className='text-dark'>{subCategory.category_name}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </Col>
                    </Col>



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

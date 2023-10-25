import React, { useState } from 'react';
import { Container, Image, Col, Row, Button } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';

const DetailsPage = () => {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    return (
        <>
            <hr />
            {/* <div className='product-banner'>
                <Image src={require('../../assets/images/produtBanner.png')} alt="blog post" className='w-100' />
            </div> */}
            <Container className='pb-5'>
                <font> Home›Books › Single Story Books › Mirchi Ka Choora</font>
                <Row className='pt-4'>
                    <Col sm={5}>
                        <Image src="https://store.muskaan.org/wp-content/uploads/2021/11/54-300x300.png" alt="" className='w-100' />


                    </Col>
                    <Col sm={6}>
                        <div>
                            <h3>Basti mein Chor / thief in the Basti</h3>
                            <span>
                                <i className="fa fa-star five-star" style={{ fontSize: '14px' }} aria-hidden="true"></i>
                                <i className="fa fa-star five-star" style={{ fontSize: '14px' }} aria-hidden="true"></i>
                                <i className="fa fa-star five-star" style={{ fontSize: '14px' }} aria-hidden="true"></i>
                                <i className="fa fa-star five-star" style={{ fontSize: '14px' }} aria-hidden="true"></i>
                                <i className="fa fa-star five-star" style={{ fontSize: '14px' }} aria-hidden="true"></i> 4.0  &nbsp;&nbsp;| &nbsp;&nbsp;
                            </span>
                            <font size="2">
                                Status:
                                <span className="text-success">In Stock</span>
                            </font>
                            <p className='pt-1'>One day, Ritik lost his slippers. A few days later, Arman lost his slippers. Then Anokhi also lost her slippers. Has someone been stealing their slippers. Who could it be?</p>

                            <strong>Highlights:</strong>
                            <ul>
                                <li>Language: Hindi</li>
                                <li>Story Book</li>
                                <li>Kid Friendly</li>
                            </ul>
                            <div className="pt-2">
                                <span className='main-color price-font'><i className="fa fa-inr"></i> 200.00
                                </span> &nbsp;
                                <font size="2" className="text-secondary">
                                    <del><i className="fa fa-inr"></i> 250.00</del>
                                </font> &nbsp;
                                <font size="2" className='text-white px-2 rounded-1 main-bg'> 2 %</font>
                            </div>

                            <div className='mt-4'>
                                <span className="quantity-control">
                                    <button className='btn btn-sm' onClick={decrementQuantity}>-</button>
                                    <span className='px-4'>{quantity}</span>
                                    <button className='btn btn-sm' style={{ fontSize: "20px" }} onClick={incrementQuantity}>+</button>
                                </span> &nbsp;
                                <span>
                                    <button className='btn btn-danger rounded-1 main-bg px-4'> +  Add to cart</button>
                                </span>
                                <span> &nbsp;
                                    <button className='btn btn btn-outline-secondary rounded-1 px-4'>Buy Now</button>
                                </span>
                            </div>

                            <div className='pt-4'>
                                <font size='2'><i className="fa fa-heart-o" aria-hidden="true"></i> Add To WishList</font>   <br />
                                <div className='mt-3'><b>SKU : </b> A10</div>
                            </div>
                        </div>
                    </Col>
                </Row>


                <div className='details-page-tab mt-5'>
                    <Tabs
                        defaultActiveKey="description"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="description" title="Description">
                            <div>
                                <p>One day, Ritik lost his slippers. A few days later, Arman lost his slippers. Then Anokhi also lost her slippers. Has someone been stealing their slippers. Who could it be?
                                </p>
                                <strong>Highlights:</strong>
                                <ul>
                                    <li>Language: Hindi</li>
                                    <li>Story Book</li>
                                    <li>Kid Friendly</li>
                                </ul>
                            </div>
                        </Tab>
                        <Tab eventKey="information" title="Additional information">
                            <table className='table'>
                                <tbody>
                                    <tr>
                                        <th>Dimensions</th>
                                        <td className='ps-5'>21.5 × 18 cm</td>
                                    </tr>
                                    <tr>
                                        <th>Author(s)</th>
                                        <td className='ps-5'>Several</td>
                                    </tr>
                                    <tr>
                                        <th>Illustrator(s)</th>
                                        <td className='ps-5'>Ubitha Leela Unni</td>
                                    </tr>
                                    <tr>
                                        <th>Language(s)</th>
                                        <td className='ps-5'>Bilingual H/E</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Tab>
                        <Tab eventKey="review" title="Reviews (0)" >
                            Tab content for Contact
                        </Tab>
                    </Tabs>
                </div>


                <div className='mt-5'>
                    <h3 className='pt-5'><b>Related Product</b></h3>
                    <Row className='pt-4'>
                        <Col sm={3} className='pb-5'>
                            <div className='product-item'>
                                <Link to="/product/details">
                                    <img src='https://store.muskaan.org/wp-content/uploads/2021/11/41-300x300.png' alt="" className='w-100' />
                                </Link>
                                <div>
                                    <p className='m-0 pt-3'>Somaru Misses Home</p>
                                    <span>  <i className="fa fa-inr"></i> 200.00</span>
                                    <span className='pull-right'><i className="fa fa-star five-star" aria-hidden="true"></i>
                                        <i className="fa fa-star five-star" aria-hidden="true"></i>
                                        <i className="fa fa-star five-star" aria-hidden="true"></i>
                                        <i className="fa fa-star five-star" aria-hidden="true"></i></span>
                                    <br />

                                    <hr className='my-2' style={{ color: "gray" }} />
                                    <font>
                                        <span className='pull-left'><a href='#' className='font-14 text-dark'>+ Add To Cart</a></span>
                                        <span className='pull-right'><i className="fa fa-heart-o" aria-hidden="true"></i></span>
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
                                    <span>  <i className="fa fa-inr"></i> 200.00</span>
                                    <span className='pull-right'><i className="fa fa-star five-star" aria-hidden="true"></i>
                                        <i className="fa fa-star five-star" aria-hidden="true"></i>
                                        <i className="fa fa-star five-star" aria-hidden="true"></i>
                                        <i className="fa fa-star five-star" aria-hidden="true"></i></span>
                                    <br />

                                    <hr className='my-2' style={{ color: "gray" }} />
                                    <font>
                                        <span className='pull-left'><a href='#' className='font-14 text-dark'>+ Add To Cart</a></span>
                                        <span className='pull-right'><i className="fa fa-heart-o" aria-hidden="true"></i></span>
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
                                    <span>  <i className="fa fa-inr"></i> 200.00</span>
                                    <span className='pull-right'><i className="fa fa-star five-star" aria-hidden="true"></i>
                                        <i className="fa fa-star five-star" aria-hidden="true"></i>
                                        <i className="fa fa-star five-star" aria-hidden="true"></i>
                                        <i className="fa fa-star five-star" aria-hidden="true"></i></span>
                                    <br />
                                    <hr className='my-2' style={{ color: "gray" }} />
                                    <font>
                                        <span className='pull-left'><a href='#' className='font-14 text-dark'>+ Add To Cart</a></span>
                                        <span className='pull-right'><i className="fa fa-heart-o" aria-hidden="true"></i></span>
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
                                    <span>  <i className="fa fa-inr"></i> 200.00</span>
                                    <span className='pull-right'><i className="fa fa-star five-star" aria-hidden="true"></i>
                                        <i className="fa fa-star five-star" aria-hidden="true"></i>
                                        <i className="fa fa-star five-star" aria-hidden="true"></i>
                                        <i className="fa fa-star five-star" aria-hidden="true"></i></span>
                                    <br />
                                    <hr className='my-2' style={{ color: "gray" }} />
                                    <font>
                                        <span className='pull-left'><a href='#' className='font-14 text-dark'>+ Add To Cart</a></span>
                                        <span className='pull-right'><i className="fa fa-heart-o" aria-hidden="true"></i></span>
                                    </font>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default DetailsPage

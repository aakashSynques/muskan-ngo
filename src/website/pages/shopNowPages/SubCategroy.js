import React, { useState, useEffect } from 'react';
import { fetch } from '../../../utils';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Spinner } from 'react-bootstrap'; // Import Spinner from react-bootstrap

const SubCategory = () => {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true); // State for loading
    const { category_slug } = useParams();

    const getProductList = async (newCategorySlug) => {
        try {
            const headers = { 'Content-Type': 'application/json' };
            const body = {
                category_slug: newCategorySlug,
            };
            const response = await fetch(
                "/product/get-products-by-category",
                "POST",
                body,
                headers,
            );
            setProductList(response.data.data.product_list);
            setLoading(false); // Set loading to false when data is fetched
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        setLoading(true); // Set loading to true when fetching starts
        getProductList(category_slug);
    }, [category_slug]);
    return (
        <>
            <hr />
            <Container style={{ height: "100vh" }}>
                <font> Home › {category_slug}</font>
                <div className='mt-3 pb-3 text-center'>
                    <h3 className='f-w-6 text-uppercase'>{category_slug}</h3>
                </div>
                <Row xs={2} md={5} lg={5} className='pt-4'>
                    {productList.map((product, index) => (
                        <Col className='pb-5' key={index}>
                            {loading ? ( // Show loading spinner while loading is true
                                <div className="text-center">
                                    <Spinner animation="border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </Spinner>
                                </div>
                            ) : (
                                <div className='product-item'>
                                    <Link to={`/product/${product.product_slug}`}>
                                        <img src={product.product_thumbnail} alt="" className='w-100 image-height' />
                                    </Link>
                                    <p className='m-0 pt-2 f-w-6'>{product.product_name}</p>
                                    <span className='main-color'>
                                        <i className="fa fa-inr"></i>{product.product_MSP}
                                    </span>
                                    <span className='pull-right'>
                                        <i className="fa fa-star five-star" aria-hidden="true"></i>
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
                            )}
                        </Col>
                    ))}
                </Row>

            </Container>
        </>
    )
}

export default SubCategory;

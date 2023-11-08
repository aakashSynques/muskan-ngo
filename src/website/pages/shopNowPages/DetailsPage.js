import React, { useState, useEffect } from 'react';
import { Container, Image, Col, Row, Button } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import { useSelector, useDispatch } from 'react-redux';
import Tabs from 'react-bootstrap/Tabs';
import { useParams, Link } from 'react-router-dom';
import { fetch } from '../../../utils';
import Parser from 'html-react-parser';
import { addToCart, initializeCart } from '../../../reducers/cart';
import Loader from '../../component/Loader';
import CartSidebar from '../../component/CartSidebar';


const DetailsPage = () => {
    const [productDetails, setProductDetails] = useState([])
    const [loading, setLoading] = useState(true); // Add loading state
    const { category_slug, subcategory_slug } = useParams();


    const dispatch = useDispatch();
    const { product_slug } = useParams();
    const getProductDetails = async () => {
        try {
            const headers = { 'Content-Type': 'application/json' };
            const response = await fetch(
                `product/get-product-by-slug/${product_slug}`,
                "get",
                null,
                headers,
            );
            setProductDetails(response.data.data.product);
            setLoading(false); // Set loading to false when data is available


        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getProductDetails();
    }, []);
    console.log("productDetails", productDetails)


    const [quantity, setQuantity] = useState(1);
    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };
    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false); // State for cart sidebar visibility

    const handleAddToCart = (product) => {
        const cartItemData = {
            attributes: product.attributes,
            product_name: product.product_name,
            product_MSP: product.product_MSP,
            brand_id: product.brand_id,
            category_id: product.category_id,
            gst_id: product.gst_id,
            gst_percent: product.gst_percent,
            images: product.images,
            in_stock_status: product.in_stock_status,
            is_delete: product.is_delete,
            product_MRP: product.product_MRP,
            product_additional_information: product.product_additional_information,
            product_code: product.product_code,
            product_description: product.product_description,
            product_id: product.product_id,
            product_name_disp: product.product_name_disp,
            product_sku: product.product_sku,
            product_slug: product.product_slug,
            product_thumbnail: product.product_thumbnail,
            sub_category_id: product.sub_category_id,
            quantity: quantity,
            subTotal: product.product_MSP,
        };
        dispatch(addToCart(cartItemData));
        openCartSidebar();
    };

    const openCartSidebar = () => {
        setIsCartSidebarOpen(true);
        // setIsOverlayActive(true);
    }
    const closeCartSidebar = () => {
        setIsCartSidebarOpen(false);
        // setIsOverlayActive(false);
    }

    return (
        <>
            <hr />

            <div style={{ height: 'auto' }}>
                <Container className='pb-5' >
                    {loading ? (
                        // Render a loader within the container while waiting for the API to load

                        <div className='pt-5'> <Loader /></div>
                    ) : (
                        <>
                            <font> <Link to="/" className='text-dark'> Home </Link>  ›
                                <Link to='/' className="text-capitalize text-dark"> {category_slug} </Link>


                                › {productDetails.product_name}</font>
                            <Row className='pt-4'>
                                <Col sm={5}>
                                    <Image src={productDetails.images[0].img} alt="" className='w-100' />
                                </Col>
                                <Col sm={6}>
                                    <div>

                                        <h3>{productDetails.product_name}</h3>
                                        <span>
                                            <i className="fa fa-star five-star" style={{ fontSize: '14px' }} aria-hidden="true"></i>
                                            <i className="fa fa-star five-star" style={{ fontSize: '14px' }} aria-hidden="true"></i>
                                            <i className="fa fa-star five-star" style={{ fontSize: '14px' }} aria-hidden="true"></i>
                                            <i className="fa fa-star five-star" style={{ fontSize: '14px' }} aria-hidden="true"></i>
                                            <i className="fa fa-star five-star" style={{ fontSize: '14px' }} aria-hidden="true"></i> 4.0  &nbsp;&nbsp;| &nbsp;&nbsp;
                                        </span>
                                        <font size="2">
                                            Status:
                                            <span className="text-success">{productDetails.in_stock_status}</span>
                                        </font>
                                        <p className='pt-1'>
                                            {Parser(`${productDetails.product_description}`)}
                                        </p>

                                        <div className="pt-2">
                                            <span className='main-color price-font'><i className="fa fa-inr"></i> {productDetails.product_MSP}
                                            </span> &nbsp;
                                            <font size="2" className="text-secondary">
                                                <del><i className="fa fa-inr"></i> {productDetails.product_MRP} </del>
                                            </font> &nbsp;
                                            <font size="2" className='text-white px-2 rounded-1 main-bg'> 0 %</font>
                                        </div>

                                        <div className='mt-4'>
                                            <span className="quantity-control">
                                                <button className='btn btn-sm' onClick={decrementQuantity}>-</button>
                                                <span className='px-4'>{quantity}</span>
                                                <button className='btn btn-sm' style={{ fontSize: "20px" }} onClick={incrementQuantity}>+</button>
                                            </span> &nbsp;
                                            <span>
                                                <button className='btn btn-danger rounded-1 main-bg px-4' onClick={() => handleAddToCart(productDetails)}> +  Add to cart</button>
                                            </span>
                                            {/* <span> &nbsp;
                                    <button className='btn btn btn-outline-secondary rounded-1 px-4'>Buy Now</button>
                                </span> */}
                                        </div>

                                        <div className='pt-4'>
                                            <font size='2'><i className="fa fa-heart-o" aria-hidden="true"></i> Add To WishList</font>   <br />
                                            <div className='mt-3'><b>SKU : </b> {productDetails.product_sku}</div>
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
                                        {Parser(`${productDetails.product_additional_information}`)}

                                    </Tab>
                                    <Tab eventKey="information" title="Additional information">
                                        <table className='table'>
                                            <tbody>
                                                {productDetails && productDetails.attributes && productDetails.attributes.map((att, index) => (
                                                    <tr key={index}>
                                                        <th>{att.attribute_name}</th>
                                                        <td className='ps-5'>{att.attribute_value}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </Tab>
                                    <Tab eventKey="review" title="Reviews (0)" >
                                        Tab content for Contact
                                    </Tab>
                                </Tabs>
                            </div>
                        </>
                    )}
                </Container>
                <CartSidebar isOpen={isCartSidebarOpen} closeSidebar={closeCartSidebar} />

            </div>

        </>
    )
}

export default DetailsPage

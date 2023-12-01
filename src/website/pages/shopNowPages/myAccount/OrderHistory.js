import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row, Spinner } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import MyAccountSideBar from './MyAccoutSideBar';
import { Link } from 'react-router-dom';
import { fetch } from '../../../../utils';
import CryptoJS from "crypto-js";


const OrderHistory = ({ item }) => {
    const dispatch = useDispatch();
    const [orderHistoryData, setOrderHistoryData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const tokenDataFromLocalStorage = localStorage.getItem("muskan_token_data");
    const parsedTokenData = tokenDataFromLocalStorage ? JSON.parse(tokenDataFromLocalStorage) : null;

    const getOrderHistoryData = async () => {
        const body = {
            customer_id: parsedTokenData.customer_id,
        };
        try {
            const response = await fetch('/order/customer', 'POST', body, null);
            setOrderHistoryData(response.data.data.orders);
            console.log('dfasdf', response.data.data.orders)
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    };
    useEffect(() => {
        getOrderHistoryData();
    }, []);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
        return formattedDate;
    };

    return (
        <>
            <hr />
            <Container>
                <font> Home › My Account › Order History</font>
                <Row className="pt-5">
                    <Col sm={3}>
                        <MyAccountSideBar />
                    </Col>
                    <Col sm={9}>
                        <h3 className="pb-2 text-uppercase main-color">Order History</h3>
                        <p className="pb-1 border-bottom">
                            Check the status of recent orders, manage returns, and discover similar products
                        </p>
                        <h6 className="f-w-6 mt-1 pb-2">Orders History</h6>

                        {/* {orderHistoryData.map((item) => (
                            <div key={item.item_id} className="py-3 my-3 rounded-1" style={{ boxShadow: '0px 2px 6px 1px #736e6d69', background: "#f9fafc" }}>
                                <Container>
                                    <Row>
                                        <Col lg={6} ><h5> <strong>{item.order_no}</strong></h5></Col>
                                        <Col lg={6} ><p className='text-end'> Date: {formatDate(item.order_datetime)}</p></Col>
                                    </Row>
                                    <p className='m-0 order-histroy-font'>Total Amount &nbsp; : &nbsp;<i className="fa fa-inr"></i> {item.order_amount}</p>
                                    <p className='order-histroy-font'>Status &nbsp; : &nbsp; {item.order_status_name}</p>

                                    <Row>
                                        {item.order_items.map((product) => (

                                            <Col sm={4} className='py-1'>
                                                <td style={{ width: "18%" }}>
                                                    <Image src={product.product_thumbnail} alt="" className='w-100' />
                                                </td>
                                                <td>  <font className='ps-2 order-histroy-font'>{product.product_name}</font></td>
                                            </Col>
                                        ))}
                                    </Row>
                                    <p className='text-end m-0'>
                                        <Link to={`/order/${item.cust_order_id}/${CryptoJS.SHA256(item.cust_order_id.toString())}`} className='text-end'>
                                            View Details <i className="fa fa-external-link font-14" aria-hidden="true"></i>
                                        </Link>
                                    </p>
                                </Container>
                            </div>
                        ))} */}


                        {loading ? (
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        ) : orderHistoryData && orderHistoryData.length > 0 ? (
                            orderHistoryData.map((item) => (
                                <>
                                    <div key={item.item_id} className="py-3 my-3 rounded-1" style={{ boxShadow: '0px 2px 6px 1px #736e6d69', background: "#f9fafc" }}>
                                        <Container>
                                            <Row>
                                                <Col lg={6} ><h5> <strong>{item.order_no}</strong></h5></Col>
                                                <Col lg={6} ><p className='text-end'> Date: {formatDate(item.order_datetime)}</p></Col>
                                            </Row>
                                            <p className='m-0 order-histroy-font'>Total Amount &nbsp; : &nbsp;<i className="fa fa-inr"></i> {item.order_amount}</p>
                                            <p className='order-histroy-font'>Status &nbsp; : &nbsp; {item.order_status_name}</p>

                                            <Row>
                                                {item.order_items.map((product) => (

                                                    <Col sm={4} className='py-1'>
                                                        <td style={{ width: "18%" }}>
                                                            <Image src={product.product_thumbnail} alt="" className='w-100' />
                                                        </td>
                                                        <td>  <font className='ps-2 order-histroy-font'>{product.product_name}</font></td>
                                                    </Col>
                                                ))}
                                            </Row>
                                            <p className='text-end m-0'>
                                                <Link to={`/order/${item.cust_order_id}/${CryptoJS.SHA256(item.cust_order_id.toString())}`} className='text-end'>
                                                    View Details <i className="fa fa-external-link font-14" aria-hidden="true"></i>
                                                </Link>
                                            </p>
                                        </Container>
                                    </div>
                                </>
                            ))
                        ) : (
                            <p>No order history data found.</p>
                        )}

                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default OrderHistory;

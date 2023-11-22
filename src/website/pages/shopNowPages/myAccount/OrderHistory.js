import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import MyAccountSideBar from './MyAccoutSideBar';
import { Link } from 'react-router-dom';
import { fetch } from '../../../../utils';

const OrderHistory = () => {
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
            setLoading(false);
        } catch (error) {
            // console.error('Error fetching order history:', error);
            // setError('Empty'); // Set an error message
            setLoading(false);
        }
    };

    useEffect(() => {
        getOrderHistoryData();
    }, []);

    return (
        <>
            <hr />
            <Container>
                <font> Home › My Accoun › Order History</font>
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

                        {loading ? (
                            <Spinner animation="border" role="status">
                                <span className="sr-only">Fetching Order Items...</span>
                            </Spinner>
                        ) : (
                            <div>
                                {error ? (
                                    <p>Error: {error}</p>
                                ) : orderHistoryData ? (
                                    orderHistoryData.flatMap((order) =>
                                        order.order_items.map((item) => (
                                            <div key={item.item_id} className="py-3 my-3" style={{ boxShadow: '0px 2px 6px 1px #736e6d69' }}>
                                                <Row>
                                                    <Col sm={2} xs={5} className="px-3">
                                                        <img src={item.product_thumbnail} alt="" className="w-100 img-thumbnail" />
                                                    </Col>
                                                    <Col sm={7} xs={7}>
                                                        <p className="m-0 f-w-6 mb-2 mb-xs-0">{item.product_name}</p>
                                                        <span className="font-14">Qty: {item.product_qty}</span> <br />
                                                        <span className="font-14">SKU: {item.product_sku}</span>
                                                    </Col>
                                                    <Col sm={3}>
                                                        <p className="f-w-6 m-0">
                                                            <i className="fa fa-inr"></i> {item.product_MSP}
                                                        </p>
                                                        <div className="mt-lg-5 mt-sm-4 pt-lg-4">
                                                            <Link
                                                                to={`/${item.category_slug}/${item.sub_category_slug}/${item.product_slug}`}
                                                                className="main-color"
                                                            >
                                                                View Product
                                                            </Link>{' '}
                                                            |
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        ))
                                    )
                                ) : (
                                    <p>No order history available.</p>
                                )}
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default OrderHistory;

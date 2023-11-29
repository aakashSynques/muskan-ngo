import React, { useEffect, useState } from 'react'
import { Card, Container, Row, Col, CardBody, CardHeader, Spinner } from 'react-bootstrap'
import { fetch } from '../../../../utils'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { BASE_URL } from '../../../../config';
import CryptoJS from "crypto-js";



const OrderDetails = () => {
    const { orderId } = useParams();
    const [orderData, setOrderData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getOrderDetails = async () => {
        try {
            const body = {
                cust_order_id: orderId,
            };
            const response = await fetch('/order/details', 'POST', body, null);
            setOrderData(response.data.data.order);
            console.log('response', response)
        } catch (error) {
            console.log('failed');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getOrderDetails();
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
                <font> Home › Shopping › Order</font>
                <div className='pt-4'>

                    <div className='text-center'>
                        <p className='mb-1 text-secondary'>THANK YOU</p>
                        <h3>Your order is confirmed</h3>
                    </div>

                    {isLoading ? (
                        <div className='text-center mt-5' style={{ height: "350px" }}>
                            <Spinner animation="border" role="status" >
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                        </div>
                    ) : orderData ? (
                        <>
                            <Row className='mt-3'>
                                <Col sm={5} >
                                    <div className='bg-light p-4'>
                                        <h5>Order Info</h5>
                                        <tr> Order No  : {orderData.order_no}</tr>
                                        <tr>Order Date : {formatDate(orderData.order_datetime)}</tr>
                                        <tr>Order Status : {orderData.order_status_name}</tr>
                                        {orderData.invoice_no != "" &&
                                            <tr>Invoice No :  <a href={`${BASE_URL}/order/invoice/${orderId}/${CryptoJS.SHA1(orderId)}`} target='_black'>{orderData.invoice_no}</a></tr>
                                        }
                                        <hr />
                                        <h5>Billing Address</h5>
                                        <tr>{orderData.bill_fname}, {orderData.bill_lname},</tr>
                                        <tr>{orderData.bill_company || ''}</tr>
                                        <tr>{orderData.bill_adderss_one} {orderData.bill_adderss_two || ''}</tr>
                                        <tr>{orderData.bill_country} {orderData.bill_city}</tr>
                                        <tr>{orderData.bill_state}, {orderData.bill_pincode} </tr>
                                        <tr>{orderData.bill_mobile}</tr>

                                        <hr />

                                        <h5>Shipping Address</h5>
                                        <tr>{orderData.ship_fname}, {orderData.ship_lname}</tr>
                                        <tr>{orderData.ship_company || ""}</tr>
                                        <tr>{orderData.ship_adderss_one} {orderData.ship_adderss_two || ''}</tr>
                                        <tr>{orderData.ship_country} {orderData.ship_city}</tr>
                                        <tr>{orderData.ship_state}, {orderData.ship_pincode} </tr>
                                        <tr>{orderData.ship_mobile}</tr>
                                        <hr />

                                        <h5>Payment</h5>
                                        <tr>
                                            Status :
                                            <font className={`text-xs fw-bold  ${orderData.payment_status_name === "Success" ? "text-success" : "text-danger"}`}  >{orderData.payment_status_name}</font>
                                        </tr>

                                        {
                                            orderData.payment_response &&
                                            (<tr>
                                                Method  : {orderData.payment_response.method}
                                            </tr>)
                                        }
                                        {
                                            orderData.payment_response &&
                                            (<tr>
                                                transaction ID  : {orderData.payment_response.id}
                                            </tr>)

                                        }


                                    </div>
                                </Col>

                                <Col sm={7}>
                                    <div className='bg-light p-lg-4 p-xs-3 table-responsive'>
                                        <h5>Ordered Items</h5>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col" style={{ width: "10%" }}>Product</th>
                                                    <th scope="col" style={{ width: "40%" }}></th>
                                                    <th scope="col">Qty</th>
                                                    <th scope='col'>Price</th>
                                                    <th scope='col' className='text-end pe-4'>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {orderData.order_items.map((item, index) => (
                                                    <>
                                                        <tr key={index}>
                                                            <td> <img src={item.product_thumbnail} alt="" className='w-100' /></td>
                                                            <td>
                                                                <b>{item.product_name}</b>
                                                                <br /> <font size="2">SKU: {item.product_sku}</font></td>
                                                            {/* <td className='text-success'>{item.in_stock_status}</td> */}
                                                            <td className='font-15'>{item.product_qty}</td>
                                                            <td className='font-15'><i className="fa fa-inr font-15"></i> {item.product_MSP}</td>
                                                            <td className='text-end'><i className="fa fa-inr"></i> {(item.product_qty * item.product_MSP).toFixed(2)}</td> {/* Limit to 2 decimal places */}
                                                        </tr>
                                                    </>
                                                ))}
                                            </tbody>
                                        </table>

                                        <Row>
                                            <Col sm={8}></Col>
                                            <Col sm={4}>
                                                <table className='table table-borderless'>
                                                    <tbody>
                                                        <tr>
                                                            <td>Sub Total</td>
                                                            <td className='text-end'> <i className="fa fa-inr"></i> {(parseFloat(orderData.order_amount) - parseFloat(orderData.delivery_charges)).toFixed(2)}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Discount</td>
                                                            <td className='text-end'><i className="fa fa-inr"></i> {orderData.order_discount}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Tax</td>
                                                            <td className='text-end'><i className="fa fa-inr"></i> {orderData.order_discount}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Delivery </td>
                                                            <td className='text-end'><i className="fa fa-inr"></i> {orderData.delivery_charges}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><b>Order Total</b> </td>
                                                            <td className='text-end main-color'><i className="fa fa-inr"></i>  <b>{orderData.order_amount}</b></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>


                            </Row>
                        </>
                    ) : (
                        // Handle the case when orderData is not available
                        <p>No data available</p>
                    )}
                </div>

            </Container>
        </>
    )
}

export default OrderDetails


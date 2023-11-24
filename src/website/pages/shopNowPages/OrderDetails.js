import React, { useEffect, useState } from 'react'
import { Card, Container, Row, Col, CardBody, CardHeader } from 'react-bootstrap'
import { fetch } from '../../../utils'
import { useDispatch, useSelector } from 'react-redux';


const OrderDetails = () => {
    const orderId = useSelector((state) => state.order.custOrderId);

    const [orderData, setOrderData] = useState();
    const getOrderDetails = async () => {
        try {
            const body = {
                cust_order_id: orderId
            }
            const response = await fetch('/order/details', 'POST', body, null);
            setOrderData(response.data.data.order)

        } catch (error) {
            console.log('faild')
        }
    }
    useEffect(() => {
        getOrderDetails()
    }, []);

    return (
        <>
            <hr />
            <Container>
                <font> Home › Shopping › Order</font>

                <div className='pt-5'>
                    {orderData && (<>
                        <h4>Order : {orderData.order_no}</h4>
                        {new Date(orderData.order_datetime).toLocaleString().replace("T", " ")}
                        <Row className='pt-3'>
                            <Col sm={8}>
                                <div className='bg-light p-4 table-responsive"'>
                                    <h5>Ordered Items</h5>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col" style={{ width: "14%" }}>Product</th>
                                                <th scope="col" style={{ width: "30%" }}></th>
                                                <th scope="col">Availability</th>
                                                <th scope="col">Quntity</th>
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
                                                        <td className='text-success'>{item.in_stock_status}</td>
                                                        <td>{item.product_qty}</td>
                                                        <td><i className="fa fa-inr"></i> {item.product_MSP}</td>
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
                                                        <td className='text-end'> <i className="fa fa-inr"></i> {orderData.order_amount}</td>
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
                                                        <td>Shipping</td>
                                                        <td className='text-end'><i className="fa fa-inr"></i> {orderData.shipping_charges}</td>
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

                            <Col sm={4} >
                                <div className='bg-light p-4'>
                                    <h5>Customer</h5>
                                    <tr><b>Name </b> : {orderData.customer_fname} {orderData.customer_lname}</tr>
                                    <tr><b>Email </b> : {orderData.customer_email}</tr>
                                    <tr><b>Shipping Method </b> : {orderData.payment_method}</tr> <br />

                                    <h6>Billing Address</h6>
                                    <tr>{orderData.bill_fname}, {orderData.bill_lname}</tr>
                                    <tr>{orderData.bill_company},</tr>
                                    <tr>{orderData.bill_adderss_one} {orderData.bill_adderss_two}</tr>
                                    <tr>{orderData.bill_country} {orderData.bill_city}</tr>
                                    <tr>{orderData.bill_state}, {orderData.bill_pincode} </tr>
                                    <tr>{orderData.bill_mobile}</tr>

                                    <br />
                                    <h6>Shipping Address</h6>
                                    <tr>{orderData.ship_fname}, {orderData.ship_lname}</tr>
                                    <tr>{orderData.ship_company},</tr>
                                    <tr>{orderData.ship_adderss_one} {orderData.ship_adderss_two}</tr>
                                    <tr>{orderData.ship_country} {orderData.ship_city}</tr>
                                    <tr>{orderData.ship_state}, {orderData.ship_pincode} </tr>
                                    <tr>{orderData.ship_mobile}</tr>
                                </div>
                            </Col>
                        </Row>
                    </>
                    )}
                </div>

            </Container>
        </>
    )
}

export default OrderDetails


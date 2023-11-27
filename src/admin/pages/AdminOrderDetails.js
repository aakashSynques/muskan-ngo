import React, { useEffect, useState, useCallback } from "react";
import { Row, Col, Form, Card, Breadcrumb } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetch } from "../../utils";

const orderStatusList = [
  { order_status: 1, order_status_name: "Inserted" },
  { order_status: 2, order_status_name: "Confirm" },
  { order_status: 3, order_status_name: "Cancelled" },
  { order_status: 4, order_status_name: "Dispatched" },
  { order_status: 5, order_status_name: "Delivered" },
  { order_status: 6, order_status_name: "Amount Mismatch" },
];

const AdminOrderDetails = () => {
  const { cust_order_id } = useParams();
  const [orderStatus, setOrderStatus] = useState("");
  const [order, setOrder] = useState({
    error: null,
    loading: false,
    data: null,
  });

  const getOrder = useCallback(async () => {
    try {
      setOrder({ error: null, loading: true, data: null });
      const response = await fetch(
        "/order/details",
        "POST",
        { cust_order_id },
        null
      );
      if (response.status === 200) {
        const { success, data } = response.data;
        if (success === true) {
          setOrder({ error: null, loading: false, data: data.order });
          setOrderStatus(data.order.order_status);
        }
      }
    } catch (error) {
      let errorMassage = "";
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        errorMassage = error.response.data.message;
      } else if (error.message) {
        errorMassage = error.message;
      } else {
        errorMassage = "Something went wrong.";
      }
      setOrder({ error: errorMassage, loading: false, data: null });
    } finally {
      setOrder((pre) => ({ error: pre.error, loading: false, data: pre.data }));
    }
  }, [cust_order_id]);

  useEffect(() => {
    getOrder();
  }, [getOrder]);

  const changeOrderStatus = async (event) => {
    try {
      const order_status = event.target.value;
      const response = await fetch(
        "/order/update-order-status",
        "POST",
        { cust_order_id, order_status },
        null
      );
      if (response.status === 200) {
        const { success } = response.data;
        if (success === true) {
          setOrderStatus(order_status);
        }
      }
    } catch (error) {
      let errorMassage = "";
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        errorMassage = error.response.data.message;
      } else if (error.message) {
        errorMassage = error.message;
      } else {
        errorMassage = "Something went wrong.";
      }
      alert(errorMassage);
    }
  };

  // return ( <div className="container-fluid">    <pre>{JSON.stringify(order.data, null, 2)}</pre> </div> );
  return (
    <div className="container-fluid">
      <Breadcrumb className="p-2">
        <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item active>Order Details</Breadcrumb.Item>
      </Breadcrumb>
      <section className="content">
        <div className="container-fluid">
          <Card>
            <Card.Header>
              <h4> Order Details </h4>
            </Card.Header>
            <Card.Body>
              <div className="">
                {!order.data && (
                  <div className="container-fluid"> loading... </div>
                )}
                {order.data && (
                  <>
                    <Row className="pt-3">
                      <Col sm={8}>
                        {" "}
                        <h4>Order : {order.data.order_no}</h4>
                        {new Date(order.data.order_datetime)
                          .toLocaleString()
                          .replace("T", " ")}
                      </Col>
                      <Col sm={4}>
                        <Form.Select
                          aria-label="Default select example"
                          // {...register("category_id")}
                          // isInvalid={!!errors.category_id?.message}
                          value={orderStatus}
                          onChange={changeOrderStatus}
                        >
                          <option value=""> -- select -- </option>
                          {orderStatusList?.map((iten, index) => {
                            return (
                              <option
                                key={`option_${index}`}
                                value={iten.order_status}
                              >
                                {" "}
                                {iten.order_status_name}{" "}
                              </option>
                            );
                          })}
                        </Form.Select>
                      </Col>
                    </Row>

                    <Row className="pt-3">
                      <Col sm={8}>
                        <div className='bg-light p-2 table-responsive"'>
                          <h5>Ordered Items</h5>
                          <table className="table">
                            <thead>
                              <tr>
                                <th scope="col" style={{ width: "14%" }}>
                                  Product
                                </th>
                                <th scope="col" style={{ width: "30%" }}></th>
                                <th scope="col">Quntity</th>
                                <th scope="col">Price</th>
                                <th scope="col" className="text-end pe-4">
                                  Total
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {order.data.order_items.map((item, index) => (
                                <tr key={index}>
                                  <td>
                                    <img
                                      src={item.product_thumbnail}
                                      alt=""
                                      className="w-100"
                                    />
                                  </td>
                                  <td>
                                    <div>
                                      <b>{item.product_name}</b>
                                      <br />
                                      <font size="2">
                                        SKU: {item.product_sku}
                                      </font>
                                    </div>
                                  </td>
                                  <td>{item.product_qty}</td>
                                  <td>
                                    <div>
                                      <i className="fa fa-inr"></i>{" "}
                                      {item.product_MSP}{" "}
                                    </div>
                                  </td>
                                  <td className="text-end">
                                    <div>
                                      {" "}
                                      <i className="fa fa-inr"></i>{" "}
                                      {(
                                        item.product_qty * item.product_MSP
                                      ).toFixed(2)}
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>

                          <Row>
                            <Col sm={7}></Col>
                            <Col sm={5}>
                              <table className="table table-borderless">
                                <tbody>
                                  <tr>
                                    <td>Sub Total</td>
                                    <td className="text-end">
                                      {" "}
                                      <i className="fa fa-inr"></i>{" "}
                                      {order.data.order_amount}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Discount</td>
                                    <td className="text-end">
                                      <i className="fa fa-inr"></i>{" "}
                                      {order.data.order_discount}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Tax</td>
                                    <td className="text-end">
                                      <i className="fa fa-inr"></i>{" "}
                                      {order.data.order_discount}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Shipping</td>
                                    <td className="text-end">
                                      <i className="fa fa-inr"></i>{" "}
                                      {order.data.shipping_charges}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <b>Order Total</b>{" "}
                                    </td>
                                    <td className="text-end main-color">
                                      <i className="fa fa-inr"></i>{" "}
                                      <b>{order.data.order_amount}</b>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </Col>
                          </Row>
                        </div>
                      </Col>

                      <Col sm={4}>
                        <div className="bg-light p-4">
                          <h5>Customer</h5>
                          <tr>
                            <b>Name </b> : {order.data.customer_fname}{" "}
                            {order.data.customer_lname}
                          </tr>
                          <tr>
                            <b>Email </b> : {order.data.customer_email}
                          </tr>
                          <tr>
                            <b>Shipping Method </b> :{" "}
                            {order.data.payment_method}
                          </tr>{" "}
                          <br />
                          <h6>Billing Address</h6>
                          <tr>
                            {order.data.bill_fname}, {order.data.bill_lname}
                          </tr>
                          <tr>{order.data.bill_company},</tr>
                          <tr>
                            {order.data.bill_adderss_one}{" "}
                            {order.data.bill_adderss_two}
                          </tr>
                          <tr>
                            {order.data.bill_country} {order.data.bill_city}
                          </tr>
                          <tr>
                            {order.data.bill_state}, {order.data.bill_pincode}{" "}
                          </tr>
                          <tr>{order.data.bill_mobile}</tr>
                          <br />
                          <h6>Shipping Address</h6>
                          <tr>
                            {order.data.ship_fname}, {order.data.ship_lname}
                          </tr>
                          <tr>{order.data.ship_company},</tr>
                          <tr>
                            {order.data.ship_adderss_one}{" "}
                            {order.data.ship_adderss_two}
                          </tr>
                          <tr>
                            {order.data.ship_country} {order.data.ship_city}
                          </tr>
                          <tr>
                            {order.data.ship_state}, {order.data.ship_pincode}{" "}
                          </tr>
                          <tr>{order.data.ship_mobile}</tr>



               
                            <h5 className="pt-2">Payment</h5>
                            <tr>
                              <b>Status </b> :
                              <font className={`text-xs fw-bold  ${order.data.payment_status_name === "Success" ? "text-success" : "text-danger"}`}  >{order.data.payment_status_name}</font>
                            </tr>

                            {
                              order.data.payment_response &&
                              (<tr>
                                <b>Method </b> : {order.data.payment_response.method}
                              </tr>)
                            }
                            {
                              order.data.payment_response &&
                              (<tr>
                                <b> transaction ID </b> : {order.data.payment_response.id}
                              </tr>)
                            }

                     



                        </div>
                      </Col>
                    </Row>
                  </>
                )}
              </div>
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AdminOrderDetails;

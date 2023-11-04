import React, { useState, useCallback } from 'react'
import { Button, Col, Container, Form, FormControl, FormGroup, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartNav from './CartNav'
import { useSelector, useDispatch } from 'react-redux';
import { fetch } from '../../../utils';
import useRazorpay from "react-razorpay";

const CheckOut = () => {
    const Razorpay = useRazorpay();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.items);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const [shipToDifferentAddress, setShipToDifferentAddress] = useState(false);
    const handleCheckboxChange = (event) => {
        setShipToDifferentAddress(event.target.checked);
    };
    const [orderPlace, setOrderPlace] = useState('');
    const [formData, setFormData] = useState({
        customer_email: '',
        ship_fname: '',
        ship_lname: '',
        ship_company: '',
        ship_adderss_one: '',
        ship_adderss_two: '',
        ship_pincode: '',
        ship_city: '',
        ship_state: '',
        ship_country: '',
        ship_mobile: '',

        bill_fname: '',
        bill_lname: '',
        bill_company: '',
        bill_adderss_one: '',
        bill_adderss_two: '',
        bill_pincode: '',
        bill_city: '',
        bill_state: '',
        bill_country: '',
        bill_mobile: '',
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    /****/
    const displayRazorpay = useCallback(
        (result) => {
            try {
                const options = {
                    key: "rzp_test_QwRkxxPsNKaaaQ", // Enter the Key ID generated from the Dashboard
                    amount: result.amount,
                    currency: result.currency,
                    name: "Muskaan",
                    description: "Test Transaction",
                    image: { logo: `` },
                    order_id: result.id,
                    handler: async (data) => {
                        console.log(data);
                        alert("response get !");
                        try {
                            const body = {
                                razorpayPaymentId: data.razorpay_payment_id,
                                razorpayOrderId: data.razorpay_order_id,
                                razorpaySignature: data.razorpay_signature

                            };
                            const response = await fetch(
                                '/order/verify',
                                'POST',
                                body,
                                null
                            );
                            if (response) {
                                console.log(response);

                            } else {
                                alert(" no ok")
                                console.log(response);
                                // setOrderPlace(response.data);
                                // console.error('Failed to place the order');
                            }
                        } catch (error) {
                            console.log(error)
                            alert(" no ok")
                            //   setIsLoading(false);
                            //   setErrorMessage("something went wrong");
                        }
                    },
                    prefill: {
                        name: result.notes.customer_name,
                        email: result.notes.customer_email,
                        contact: result.notes.customer_contact,
                    },
                    notes: {
                        address: "Muskaan, Plot No. 264-65, Behind Canara Bank, Neelbad, Bhopal, India – 462 044",
                    },
                    theme: {
                        color: "#090909",
                    },
                };
                const paymentObject = new window.Razorpay(options);
                paymentObject.open();
                // setIsLoading(false);
            } catch (error) {
                // setErrorMessage("something went wrong");
            }
        },
        []
    );
    /***/
    const handlePlaceOrder = async () => {
        try {
            const body = {
                customer_id: '',
                customer_email: formData.customer_email,
                // cart: cart,
                cart: JSON.stringify(cart),
                ship_fname: formData.ship_fname,
                ship_lname: formData.ship_lname,
                ship_company: formData.ship_company,
                ship_adderss_one: formData.ship_adderss_one,
                ship_adderss_two: formData.ship_adderss_two,
                ship_pincode: formData.ship_pincode,
                ship_city: formData.ship_city,
                ship_state: formData.ship_state,
                ship_country: formData.ship_country,
                ship_mobile: formData.ship_mobile,

                bill_fname: formData.bill_fname,
                bill_lname: formData.bill_lname,
                bill_company: formData.bill_company,
                bill_adderss_one: formData.bill_adderss_one,
                bill_adderss_two: formData.bill_adderss_two,
                bill_pincode: formData.bill_pincode,
                bill_city: formData.bill_city,
                bill_state: formData.bill_state,
                bill_country: formData.bill_country,
                bill_mobile: formData.bill_mobile,
            };
            const response = await fetch(
                '/order/save',
                'POST',
                body,
                null
            );
            if (response) {
                setOrderPlace(response.data.data); // Display the response message
                console.log(response.data.data);
                displayRazorpay(response.data.data.order)
            } else {
                setOrderPlace(response.data);
                console.error('Failed to place the order');
            }
        } catch (err) {
            console.error('An error occurred:', err);
        }
    }


    return (
        <>
            <hr />
            <Container>
                <font> Home › Shipping › Payment</font>
                <div className='mt-2 pb-5 text-center'>
                    {/* <h2 style={{ fontWeight: "500" }}>Checkout</h2> */}
                </div>
                {/* <CartNav /> */}
                {/* <Row className='pt-5'>
                    <Col sm={8} className='r-border'>
                        <div className='checkout-form'>
       


                                <div className='pt-4'>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={shipToDifferentAddress}
                                            onChange={handleCheckboxChange}
                                        />
                                        &nbsp; Ship to a different address?
                                    </label>
                                </div>
                                {shipToDifferentAddress && (
                                    <>
                                        <h4 className='mt-3'>Billing Details </h4>
                                        <Row>
                                            <FormGroup as={Col} md="6">
                                                <Form.Label>First Name <span className='text-danger'>*</span></Form.Label>
                                                <FormControl type="text"
                                                    name="bill_fname"
                                                    value={formData.bill_fname}
                                                    onChange={handleInputChange}
                                                />
                                            </FormGroup>
                                            <FormGroup as={Col} md="6">
                                                <Form.Label>Last Name <span className='text-danger'>*</span></Form.Label>
                                                <FormControl type="text" name="bill_lname"
                                                    value={formData.bill_lname}
                                                    onChange={handleInputChange}
                                                />
                                            </FormGroup>
                                            <FormGroup as={Col} md="12">
                                                <Form.Label>Company name (optional)</Form.Label>
                                                <FormControl type="text" name="bill_company"
                                                    value={formData.bill_company}
                                                    onChange={handleInputChange}
                                                />
                                            </FormGroup>

                                            <FormGroup as={Col} md="12">
                                                <Form.Label>Country / Region <span className='text-danger'>*</span></Form.Label>
                                                <FormControl type="text" name="bill_country"
                                                    value={formData.bill_country}
                                                    onChange={handleInputChange}
                                                />
                                            </FormGroup>

                                            <FormGroup as={Col} md="12">
                                                <Form.Label>Street address<span className='text-danger'>*</span></Form.Label>
                                                <FormControl type="text" placeholder='House number and street name' name="bill_adderss_one"
                                                    value={formData.bill_adderss_one}
                                                    onChange={handleInputChange}
                                                /> <br />
                                                <FormControl type="text" placeholder='Apartment, suite, unit, etc. (optional)' name="bill_adderss_two"
                                                    value={formData.bill_adderss_two}
                                                    onChange={handleInputChange}
                                                />
                                            </FormGroup>

                                            <FormGroup as={Col} md="12">
                                                <Form.Label>Town / City <span className='text-danger'>*</span></Form.Label>
                                                <FormControl type="text" name='bill_city'
                                                    value={formData.bill_city}
                                                    onChange={handleInputChange}
                                                />
                                            </FormGroup>

                                            <FormGroup as={Col} md="12">
                                                <Form.Label>State <span className='text-danger'>*</span></Form.Label>
                                                <FormControl type="text" name="bill_state"
                                                    value={formData.bill_state}
                                                    onChange={handleInputChange}
                                                />
                                            </FormGroup>

                                            <FormGroup as={Col} md="12">
                                                <Form.Label>PIN Code <span className='text-danger'>*</span></Form.Label>
                                                <FormControl type="text" name="bill_pincode"
                                                    value={formData.bill_pincode}
                                                    onChange={handleInputChange}
                                                />
                                            </FormGroup>

                                            <FormGroup as={Col} md="12">
                                                <Form.Label>Phone <span className='text-danger'>*</span></Form.Label>
                                                <FormControl type="text" name="bill_mobile"
                                                    value={formData.bill_mobile}
                                                    onChange={handleInputChange}
                                                />
                                            </FormGroup>

                                        </Row>
                                    </>
                                )}
                            </Form>
                        </div>
                    </Col>




                    <Col sm={4} className='px-4'>
                        <h6 className='main-color f-w-8'>YOUR ORDER</h6>
                        <table className='table'>
                            <tbody>
                                <tr className='py-3'>
                                    <td>Product</td>
                                    <td className='text-end'>SubTotal</td>
                                </tr>
                                {cart.map((item, index) => (
                                    <tr className='py-3' key={index}>
                                        <td>{item.product_name}</td>
                                        <td className='text-end main-color'><i className="fa fa-inr"></i> {item.subTotal}</td>
                                    </tr>

                                ))}
                                <br />

                                <tr className='py-3'>
                                    <td>Subtotal</td>
                                    <td className='text-end'><i className="fa fa-inr"></i> {totalAmount} </td>
                                </tr>
                                <tr className='py-3'>
                                    <td>Total</td>
                                    <td className='text-end main-color' style={{ color: '#a20401' }}><i className="fa fa-inr"></i> {totalAmount}</td>
                                </tr>
                            </tbody>
                        </table>

                        <font size="2" className="text-danger">CREDIT CARD/DEBIT CARD/NETBANKING</font>
                        <Image src={require('../../assets/images/payment.png')} alt="" className='' /> <br />
                        <font size='2'>Pay securely by Credit or Debit card or Internet Banking through Razorpay.</font> <br /> <br />
                        <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our
                            <Link to="/"> privacy policy.</Link>
                        </p>
                        <Button className='btn btn-danger w-100 mt-3' onClick={handlePlaceOrder}>
                            Place order
                        </Button>

                    </Col>
                </Row> */}




                <Row>
                    <Col sm={8}>
                        <h6 className='pull-left'>Contact</h6>
                        <p className='text-end'>
                            Have an account? <Link className='main-bg text-white px-2 rounded-1'>Log in</Link>
                        </p>
                        <FormGroup as={Col} md="12">
                            {/* <Form.Label>Email address <span className='text-danger'>*</span></Form.Label> */}
                            <FormControl type="text" name='customer_email'
                                value={formData.customer_email}
                                onChange={handleInputChange}
                                placeholder='Email'

                            />
                        </FormGroup>

                        <div className='pt-5 checkout-style'>
                            <h6 className='text-dark mb-3'>Shipping address</h6>
                            <Row>
                                <FormGroup as={Col} md="6">
                                    {/* <Form.Label>First Name <span className='text-danger'>*</span></Form.Label> */}
                                    <FormControl type="text" name="ship_fname"
                                        value={formData.ship_fname}
                                        onChange={handleInputChange}
                                        placeholder='First Name'
                                    />
                                </FormGroup>

                                <FormGroup as={Col} md="6">
                                    {/* <Form.Label>Last Name <span className='text-danger'>*</span></Form.Label> */}
                                    <FormControl type="text" name="ship_lname"
                                        value={formData.ship_lname}
                                        onChange={handleInputChange}
                                        placeholder='Last Name'
                                    />
                                </FormGroup>
                                <FormGroup as={Col} md="6">
                                    {/* <Form.Label>Phone <span className='text-danger'>*</span></Form.Label> */}
                                    <FormControl type="text" name="ship_mobile"
                                        value={formData.ship_mobile}
                                        onChange={handleInputChange}
                                        placeholder='Phone'
                                    />
                                </FormGroup>

                                <FormGroup as={Col} md="6">
                                        {/* <Form.Label>Country / Region <span className='text-danger'>*</span></Form.Label> */}
                                        <FormControl type="text" name="ship_country"
                                            value={formData.ship_country}
                                            onChange={handleInputChange}
                                            placeholder='Country'
                                        />
                                    </FormGroup>

                                <FormGroup as={Col} md="4">
                                    {/* <Form.Label>Town / City <span className='text-danger'>*</span></Form.Label> */}
                                    <FormControl type="text" name="ship_city"
                                        value={formData.ship_city}
                                        onChange={handleInputChange}
                                        placeholder='Town / City'
                                    />
                                </FormGroup>

                                <FormGroup as={Col} md="4">
                                    {/* <Form.Label>State <span className='text-danger'>*</span></Form.Label> */}
                                    <FormControl type="text" name="ship_state"
                                        value={formData.ship_state}
                                        onChange={handleInputChange}
                                        placeholder='State'
                                    />
                                </FormGroup>

                                <FormGroup as={Col} md="4">
                                    {/* <Form.Label>PIN Code <span className='text-danger'>*</span></Form.Label> */}
                                    <FormControl type="text" name="ship_pincode"
                                        value={formData.ship_pincode}
                                        onChange={handleInputChange}
                                        placeholder='PIN Code'
                                    />
                                </FormGroup>

                                <FormGroup as={Col} md="12">
                                        {/* <Form.Label>Company name (optional)</Form.Label> */}
                                        <FormControl type="text" name="ship_company"
                                            value={formData.ship_company}
                                            onChange={handleInputChange}
                                            placeholder='Company Name (optional)'
                                        />
                                    </FormGroup>


                                    <FormGroup as={Col} md="12">
                                        {/* <Form.Label>Street address<span className='text-danger'>*</span></Form.Label> */}
                                        <FormControl type="text" placeholder='Address' name="ship_adderss_one"
                                            value={formData.ship_adderss_one}
                                            onChange={handleInputChange}
                                        
                                        />
                                        <FormControl type="text" placeholder='Apartment, suite, unit, etc. (optional)' name="ship_adderss_two"
                                            value={formData.ship_adderss_two}
                                            onChange={handleInputChange}
                                        />
                                    </FormGroup>







                            </Row>



                        </div>


                    </Col>
                    <Col sm={4}>

                    </Col>
                </Row>






            </Container>
        </>
    )
}

export default CheckOut

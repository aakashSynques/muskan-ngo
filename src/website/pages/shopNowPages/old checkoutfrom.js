



import React, { useState, useCallback, useEffect } from 'react'
import { Button, Col, Container, Form, FormControl, FormGroup, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { fetch } from '../../../utils';
import useRazorpay from "react-razorpay";
import CryptoJS from "crypto-js";
import OrderSummeryCheckup from './OrderSummeryCheckup';
import { useNavigate } from 'react-router-dom';
import { setOrderId } from '../../../reducers/orderSlice';


const CheckOut = () => {
    const Razorpay = useRazorpay();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const cart = useSelector((state) => state.cart.items);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const [shipToDifferentAddress, setShipToDifferentAddress] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // Add loading state

    const tokenDataFromLocalStorage = localStorage.getItem("muskan_token_data");
    const parsedTokenData = tokenDataFromLocalStorage ? JSON.parse(tokenDataFromLocalStorage) : null;
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

    /**/
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
                        setIsLoading(true);
                        setErrorMessage("");
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
                            const custOrderId = response.data.data.cust_order_id;
                            dispatch(setOrderId(custOrderId));
                            if (response == false) {
                                setIsLoading(false);
                                setErrorMessage(response.massage);
                                return false;
                            }
                            setIsLoading(false);

                            navigate(
                                `/order/${response.data.data.cust_order_id}/${CryptoJS.SHA256(
                                    response.data.data.cust_order_id.toString()
                                )}`
                            );
                        } catch (error) {
                            setIsLoading(false);
                            setErrorMessage("something went wrong");
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
                setIsLoading(false);
            } catch (error) {
                setErrorMessage("something went wrong");
            }
        },
        [navigate] // Ensure to include navigate in the dependencies array
    );

    const handlePlaceOrder = async () => {

        try {
            setIsLoading(true); // Set loading state to true
            const body = {
                customer_id: parsedTokenData ? parsedTokenData.customer_id : '', // Conditionally set customer_id             
                customer_email: parsedTokenData ? parsedTokenData.customer_email : formData.customer_email,
                cart: JSON.stringify(cart),
                ship_is_diff: shipToDifferentAddress ? 0 : 1,
                ship_fname: formData.ship_fname,
                ship_lname: formData.ship_lname,
                ship_company: formData.ship_company,
                ship_adderss_one: formData.ship_adderss_one,
                ship_adderss_two: formData.ship_adderss_one,
                ship_pincode: formData.ship_pincode,
                ship_city: formData.ship_city,
                ship_state: formData.ship_state,
                ship_country: formData.ship_country,
                ship_mobile: formData.ship_mobile,

                bill_fname: shipToDifferentAddress ? formData.bill_fname : formData.ship_fname,
                bill_lname: shipToDifferentAddress ? formData.bill_lname : formData.ship_lname,
                bill_company: shipToDifferentAddress ? formData.bill_company : formData.ship_company,
                bill_adderss_one: shipToDifferentAddress ? formData.bill_adderss_one : formData.ship_adderss_one,
                bill_adderss_two: shipToDifferentAddress ? formData.bill_adderss_two : formData.ship_adderss_one,
                bill_pincode: shipToDifferentAddress ? formData.bill_pincode : formData.ship_pincode,
                bill_city: shipToDifferentAddress ? formData.bill_city : formData.ship_city,
                bill_state: shipToDifferentAddress ? formData.bill_state : formData.ship_state,
                bill_country: shipToDifferentAddress ? formData.bill_country : formData.ship_country,
                bill_mobile: shipToDifferentAddress ? formData.bill_mobile : formData.ship_mobile,

            };
            const response = await fetch('/order/save', 'POST', body, null);
            if (response) {
                setOrderPlace(response.data.data);
                displayRazorpay(response.data.data.order);
            } else {
                setOrderPlace(response.data);
                console.error('Failed to place the order');
            }
        } catch (err) {
            console.error('An error occurred:', err);
        } finally {
            setIsLoading(false); // Reset loading state
        }

    };

    useEffect(() => {
        if (cart.length === 0) {
            navigate('/');
        }
    }, [cart, navigate]);
    return (
        <>
            <hr />
            <div>
                <Container>
                    <Row>
                        <Col sm={8} className='r-border '>
                            <div className='mb-4'>   <font> Home › Shipping › Payment</font> </div>
                            {parsedTokenData ? (
                                <>
                                    <h6>Contact</h6>
                                    <Row className='pt-4'>
                                        <Col sm={1} lg={1} xs={1}>
                                            <Image src={require('../../assets/images/user.jpg')} alt="" className='w-100' />
                                        </Col>
                                        <Col sm={11} lg={11} xs={11} className='px-0'>
                                            <p className='m-0'>{parsedTokenData.customer_fname}{parsedTokenData.customer_lname} ( {parsedTokenData.customer_email} )</p>
                                            <p className='main-color'>Log Out</p>
                                        </Col>
                                    </Row>
                                </>
                            ) : (
                                <>
                                    <h6 className='pull-left'>Contact</h6>
                                    <p className='text-end'>
                                        Have an account? <Link className='main-bg text-white px-2 rounded-1' to='/account/login'>Log in</Link>
                                    </p>
                                    <FormGroup as={Col} md="12">
                                        <FormControl type="mail" name='customer_email'
                                            value={formData.customer_email}
                                            onChange={handleInputChange}
                                            placeholder='Email'
                                        />
                                    </FormGroup>
                                </>
                            )}

                            <div className='pt-4 checkout-style'>
                                <h6 className='text-dark mb-3'>Shipping address</h6>
                                <Row>
                                    <FormGroup as={Col} md="6" className='col-mt'>
                                        <FormControl type="text" name="ship_fname"
                                            value={formData.ship_fname}
                                            onChange={handleInputChange}
                                            placeholder='First Name'
                                            required

                                        />
                                    </FormGroup>
                                    <FormGroup as={Col} md="6" className='col-mt'>
                                        <FormControl type="text" name="ship_lname"
                                            value={formData.ship_lname}
                                            onChange={handleInputChange}
                                            placeholder='Last Name'
                                            required

                                        />
                                    </FormGroup>
                                    <FormGroup as={Col} md="4" className='col-mt'>
                                        <FormControl type="number" name="ship_mobile"
                                            value={formData.ship_mobile}
                                            onChange={handleInputChange}
                                            placeholder='Phone'
                                            required
                                        />
                                    </FormGroup>
                                    <FormGroup as={Col} md="4" className='col-mt'>
                                        <FormControl type="text" name="ship_country"
                                            value={formData.ship_country}
                                            onChange={handleInputChange}
                                            placeholder='Country'
                                            required
                                        />
                                    </FormGroup>
                                    <FormGroup as={Col} md="4" className='col-mt'>
                                        <FormControl type="text" name="ship_company"
                                            value={formData.ship_company}
                                            onChange={handleInputChange}
                                            placeholder='Company Name (optional)'
                                        />
                                    </FormGroup>

                                    <FormGroup as={Col} md="4" className='col-mt'>
                                        <FormControl type="text" name="ship_city"
                                            value={formData.ship_city}
                                            onChange={handleInputChange}
                                            placeholder='Town / City'
                                            required  // Add the required attribute here

                                        />
                                    </FormGroup>
                                    <FormGroup as={Col} md="4" className='col-mt'>
                                        <FormControl type="text" name="ship_state"
                                            value={formData.ship_state}
                                            onChange={handleInputChange}
                                            placeholder='State'
                                        />
                                    </FormGroup>
                                    <FormGroup as={Col} md="4" className='col-mt'>
                                        <FormControl type="number" name="ship_pincode"
                                            value={formData.ship_pincode}
                                            onChange={handleInputChange}
                                            placeholder='PIN Code'
                                        />
                                    </FormGroup>

                                    <FormGroup as={Col} md="12" className='col-mt'>
                                        <FormControl type="text" placeholder='Address' name="ship_adderss_one"
                                            value={formData.ship_adderss_one}
                                            onChange={handleInputChange}
                                        />
                                    </FormGroup>
                                    <FormGroup as={Col} md="12" className='col-mt'>
                                        <FormControl type="text" placeholder='Apartment, suite, unit, etc. (optional)' name="ship_adderss_two"
                                            value={formData.ship_adderss_two}
                                            onChange={handleInputChange}
                                        />
                                    </FormGroup>

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



                                </Row>
                                {shipToDifferentAddress && (
                                    <>
                                        <h6 className='mt-3'>Billing Details </h6>
                                        <Row className='mt-3'>
                                            <FormGroup as={Col} md="6" className='col-mt'>
                                                <FormControl type="text"
                                                    name="bill_fname"
                                                    value={formData.bill_fname}
                                                    onChange={handleInputChange}
                                                    placeholder='First Name'
                                                />
                                            </FormGroup>
                                            <FormGroup as={Col} md="6" className='col-mt'>
                                                <FormControl type="text" name="bill_lname"
                                                    value={formData.bill_lname}
                                                    onChange={handleInputChange}
                                                    placeholder='Last Name'
                                                />
                                            </FormGroup>

                                            <FormGroup as={Col} md="4" className='col-mt'>
                                                <FormControl type="text" name="bill_mobile"
                                                    value={formData.bill_mobile}
                                                    onChange={handleInputChange}
                                                    placeholder='Phone'
                                                />
                                            </FormGroup>

                                            <FormGroup as={Col} md="4" className='col-mt'>
                                                <FormControl type="text" name="bill_country"
                                                    value={formData.bill_country}
                                                    onChange={handleInputChange}
                                                    placeholder='Country'
                                                />
                                            </FormGroup>

                                            <FormGroup as={Col} md="4" className='col-mt'>
                                                <FormControl type="text" name="bill_company"
                                                    value={formData.bill_company}
                                                    onChange={handleInputChange}
                                                    placeholder='Company Name'
                                                />
                                            </FormGroup>

                                            <FormGroup as={Col} md="4" className='col-mt'>
                                                <FormControl type="text" name='bill_city'
                                                    value={formData.bill_city}
                                                    onChange={handleInputChange}
                                                    placeholder='Town / City'
                                                />

                                            </FormGroup>

                                            <FormGroup as={Col} md="4" className='col-mt'>
                                                <FormControl type="text" name="bill_state"
                                                    value={formData.bill_state}
                                                    onChange={handleInputChange}
                                                    placeholder='State'
                                                />
                                            </FormGroup>

                                            <FormGroup as={Col} md="4" className='col-mt'>
                                                <FormControl type="text" name="bill_pincode"
                                                    value={formData.bill_pincode}
                                                    onChange={handleInputChange}
                                                    placeholder='PIN Code'
                                                />
                                            </FormGroup>
                                            <FormGroup as={Col} md="12">
                                                <FormControl type="text" placeholder='House number and street name' name="bill_adderss_one"
                                                    value={formData.bill_adderss_one}
                                                    onChange={handleInputChange}
                                                />
                                                <br />
                                                <FormControl type="text" placeholder='Apartment, suite, unit, etc. (optional)' name="bill_adderss_two"
                                                    value={formData.bill_adderss_two}
                                                    onChange={handleInputChange}
                                                />
                                            </FormGroup>
                                        </Row>
                                    </>
                                )}

                                <Row>
                                    <Col sm={6} className='text-center p-3'>
                                        <p><font color="red" ><b>{errorMessage}</b></font></p>
                                    </Col>
                                    <Col sm={6} className='text-end'>
                                        <Button
                                            className='btn btn-danger mt-3 py-3'
                                            onClick={handlePlaceOrder}
                                            disabled={isLoading}
                                        >
                                            {isLoading ? 'Please wait...' : 'Continue to Shipping'}
                                        </Button>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col sm={4} >
                            <OrderSummeryCheckup />
                        </Col>
                    </Row>

                </Container>
            </div>
        </>
    )
}

export default CheckOut
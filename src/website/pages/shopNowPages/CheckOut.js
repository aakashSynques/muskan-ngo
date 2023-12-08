import React, { useState, useCallback, useEffect, useRef } from 'react'
import { Button, Col, Container, Form, FormControl, FormGroup, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { fetch } from '../../../utils';
import useRazorpay from "react-razorpay";
import CryptoJS from "crypto-js";
import OrderSummeryCheckup from './OrderSummeryCheckup';
import { useNavigate } from 'react-router-dom';
import { setOrderId, } from '../../../reducers/orderSlice';
import { clearCart } from '../../../reducers/cart';
import { logoimg } from '../../../Muskaan-logo.png'
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

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
        customer_email: parsedTokenData?.customer_email || '',
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
        const { name, value, placeholder } = event.target;

        // Update form data
        setFormData({
            ...formData,
            [name]: value,
        });

        // Update error messages
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: value.trim() ? '' : `${placeholder || name} is required`,
        }));
    };



    const displayRazorpay = useCallback(
        (result, key) => {
            try {
                const options = {
                    key, // Enter the Key ID generated from the Dashboard
                    amount: result.amount,
                    currency: result.currency,
                    name: "Muskaan",
                    description: "Test Transaction",
                    image: { logo: `logoimg` },
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
                            dispatch(clearCart());
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

    const [errors, setErrors] = useState({
        ship_pincode: '',
        ship_fname: '',
        ship_lname: '',
        ship_mobile: '',
        ship_adderss_one: '',
    });
    const handlePlaceOrder = async () => {
        try {
            let isValid = true;
            setIsLoading(true); // Set loading state to true

            setErrors({}); 
            const validateField = (fieldName, regex, errorMessage) => {
                if (!formData[fieldName].trim() || (regex && !regex.test(formData[fieldName].trim()))) {
                    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: errorMessage }));
                    isValid = false;
                } else {
                    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: '' })); // Clear the error
                }
            };


            validateField('ship_pincode', null, 'Pin Code is required');
            if (formData.ship_pincode && pinCodeDetails === null) {
                setErrors((prevErrors) => ({ ...prevErrors, ["ship_pincode"]: 'Enter valid Pin code' }));
                isValid = false;
            }
            validateField('customer_email', null, 'Email is required');
            validateField('ship_fname', null, 'First Name is required');
            validateField('ship_lname', null, 'Last Name is required');
            validateField('ship_mobile', /^[0-9]{10}$/, 'Enter 10 digit mobile number');
            validateField('ship_adderss_one', null, 'Address is required');
            validateField('ship_city', null, 'City is required');
            validateField('ship_state', null, 'State is required');
            validateField('ship_country', null, 'Country is required');

            if (shipToDifferentAddress) {
                validateField('bill_pincode', null, 'Pin Code is required');
                if (formData.bill_pincode && pinCodeDetails === null) {
                    setErrors((prevErrors) => ({ ...prevErrors, ["ship_pincode"]: 'Enter valid Pin code' }));
                    isValid = false;
                }
                validateField('bill_fname', null, 'First Name is required');
                validateField('bill_lname', null, 'Last Name is required');
                validateField('bill_mobile', /^[0-9]{10}$/, 'Enter 10 digit mobile number');
                validateField('bill_adderss_one', null, 'Address is required');
                validateField('bill_city', null, 'City is required');
                validateField('bill_state', null, 'State is required');
                validateField('bill_country', null, 'Country is required');
            }

            if (isValid === false) { return false; }

            const body = {
                customer_id: parsedTokenData ? parsedTokenData.customer_id : '', // Conditionally set customer_id             
                customer_email: parsedTokenData ? parsedTokenData.customer_email : formData.customer_email,
                cart: JSON.stringify(cart),
                ship_is_diff: shipToDifferentAddress ? 0 : 1,
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

                bill_fname: shipToDifferentAddress ? formData.bill_fname : formData.ship_fname,
                bill_lname: shipToDifferentAddress ? formData.bill_lname : formData.ship_lname,
                bill_company: shipToDifferentAddress ? formData.bill_company : formData.ship_company,
                bill_adderss_one: shipToDifferentAddress ? formData.bill_adderss_one : formData.ship_adderss_one,
                bill_adderss_two: shipToDifferentAddress ? formData.bill_adderss_two : formData.ship_adderss_two,
                bill_pincode: shipToDifferentAddress ? formData.bill_pincode : formData.ship_pincode,
                bill_city: shipToDifferentAddress ? formData.bill_city : formData.ship_city,
                bill_state: shipToDifferentAddress ? formData.bill_state : formData.ship_state,
                bill_country: shipToDifferentAddress ? formData.bill_country : formData.ship_country,
                bill_mobile: shipToDifferentAddress ? formData.bill_mobile : formData.ship_mobile,
            };
            const response = await fetch('/order/save', 'POST', body, null);
            if (response) {
                setOrderPlace(response.data.data);
                displayRazorpay(response.data.data.order, response.data.data.RAZORPAY_KEY_ID);
            } else {
                setOrderPlace(response.data);
            }
        }
        catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setErrorMessage(<font color="red"><b>{error.response.data.message}</b></font>);
            } else if (error && error.message) {
                setErrorMessage(<font color="red"><b>{error.message}</b></font>);
            } else {
                setErrorMessage(<font color="red"><b>Something went wrong.</b></font>);
            }

        } finally {
            setIsLoading(false); // Reset loading state
        }
    };

    const [pinCode, setPinCode] = useState('');
    const [pinCodeDetails, setPinCodeDetails] = useState(null);
    const [errorMessagePin, setErrorMessagePin] = useState("");
    const fetchPinCodeDetails = async (pinCode, isBilling) => {
        try {
            const body = {
                pincode: pinCode,
            };
            const endpoint = isBilling ? '/pincode/by-pincode' : '/pincode/by-pincode';
            const response = await fetch(endpoint, 'POST', body, null);
            const pincodeDetails = response.data.data.pincode_details;
            if (pincodeDetails) {
                setPinCodeDetails(pincodeDetails);

                // Update form data based on pin code details
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    [isBilling ? 'bill_city' : 'ship_city']: pincodeDetails.city || prevFormData.ship_city,
                    [isBilling ? 'bill_state' : 'ship_state']: pincodeDetails.state || prevFormData.ship_state,
                    [isBilling ? 'bill_country' : 'ship_country']: pincodeDetails.country || prevFormData.ship_country,
                }));

                // Clear the corresponding error messages
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    [isBilling ? 'bill_city' : 'ship_city']: '',
                    [isBilling ? 'bill_state' : 'ship_state']: '',
                    [isBilling ? 'bill_country' : 'ship_country']: '',
                }));
            } else {
                setErrorMessagePin('No Pincode found');
                setPinCodeDetails(null);
                toast.error('Enter valid PIN Code.', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000,
                });
            }
        } catch (error) {
            setErrorMessagePin('No Pincode found');
            setPinCodeDetails(null);

            // Clear the corresponding error messages
            setErrors((prevErrors) => ({
                ...prevErrors,
                [isBilling ? 'bill_city' : 'ship_city']: '',
                [isBilling ? 'bill_state' : 'ship_state']: '',
                [isBilling ? 'bill_country' : 'ship_country']: '',
            }));

            setFormData((prevFormData) => ({
                ...prevFormData,
                [isBilling ? 'bill_city' : 'ship_city']: '',
                [isBilling ? 'bill_state' : 'ship_state']: '',
                [isBilling ? 'bill_country' : 'ship_country']: '',
            }));

            toast.error('No Pincode found', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000,
            });
        }
    };



    const handleShipPinCodeKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === 'Tab') {
            e.preventDefault();
            fetchPinCodeDetails(formData.ship_pincode, false);
        }
    };
    const handleShipPinCodeBlur = () => {
        fetchPinCodeDetails(formData.ship_pincode, false);
    };

    const handleBillPinCodeKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === 'Tab') {
            e.preventDefault();
            fetchPinCodeDetails(formData.bill_pincode, true);
        }
    };
    const handleBillPinCodeBlur = () => {
        fetchPinCodeDetails(formData.bill_pincode, true);
    };
    // const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('muskan_token');
        localStorage.removeItem('muskan_token_data');
        navigate('/account/login');
    };

    if (cart.length === 0) {
        return (
            <Container>
                <Row className='pt-2'>
                    <Col>
                        <font> Home › Shipping › Payment</font>
                        <div className='pt-4'>
                            <h3 style={{ fontWeight: "500" }}>Checkout</h3>
                        </div>
                        <div className='text-center my-5'>
                            <Image src={require(`../../assets/images/empty-cart.jpg`)} alt='muskaan ngo' className='' />
                            <h3>Oops! Your Cart is empty!</h3>
                            <p>Looks like you haven't added <br />anything to your cart yet </p>
                            <Link to="/books" className='btn btn-primary'>Shop Now</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
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
                                            <p className='main-color' onClick={handleLogout} style={{ cursor: "pointer" }}>Log Out</p>
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
                                        {errors.customer_email && <span className="text-danger">{errors.customer_email}</span>}

                                    </FormGroup>
                                </>
                            )}

                            <div className='pt-4 checkout-style'>
                                <h6 className='text-dark mb-3'>Shipping address</h6>
                                <Row>
                                    <FormGroup as={Col} md="4" className='col-mt'>
                                        <FormControl
                                            type="number"
                                            name="ship_pincode"
                                            value={formData.ship_pincode}
                                            onChange={(e) => {
                                                handleInputChange(e);
                                                setPinCode(e.target.value);
                                            }}
                                            onKeyDown={handleShipPinCodeKeyDown}
                                            onBlur={handleShipPinCodeBlur}
                                            placeholder='PIN Code'
                                        />
                                        {errors.ship_pincode && <span className="text-danger">{errors.ship_pincode}</span>}
                                    </FormGroup>
                                    <FormGroup as={Col} md="4" className='col-mt'>
                                        <FormControl type="text" name="ship_city"
                                            value={formData.ship_city}
                                            onChange={handleInputChange}
                                            placeholder='City'
                                            readOnly
                                        />
                                        {errors.ship_city && <span className="text-danger">{errors.ship_city}</span>}
                                    </FormGroup>
                                    <FormGroup as={Col} md="4" className='col-mt'>
                                        <FormControl type="text" name="ship_state"
                                            value={formData.ship_state}
                                            onChange={handleInputChange}
                                            placeholder='State'
                                            readOnly
                                        />
                                        {errors.ship_state && <span className="text-danger">{errors.ship_state}</span>}


                                    </FormGroup>
                                    <FormGroup as={Col} md="6" className='col-mt'>
                                        <FormControl type="text" name="ship_fname"
                                            value={formData.ship_fname}
                                            onChange={handleInputChange}
                                            placeholder='First Name'
                                        />
                                        {errors.ship_fname && <span className="text-danger">{errors.ship_fname}</span>}

                                    </FormGroup>
                                    <FormGroup as={Col} md="6" className='col-mt'>
                                        <FormControl type="text" name="ship_lname"
                                            value={formData.ship_lname}
                                            onChange={handleInputChange}
                                            placeholder='Last Name'
                                            required
                                        />
                                        {errors.ship_lname && <span className="text-danger">{errors.ship_lname}</span>}

                                    </FormGroup>
                                    <FormGroup as={Col} md="4" className='col-mt'>
                                        <FormControl type="number" name="ship_mobile"
                                            value={formData.ship_mobile}
                                            onChange={handleInputChange}
                                            placeholder='Phone'
                                            required
                                        />
                                        {errors.ship_mobile && <span className="text-danger">{errors.ship_mobile}</span>}
                                    </FormGroup>
                                    <FormGroup as={Col} md="4" className='col-mt'>
                                        <FormControl type="text" name="ship_company"
                                            value={formData.ship_company}
                                            onChange={handleInputChange}
                                            placeholder='Company Name (optional)'
                                        />
                                    </FormGroup>
                                    <FormGroup as={Col} md="4" className='col-mt'>
                                        <FormControl type="text" name="ship_country"
                                            value={formData.ship_country}
                                            onChange={handleInputChange}
                                            placeholder='Country'
                                            readOnly
                                        />
                                        {errors.ship_country && <span className="text-danger">{errors.ship_country}</span>}

                                    </FormGroup>

                                    <FormGroup as={Col} md="12" className='col-mt'>
                                        <FormControl type="text" placeholder='Address' name="ship_adderss_one"
                                            value={formData.ship_adderss_one}
                                            onChange={handleInputChange}
                                        />

                                        {errors.ship_adderss_one && <span className="text-danger">{errors.ship_adderss_one}</span>}
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
                                            <FormGroup as={Col} md="4" className='col-mt'>
                                                <FormControl
                                                    type="number"
                                                    name="bill_pincode"
                                                    value={formData.bill_pincode}
                                                    onChange={(e) => {
                                                        handleInputChange(e);
                                                        setPinCode(e.target.value);
                                                    }}
                                                    onKeyDown={handleBillPinCodeKeyDown}
                                                    onBlur={handleBillPinCodeBlur}
                                                    placeholder='PIN Code'
                                                />
                                                {errors.bill_pincode && <span className="text-danger">{errors.bill_pincode}</span>}

                                            </FormGroup>

                                            <FormGroup as={Col} md="4" className='col-mt'>
                                                <FormControl type="text" name='bill_city'
                                                    value={formData.bill_city}
                                                    onChange={handleInputChange}
                                                    placeholder='City'
                                                    readOnly
                                                />

                                                {errors.bill_city && <span className="text-danger">{errors.bill_city}</span>}
                                            </FormGroup>

                                            <FormGroup as={Col} md="4" className='col-mt'>
                                                <FormControl type="text" name="bill_state"
                                                    value={formData.bill_state}
                                                    onChange={handleInputChange}
                                                    placeholder='State'
                                                    readOnly
                                                />
                                                {errors.bill_state && <span className="text-danger">{errors.bill_state}</span>}
                                            </FormGroup>
                                            <FormGroup as={Col} md="6" className='col-mt'>
                                                <FormControl type="text"
                                                    name="bill_fname"
                                                    value={formData.bill_fname}
                                                    onChange={handleInputChange}
                                                    placeholder='First Name'
                                                />
                                                {errors.bill_fname && <span className="text-danger">{errors.bill_fname}</span>}
                                            </FormGroup>

                                            <FormGroup as={Col} md="6" className='col-mt'>
                                                <FormControl type="text" name="bill_lname"
                                                    value={formData.bill_lname}
                                                    onChange={handleInputChange}
                                                    placeholder='Last Name'
                                                />
                                                {errors.bill_lname && <span className="text-danger">{errors.bill_lname}</span>}

                                            </FormGroup>

                                            <FormGroup as={Col} md="4" className='col-mt'>
                                                <FormControl type="text" name="bill_mobile"
                                                    value={formData.bill_mobile}
                                                    onChange={handleInputChange}
                                                    placeholder='Phone'
                                                />
                                                {errors.bill_mobile && <span className="text-danger">{errors.bill_mobile}</span>}

                                            </FormGroup>
                                            <FormGroup as={Col} md="4" className='col-mt'>
                                                <FormControl type="text" name="bill_company"
                                                    value={formData.bill_company}
                                                    onChange={handleInputChange}
                                                    placeholder='Company Name'
                                                />
                                            </FormGroup>

                                            <FormGroup as={Col} md="4" className='col-mt'>
                                                <FormControl type="text" name="bill_country"
                                                    value={formData.bill_country}
                                                    onChange={handleInputChange}
                                                    placeholder='Country'
                                                />
                                                {errors.bill_country && <span className="text-danger">{errors.bill_country}</span>}

                                            </FormGroup>

                                            <FormGroup as={Col} md="12">
                                                <FormControl type="text" placeholder='House number and street name' name="bill_adderss_one"
                                                    value={formData.bill_adderss_one}
                                                    onChange={handleInputChange}
                                                />
                                                {errors.bill_adderss_one && <span className="text-danger">{errors.bill_adderss_one}</span>}

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
                                    <Col sm={6} className=' p-3'>
                                        <font color="red" size='2' >{errorMessage}</font>
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
            <ToastContainer />

        </>
    )
}
export default CheckOut



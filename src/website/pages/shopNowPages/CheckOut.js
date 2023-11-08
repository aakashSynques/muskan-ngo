// import React, { useState, useCallback } from 'react'
// import { Button, Col, Container, Form, FormControl, FormGroup, Image, Row } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
// import CartNav from './CartNav'
// import { useSelector, useDispatch } from 'react-redux';
// import { fetch } from '../../../utils';
// import useRazorpay from "react-razorpay";
// import OrderSummeryCheckup from './OrderSummeryCheckup';

// const CheckOut = () => {
//     const Razorpay = useRazorpay();
//     const dispatch = useDispatch();
//     const cart = useSelector((state) => state.cart.items);
//     const totalAmount = useSelector((state) => state.cart.totalAmount);
//     const [shipToDifferentAddress, setShipToDifferentAddress] = useState(false);
//     const [isLoading, setIsLoading] = useState(false); // Add loading state

//     const handleCheckboxChange = (event) => {
//         setShipToDifferentAddress(event.target.checked);
//     };
//     const [orderPlace, setOrderPlace] = useState('');
//     const [formData, setFormData] = useState({
//         customer_email: '',
//         ship_fname: '',
//         ship_lname: '',
//         ship_company: '',
//         ship_adderss_one: '',
//         ship_adderss_two: '',
//         ship_pincode: '',
//         ship_city: '',
//         ship_state: '',
//         ship_country: '',
//         ship_mobile: '',

//         bill_fname: '',
//         bill_lname: '',
//         bill_company: '',
//         bill_adderss_one: '',
//         bill_adderss_two: '',
//         bill_pincode: '',
//         bill_city: '',
//         bill_state: '',
//         bill_country: '',
//         bill_mobile: '',
//     });
//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     /****/
//     const displayRazorpay = useCallback(
//         (result) => {
//             try {
//                 const options = {
//                     key: "rzp_test_QwRkxxPsNKaaaQ", // Enter the Key ID generated from the Dashboard
//                     amount: result.amount,
//                     currency: result.currency,
//                     name: "Muskaan",
//                     description: "Test Transaction",
//                     image: { logo: `` },
//                     order_id: result.id,
//                     handler: async (data) => {
//                         console.log(data);
//                         alert("response get !");
//                         try {
//                             const body = {
//                                 razorpayPaymentId: data.razorpay_payment_id,
//                                 razorpayOrderId: data.razorpay_order_id,
//                                 razorpaySignature: data.razorpay_signature

//                             };
//                             const response = await fetch(
//                                 '/order/verify',
//                                 'POST',
//                                 body,
//                                 null
//                             );
//                             if (response) {
//                                 console.log(response);

//                             } else {
//                                 alert(" no ok")
//                                 console.log(response);
//                                 // setOrderPlace(response.data);
//                                 // console.error('Failed to place the order');
//                             }
//                         } catch (error) {
//                             console.log(error)
//                             alert(" no ok")
//                             //   setIsLoading(false);
//                             //   setErrorMessage("something went wrong");
//                         }
//                     },
//                     prefill: {
//                         name: result.notes.customer_name,
//                         email: result.notes.customer_email,
//                         contact: result.notes.customer_contact,
//                     },
//                     notes: {
//                         address: "Muskaan, Plot No. 264-65, Behind Canara Bank, Neelbad, Bhopal, India – 462 044",
//                     },
//                     theme: {
//                         color: "#090909",
//                     },
//                 };
//                 const paymentObject = new window.Razorpay(options);
//                 paymentObject.open();
//                 // setIsLoading(false);
//             } catch (error) {
//                 // setErrorMessage("something went wrong");
//             }
//         },
//         []
//     );


//     const handlePlaceOrder = async () => {
//         if (validateForm()) {
//             try {
//                 setIsLoading(true); // Set loading state to true

//                 const body = {
//                     customer_id: '',
//                     customer_email: formData.customer_email,
//                     cart: JSON.stringify(cart),
//                     ship_fname: formData.ship_fname,
//                     ship_lname: formData.ship_lname,
//                     ship_company: formData.ship_company,
//                     ship_adderss_one: formData.ship_adderss_one,
//                     ship_adderss_two: formData.ship_adderss_two,
//                     ship_pincode: formData.ship_pincode,
//                     ship_city: formData.ship_city,
//                     ship_state: formData.ship_state,
//                     ship_country: formData.ship_country,
//                     ship_mobile: formData.ship_mobile,


//                     bill_fname: formData.bill_fname,
//                     bill_lname: formData.bill_lname,
//                     bill_company: formData.bill_company,
//                     bill_adderss_one: formData.bill_adderss_one,
//                     bill_adderss_two: formData.bill_adderss_two,
//                     bill_pincode: formData.bill_pincode,
//                     bill_city: formData.bill_city,
//                     bill_state: formData.bill_state,
//                     bill_country: formData.bill_country,
//                     bill_mobile: formData.bill_mobile,
//                 };
//                 const response = await fetch('/order/save', 'POST', body, null);
//                 if (response) {
//                     setOrderPlace(response.data.data);
//                     displayRazorpay(response.data.data.order);
//                 } else {
//                     setOrderPlace(response.data);
//                     console.error('Failed to place the order');
//                 }
//             } catch (err) {
//                 console.error('An error occurred:', err);
//             } finally {
//                 setIsLoading(false); // Reset loading state
//             }
//         }
//     };

//     const [errors, setErrors] = useState({});
//     const validateForm = () => {
//         const newErrors = {};

//         // Validate the customer email field.
//         if (!formData.customer_email) {
//             newErrors.customer_email = 'Email is required';
//         } else if (!isValidEmail(formData.customer_email)) {
//             newErrors.customer_email = 'Invalid email format';
//         }


//         if (!formData.ship_fname) {
//             newErrors.ship_fname = 'First Name is required';
//         }
//         if (!formData.ship_lname) {
//             newErrors.ship_lname = 'Last Name is required';
//         }
//         if (!formData.ship_adderss_one) {
//             newErrors.ship_adderss_one = 'Address is required';
//         }

//         if (!formData.ship_pincode) {
//             newErrors.ship_pincode = 'PIN code is required';
//         }
//         if (!formData.ship_city) {
//             newErrors.ship_city = 'City is required';
//         }
//         if (!formData.ship_state) {
//             newErrors.ship_state = 'State is required';
//         } if (!formData.ship_country) {
//             newErrors.ship_country = 'Country is required';
//         }
//         if (!formData.ship_mobile) {
//             newErrors.ship_mobile = 'Mobile is required';
//         }


//         if (!formData.bill_fname) {
//             newErrors.bill_fname = 'First Name is required';
//         }
//         if (!formData.bill_lname) {
//             newErrors.bill_lname = 'Last Name is required';
//         }
//         if (!formData.bill_adderss_one) {
//             newErrors.bill_adderss_one = 'Address is required';
//         }

//         if (!formData.bill_pincode) {
//             newErrors.bill_pincode = 'PIN code is required';
//         }
//         if (!formData.bill_city) {
//             newErrors.bill_city = 'City is required';
//         }
//         if (!formData.bill_state) {
//             newErrors.bill_state = 'State is required';
//         } if (!formData.bill_country) {
//             newErrors.bill_country = 'Country is required';
//         }

//         if (!isValidMobileNumber(formData.ship_mobile)) {
//             newErrors.ship_mobile = 'Mobile number must be 10 digits';
//         }

//         // Validate other fields similarly...

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const isValidEmail = (email) => {
//         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//     };
//     const isValidMobileNumber = (mobile) => {
//         // Check if the mobile number contains exactly 10 digits and consists of only numeric characters.
//         return /^\d{10}$/.test(mobile);
//     };
//     return (
//         <>
//             <hr />
//             <div>
//                 <Container>


//                     <Row>
//                         <Col sm={8} className='r-border '>
//                             <div className='mb-4'>   <font> Home › Shipping › Payment</font> </div>
//                             <h6 className='pull-left'>Contact</h6>
//                             <p className='text-end'>
//                                 Have an account? <Link className='main-bg text-white px-2 rounded-1'>Log in</Link>
//                             </p>
//                             <FormGroup as={Col} md="12">
//                                 <FormControl type="text" name='customer_email'
//                                     value={formData.customer_email}
//                                     onChange={handleInputChange}
//                                     placeholder='Email'

//                                 />
//                             </FormGroup>
//                             {errors.customer_email && (
//                                 <span className='text-danger'>{errors.customer_email}</span>
//                             )}

//                             <div className='pt-5 checkout-style'>
//                                 <h6 className='text-dark mb-3'>Shipping address</h6>
//                                 <Row>
//                                     <FormGroup as={Col} md="6" className='col-mt'>
//                                         <FormControl type="text" name="ship_fname"
//                                             value={formData.ship_fname}
//                                             onChange={handleInputChange}
//                                             placeholder='First Name'
//                                         />
//                                         {errors.ship_fname && (
//                                             <span className='text-danger'>{errors.ship_fname}</span>
//                                         )}
//                                     </FormGroup>
//                                     <FormGroup as={Col} md="6" className='col-mt'>
//                                         <FormControl type="text" name="ship_lname"
//                                             value={formData.ship_lname}
//                                             onChange={handleInputChange}
//                                             placeholder='Last Name'
//                                         />
//                                         {errors.ship_lname && (
//                                             <span className='text-danger'>{errors.ship_lname}</span>
//                                         )}
//                                     </FormGroup>
//                                     <FormGroup as={Col} md="4" className='col-mt'>
//                                         <FormControl type="number" name="ship_mobile"
//                                             value={formData.ship_mobile}
//                                             onChange={handleInputChange}
//                                             placeholder='Phone'
//                                         />
//                                         {errors.ship_mobile && (
//                                             <span className='text-danger'>{errors.ship_mobile}</span>
//                                         )}
//                                     </FormGroup>
//                                     <FormGroup as={Col} md="4" className='col-mt'>
//                                         <FormControl type="text" name="ship_country"
//                                             value={formData.ship_country}
//                                             onChange={handleInputChange}
//                                             placeholder='Country'
//                                         />
//                                         {errors.ship_country && (
//                                             <span className='text-danger'>{errors.ship_country}</span>
//                                         )}
//                                     </FormGroup>
//                                     <FormGroup as={Col} md="4" className='col-mt'>
//                                         <FormControl type="text" name="ship_company"
//                                             value={formData.ship_company}
//                                             onChange={handleInputChange}
//                                             placeholder='Company Name (optional)'
//                                         />
//                                     </FormGroup>

//                                     <FormGroup as={Col} md="4" className='col-mt'>
//                                         <FormControl type="text" name="ship_city"
//                                             value={formData.ship_city}
//                                             onChange={handleInputChange}
//                                             placeholder='Town / City'
//                                         />
//                                         {errors.ship_city && (
//                                             <span className='text-danger'>{errors.ship_city}</span>
//                                         )}
//                                     </FormGroup>
//                                     <FormGroup as={Col} md="4" className='col-mt'>
//                                         <FormControl type="text" name="ship_state"
//                                             value={formData.ship_state}
//                                             onChange={handleInputChange}
//                                             placeholder='State'
//                                         />
//                                         {errors.ship_state && (
//                                             <span className='text-danger'>{errors.ship_state}</span>
//                                         )}
//                                     </FormGroup>
//                                     <FormGroup as={Col} md="4" className='col-mt'>
//                                         <FormControl type="number" name="ship_pincode"
//                                             value={formData.ship_pincode}
//                                             onChange={handleInputChange}
//                                             placeholder='PIN Code'
//                                         />
//                                         {errors.ship_pincode && (
//                                             <span className='text-danger'>{errors.ship_pincode}</span>
//                                         )}
//                                     </FormGroup>

//                                     <FormGroup as={Col} md="12" className='col-mt'>
//                                         <FormControl type="text" placeholder='Address' name="ship_adderss_one"
//                                             value={formData.ship_adderss_one}
//                                             onChange={handleInputChange}
//                                         />
//                                         {errors.ship_adderss_one && (
//                                             <span className='text-danger'>{errors.ship_adderss_one}</span>
//                                         )}
//                                     </FormGroup>
//                                     <FormGroup as={Col} md="12" className='col-mt'>
//                                         <FormControl type="text" placeholder='Apartment, suite, unit, etc. (optional)' name="ship_adderss_two"
//                                             value={formData.ship_adderss_two}
//                                             onChange={handleInputChange}
//                                         />
//                                     </FormGroup>




//                                     <div className='pt-4'>
//                                         <label>
//                                             <input
//                                                 type="checkbox"
//                                                 checked={shipToDifferentAddress}
//                                                 onChange={handleCheckboxChange}
//                                             />
//                                             &nbsp; Ship to a different address?
//                                         </label>
//                                     </div>



//                                 </Row>


//                                 {shipToDifferentAddress && (
//                                     <>
//                                         <h6 className='mt-3'>Billing Details </h6>
//                                         <Row className='mt-3'>
//                                             <FormGroup as={Col} md="6" className='col-mt'>
//                                                 <FormControl type="text"
//                                                     name="bill_fname"
//                                                     value={formData.bill_fname}
//                                                     onChange={handleInputChange}
//                                                     placeholder='First Name'
//                                                 />

//                                                 {errors.bill_fname && (
//                                                     <span className='text-danger'>{errors.bill_fname}</span>
//                                                 )}
//                                             </FormGroup>
//                                             <FormGroup as={Col} md="6" className='col-mt'>
//                                                 <FormControl type="text" name="bill_lname"
//                                                     value={formData.bill_lname}
//                                                     onChange={handleInputChange}
//                                                     placeholder='Last Name'
//                                                 />
//                                                 {errors.bill_lname && (
//                                                     <span className='text-danger'>{errors.bill_lname}</span>
//                                                 )}
//                                             </FormGroup>

//                                             <FormGroup as={Col} md="4" className='col-mt'>
//                                                 <FormControl type="text" name="bill_mobile"
//                                                     value={formData.bill_mobile}
//                                                     onChange={handleInputChange}
//                                                     placeholder='Phone'
//                                                 />
//                                                 {errors.bill_mobile && (
//                                                     <span className='text-danger'>{errors.bill_mobile}</span>
//                                                 )}
//                                             </FormGroup>

//                                             <FormGroup as={Col} md="4" className='col-mt'>
//                                                 <FormControl type="text" name="bill_country"
//                                                     value={formData.bill_country}
//                                                     onChange={handleInputChange}
//                                                     placeholder='Country'
//                                                 />
//                                                 {errors.bill_country && (
//                                                     <span className='text-danger'>{errors.bill_country}</span>
//                                                 )}
//                                             </FormGroup>

//                                             <FormGroup as={Col} md="4" className='col-mt'>
//                                                 <FormControl type="text" name="bill_company"
//                                                     value={formData.bill_company}
//                                                     onChange={handleInputChange}
//                                                     placeholder='Company Name'
//                                                 />
//                                             </FormGroup>

//                                             <FormGroup as={Col} md="4" className='col-mt'>
//                                                 <FormControl type="text" name='bill_city'
//                                                     value={formData.bill_city}
//                                                     onChange={handleInputChange}
//                                                     placeholder='Town / City'
//                                                 />
//                                                 {errors.bill_city && (
//                                                     <span className='text-danger'>{errors.bill_city}</span>
//                                                 )}

//                                             </FormGroup>

//                                             <FormGroup as={Col} md="4" className='col-mt'>
//                                                 <FormControl type="text" name="bill_state"
//                                                     value={formData.bill_state}
//                                                     onChange={handleInputChange}
//                                                     placeholder='State'
//                                                 />
//                                                 {errors.bill_state && (
//                                                     <span className='text-danger'>{errors.bill_state}</span>
//                                                 )}
//                                             </FormGroup>

//                                             <FormGroup as={Col} md="4" className='col-mt'>
//                                                 <FormControl type="text" name="bill_pincode"
//                                                     value={formData.bill_pincode}
//                                                     onChange={handleInputChange}
//                                                     placeholder='PIN Code'
//                                                 />
//                                                 {errors.bill_pincode && (
//                                                     <span className='text-danger'>{errors.bill_pincode}</span>
//                                                 )}
//                                             </FormGroup>


//                                             <FormGroup as={Col} md="12">
//                                                 <FormControl type="text" placeholder='House number and street name' name="bill_adderss_one"
//                                                     value={formData.bill_adderss_one}
//                                                     onChange={handleInputChange}
//                                                 />
//                                                 {errors.bill_adderss_one && (
//                                                     <span className='text-danger'>{errors.bill_adderss_one}</span>
//                                                 )}
//                                                 <br />
//                                                 <FormControl type="text" placeholder='Apartment, suite, unit, etc. (optional)' name="bill_adderss_two"
//                                                     value={formData.bill_adderss_two}
//                                                     onChange={handleInputChange}
//                                                 />
//                                             </FormGroup>


//                                         </Row>
//                                     </>
//                                 )}

//                                 <Row>
//                                     <Col sm={6}>

//                                     </Col>
//                                     <Col sm={6} className='text-end'>
//                                         <Button
//                                             className='btn btn-danger mt-3 py-3'
//                                             onClick={handlePlaceOrder}
//                                             disabled={isLoading}
//                                         >
//                                             {isLoading ? 'Please wait...' : 'Continue to Shipping'}
//                                         </Button>
//                                     </Col>
//                                 </Row>
//                             </div>
//                         </Col>
//                         <Col sm={4} >
//                             <OrderSummeryCheckup />
//                         </Col>
//                     </Row>

//                 </Container>
//             </div>
//         </>
//     )
// }

// export default CheckOut



















import React, { useState, useCallback } from 'react'
import { Button, Col, Container, Form, FormControl, FormGroup, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { fetch } from '../../../utils';
import useRazorpay from "react-razorpay";
import OrderSummeryCheckup from './OrderSummeryCheckup';

const CheckOut = () => {
    const Razorpay = useRazorpay();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.items);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const [shipToDifferentAddress, setShipToDifferentAddress] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // Add loading state

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

    const handlePlaceOrder = async () => {
        if (validateForm()) {
            try {
                setIsLoading(true); // Set loading state to true

                const body = {

                    customer_id: '',
                    customer_email: formData.customer_email,
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
        }
    };

    const [errors, setErrors] = useState({});
    const validateForm = () => {
        const newErrors = {};

        // Validate the customer email field.
        if (!formData.customer_email) {
            newErrors.customer_email = 'Email is required';
        } else if (!isValidEmail(formData.customer_email)) {
            newErrors.customer_email = 'Invalid email format';
        }


        if (!formData.ship_fname) {
            newErrors.ship_fname = 'First Name is required';
        }
        if (!formData.ship_lname) {
            newErrors.ship_lname = 'Last Name is required';
        }
        if (!formData.ship_adderss_one) {
            newErrors.ship_adderss_one = 'Address is required';
        }

        if (!formData.ship_pincode) {
            newErrors.ship_pincode = 'PIN code is required';
        }
        if (!formData.ship_city) {
            newErrors.ship_city = 'City is required';
        }
        if (!formData.ship_state) {
            newErrors.ship_state = 'State is required';
        } if (!formData.ship_country) {
            newErrors.ship_country = 'Country is required';
        }
        if (!formData.ship_mobile) {
            newErrors.ship_mobile = 'Mobile is required';
        }


        if (!formData.bill_fname && shipToDifferentAddress) {
            newErrors.bill_fname = 'First Name is required';
        }
        if (!formData.bill_lname && shipToDifferentAddress) {
            newErrors.bill_lname = 'Last Name is required';
        }
        if (!formData.bill_adderss_one && shipToDifferentAddress) {
            newErrors.bill_adderss_one = 'Address is required';
        }

        if (!formData.bill_pincode && shipToDifferentAddress) {
            newErrors.bill_pincode = 'PIN code is required';
        }
        if (!formData.bill_city && shipToDifferentAddress) {
            newErrors.bill_city = 'City is required';
        }
        if (!formData.bill_state && shipToDifferentAddress) {
            newErrors.bill_state = 'State is required';
        } if (!formData.bill_country && shipToDifferentAddress) {
            newErrors.bill_country = 'Country is required';
        }

        if (!isValidMobileNumber(formData.ship_mobile) && shipToDifferentAddress) {
            newErrors.ship_mobile = 'Mobile number must be 10 digits';
        }

        // Validate other fields similarly...

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
    const isValidMobileNumber = (mobile) => {
        // Check if the mobile number contains exactly 10 digits and consists of only numeric characters.
        return /^\d{10}$/.test(mobile);
    };
    return (
        <>
            <hr />
            <div>
                <Container>


                    <Row>
                        <Col sm={8} className='r-border '>
                            <div className='mb-4'>   <font> Home › Shipping › Payment</font> </div>
                            <h6 className='pull-left'>Contact</h6>
                            <p className='text-end'>
                                Have an account? <Link className='main-bg text-white px-2 rounded-1' to='/account/login'>Log in</Link>
                            </p>
                            <FormGroup as={Col} md="12">
                                <FormControl type="text" name='customer_email'
                                    value={formData.customer_email}
                                    onChange={handleInputChange}
                                    placeholder='Email'

                                />
                            </FormGroup>
                            {errors.customer_email && (
                                <span className='text-danger'>{errors.customer_email}</span>
                            )}

                            <div className='pt-5 checkout-style'>
                                <h6 className='text-dark mb-3'>Shipping address</h6>
                                <Row>
                                    <FormGroup as={Col} md="6" className='col-mt'>
                                        <FormControl type="text" name="ship_fname"
                                            value={formData.ship_fname}
                                            onChange={handleInputChange}
                                            placeholder='First Name'
                                        />
                                        {errors.ship_fname && (
                                            <span className='text-danger'>{errors.ship_fname}</span>
                                        )}
                                    </FormGroup>
                                    <FormGroup as={Col} md="6" className='col-mt'>
                                        <FormControl type="text" name="ship_lname"
                                            value={formData.ship_lname}
                                            onChange={handleInputChange}
                                            placeholder='Last Name'
                                        />
                                        {errors.ship_lname && (
                                            <span className='text-danger'>{errors.ship_lname}</span>
                                        )}
                                    </FormGroup>
                                    <FormGroup as={Col} md="4" className='col-mt'>
                                        <FormControl type="number" name="ship_mobile"
                                            value={formData.ship_mobile}
                                            onChange={handleInputChange}
                                            placeholder='Phone'
                                        />
                                        {errors.ship_mobile && (
                                            <span className='text-danger'>{errors.ship_mobile}</span>
                                        )}
                                    </FormGroup>
                                    <FormGroup as={Col} md="4" className='col-mt'>
                                        <FormControl type="text" name="ship_country"
                                            value={formData.ship_country}
                                            onChange={handleInputChange}
                                            placeholder='Country'
                                        />
                                        {errors.ship_country && (
                                            <span className='text-danger'>{errors.ship_country}</span>
                                        )}
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
                                        />
                                        {errors.ship_city && (
                                            <span className='text-danger'>{errors.ship_city}</span>
                                        )}
                                    </FormGroup>
                                    <FormGroup as={Col} md="4" className='col-mt'>
                                        <FormControl type="text" name="ship_state"
                                            value={formData.ship_state}
                                            onChange={handleInputChange}
                                            placeholder='State'
                                        />
                                        {errors.ship_state && (
                                            <span className='text-danger'>{errors.ship_state}</span>
                                        )}
                                    </FormGroup>
                                    <FormGroup as={Col} md="4" className='col-mt'>
                                        <FormControl type="number" name="ship_pincode"
                                            value={formData.ship_pincode}
                                            onChange={handleInputChange}
                                            placeholder='PIN Code'
                                        />
                                        {errors.ship_pincode && (
                                            <span className='text-danger'>{errors.ship_pincode}</span>
                                        )}
                                    </FormGroup>

                                    <FormGroup as={Col} md="12" className='col-mt'>
                                        <FormControl type="text" placeholder='Address' name="ship_adderss_one"
                                            value={formData.ship_adderss_one}
                                            onChange={handleInputChange}
                                        />
                                        {errors.ship_adderss_one && (
                                            <span className='text-danger'>{errors.ship_adderss_one}</span>
                                        )}
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

                                                {errors.bill_fname && (
                                                    <span className='text-danger'>{errors.bill_fname}</span>
                                                )}
                                            </FormGroup>
                                            <FormGroup as={Col} md="6" className='col-mt'>
                                                <FormControl type="text" name="bill_lname"
                                                    value={formData.bill_lname}
                                                    onChange={handleInputChange}
                                                    placeholder='Last Name'
                                                />
                                                {errors.bill_lname && (
                                                    <span className='text-danger'>{errors.bill_lname}</span>
                                                )}
                                            </FormGroup>

                                            <FormGroup as={Col} md="4" className='col-mt'>
                                                <FormControl type="text" name="bill_mobile"
                                                    value={formData.bill_mobile}
                                                    onChange={handleInputChange}
                                                    placeholder='Phone'
                                                />
                                                {errors.bill_mobile && (
                                                    <span className='text-danger'>{errors.bill_mobile}</span>
                                                )}
                                            </FormGroup>

                                            <FormGroup as={Col} md="4" className='col-mt'>
                                                <FormControl type="text" name="bill_country"
                                                    value={formData.bill_country}
                                                    onChange={handleInputChange}
                                                    placeholder='Country'
                                                />
                                                {errors.bill_country && (
                                                    <span className='text-danger'>{errors.bill_country}</span>
                                                )}
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
                                                {errors.bill_city && (
                                                    <span className='text-danger'>{errors.bill_city}</span>
                                                )}

                                            </FormGroup>

                                            <FormGroup as={Col} md="4" className='col-mt'>
                                                <FormControl type="text" name="bill_state"
                                                    value={formData.bill_state}
                                                    onChange={handleInputChange}
                                                    placeholder='State'
                                                />
                                                {errors.bill_state && (
                                                    <span className='text-danger'>{errors.bill_state}</span>
                                                )}
                                            </FormGroup>

                                            <FormGroup as={Col} md="4" className='col-mt'>
                                                <FormControl type="text" name="bill_pincode"
                                                    value={formData.bill_pincode}
                                                    onChange={handleInputChange}
                                                    placeholder='PIN Code'
                                                />
                                                {errors.bill_pincode && (
                                                    <span className='text-danger'>{errors.bill_pincode}</span>
                                                )}
                                            </FormGroup>


                                            <FormGroup as={Col} md="12">
                                                <FormControl type="text" placeholder='House number and street name' name="bill_adderss_one"
                                                    value={formData.bill_adderss_one}
                                                    onChange={handleInputChange}
                                                />
                                                {errors.bill_adderss_one && (
                                                    <span className='text-danger'>{errors.bill_adderss_one}</span>
                                                )}
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
                                    <Col sm={6}>

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
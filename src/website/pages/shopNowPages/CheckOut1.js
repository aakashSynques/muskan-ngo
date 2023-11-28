// import React, { useState } from 'react'
// import { Button, Col, Container, Form, FormControl, FormGroup, Image, Row } from 'react-bootstrap'
// import OrderSummeryCheckup from './OrderSummeryCheckup';
// import { fetch } from '../../../utils';


// const CheckOut = () => {
//     const tokenDataFromLocalStorage = localStorage.getItem("muskan_token_data");
//     const parsedTokenData = tokenDataFromLocalStorage ? JSON.parse(tokenDataFromLocalStorage) : null;

//     const [pinCode, setPinCode] = useState('');
//     const [city, setCity] = useState('');
//     const [state, setState] = useState('');
//     const [country, setCountry] = useState('');
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [phone, setPhone] = useState('');
//     const [addressOne, setAddressOne] = useState('');
//     const [addressTwo, setAddressTwo] = useState('');
//     const [companyName, setCompanyName] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

const fetchPinCode = async () => {
    try {
        const body = {
            pincode: pinCode,
        };
        const pincoderes = await fetch('/pincode/by-pincode', 'POST', body, null);
        const pincodeDetails = pincoderes.data.data.pincode_details;
    } catch (error) {
        console.log('Error fetching pincode data:', error);
        setErrorMessage('No Pincode found');
    }
};
const handlePinCodeKeyDown = (e) => {
    if (e.key === 'Enter') {
        fetchPinCode();
    }
};

//     const handlePlaceOrder = async () => {
//         try {
//             const body = {
//                 customer_email: '',
//                 ship_fname: firstName,
//                 ship_lname: lastName,
//                 ship_company: companyName,
//                 ship_address_one: addressOne,
//                 ship_address_two: addressTwo,
//                 ship_pincode: pinCode,
//                 ship_city: city,
//                 ship_state: state,
//                 ship_country: country,
//                 ship_mobile: phone,



//             };
//             const response = await fetch('/order/save', 'POST', body, null);
//             if (response) {

//             } else {
//             }
//         } catch (err) {
//             console.error('An error occurred:', err);
//         } finally {
//         }
//     };
//     return (
//         <div>
//             <Container>
//                 <Row>
//                     <Col sm={8} className='r-border '>
//                         <div className='mb-4'>   <font> Home › CheckOut</font> </div>
//                         <div className='pt-4 checkout-style'>
//                             <h6 className='text-dark mb-3'>Shipping address</h6>
//                             <FormGroup as={Col} md="12" className='col-mt'>
//                                 <FormControl type="mail" placeholder='Enter Your Email' required />
//                             </FormGroup>
//                             <Row>
//                                 <FormGroup as={Col} md="4" className='col-mt'>
//                                     <FormControl
//                                         type="number"
//                                         placeholder='PIN Code'
//                                         value={pinCode}
//                                         onChange={(e) => setPinCode(e.target.value)}
//                                         onKeyDown={handlePinCodeKeyDown}
//                                     />
//                                     {errorMessage && <div className="text-danger">{errorMessage}</div>}
//                                 </FormGroup>
//                                 <FormGroup as={Col} md="4" className='col-mt'>
//                                     <FormControl
//                                         type="text"
//                                         placeholder='City'
//                                         value={city}
//                                         readOnly
//                                     />
//                                 </FormGroup>
//                                 <FormGroup as={Col} md="4" className='col-mt'>
//                                     <FormControl
//                                         type="text"
//                                         placeholder='State'
//                                         value={state}
//                                         readOnly
//                                     />
//                                 </FormGroup>
//                                 <FormGroup as={Col} md="6" className='col-mt'>
//                                     <FormControl type="text" placeholder='First Name'
//                                         value={firstName}
//                                         onChange={(e) => setFirstName(e.target.value)} />
//                                 </FormGroup>
//                                 <FormGroup as={Col} md="6" className='col-mt'>
//                                     <FormControl type="text" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} required />
//                                 </FormGroup>
//                                 <FormGroup as={Col} md="4" className="col-mt">
//                                     <FormControl type="number" placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} required />
//                                 </FormGroup>
//                                 <FormGroup as={Col} md="4" className='col-mt'>
//                                     <FormControl
//                                         type="text"
//                                         placeholder='Country'
//                                         value={country}
//                                         readOnly
//                                     />
//                                 </FormGroup>
//                                 <FormGroup as={Col} md="4" className='col-mt'  >
//                                     <FormControl type="text" placeholder='Company Name (optional)' value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
//                                 </FormGroup>
//                                 <FormGroup as={Col} md="12" className='col-mt'>
//                                     <FormControl type="text" placeholder='Address' value={addressOne} onChange={(e) => setAddressOne(e.target.value)} />
//                                 </FormGroup>
//                                 <FormGroup as={Col} md="12" className='col-mt'>
//                                     <FormControl type="text" placeholder='Apartment, suite, unit, etc. (optional)' value={addressTwo} onChange={(e) => setAddressTwo(e.target.value)}
//                                     />
//                                 </FormGroup>


//                                 <div className='pt-4'>
//                                     <label>
//                                         <input
//                                             type="checkbox"
//                                         // checked={shipToDifferentAddress}
//                                         // onChange={handleCheckboxChange}
//                                         />
//                                         &nbsp; Ship to a different address?
//                                     </label>
//                                 </div>
//                             </Row>



//                             <Row>
//                                 <FormGroup as={Col} md="4" className='col-mt'>
//                                     <FormControl
//                                         type="number"
//                                         placeholder='PIN Code'
//                                         value={pinCode}
//                                         onChange={(e) => setPinCode(e.target.value)}
//                                         onKeyDown={handlePinCodeKeyDown}
//                                     />
//                                     {errorMessage && <div className="text-danger">{errorMessage}</div>}
//                                 </FormGroup>
//                                 <FormGroup as={Col} md="4" className='col-mt'>
//                                     <FormControl
//                                         type="text"
//                                         placeholder='City'
//                                         value={city}
//                                         readOnly
//                                     />
//                                 </FormGroup>
//                                 <FormGroup as={Col} md="4" className='col-mt'>
//                                     <FormControl
//                                         type="text"
//                                         placeholder='State'
//                                         value={state}
//                                         readOnly
//                                     />
//                                 </FormGroup>
//                                 <FormGroup as={Col} md="6" className='col-mt'>
//                                     <FormControl type="text" placeholder='First Name'
//                                         value={firstName}
//                                         onChange={(e) => setFirstName(e.target.value)} />
//                                 </FormGroup>
//                                 <FormGroup as={Col} md="6" className='col-mt'>
//                                     <FormControl type="text" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} required />
//                                 </FormGroup>
//                                 <FormGroup as={Col} md="4" className="col-mt">
//                                     <FormControl type="number" placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} required />
//                                 </FormGroup>
//                                 <FormGroup as={Col} md="4" className='col-mt'>
//                                     <FormControl
//                                         type="text"
//                                         placeholder='Country'
//                                         value={country}
//                                         readOnly
//                                     />
//                                 </FormGroup>
//                                 <FormGroup as={Col} md="4" className='col-mt'  >
//                                     <FormControl type="text" placeholder='Company Name (optional)' value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
//                                 </FormGroup>
//                                 <FormGroup as={Col} md="12" className='col-mt'>
//                                     <FormControl type="text" placeholder='Address' value={addressOne} onChange={(e) => setAddressOne(e.target.value)} />
//                                 </FormGroup>
//                                 <FormGroup as={Col} md="12" className='col-mt'>
//                                     <FormControl type="text" placeholder='Apartment, suite, unit, etc. (optional)' value={addressTwo} onChange={(e) => setAddressTwo(e.target.value)}
//                                     />
//                                 </FormGroup>
//                             </Row>





//                             <Row>
//                                 <Col sm={6} className='text-center p-3'>
//                                 </Col>
//                                 <Col sm={6} className='text-end'>
//                                     <Button className='btn btn-danger mt-3 py-3' onClick={handlePlaceOrder}>

//                                         Submit
//                                     </Button>
//                                 </Col>
//                             </Row>
//                         </div>
//                     </Col>
//                     <Col sm={4} >
//                         <OrderSummeryCheckup />
//                     </Col>
//                 </Row>

//             </Container>
//         </div>
//     )
// }

// export default CheckOut

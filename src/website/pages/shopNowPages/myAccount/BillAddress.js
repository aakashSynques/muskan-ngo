import React, { useState, useEffect } from 'react';
import { Col, Row, FormControl, FormGroup, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { fetch } from '../../../../utils';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';


// const BillAddress = ({ show, handleClose, updateAddressData }) => {
const BillAddress = ({ show, handleClose, updateAddressData }) => {
    const tokenDataFromLocalStorage = localStorage.getItem("muskan_token_data");
    const parsedTokenData = tokenDataFromLocalStorage ? JSON.parse(tokenDataFromLocalStorage) : null;

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [addressData, setAddressData] = useState({});
    const getAddressData = async () => {
        try {
            setIsLoading(true); // Set loading state to true while fetching data
            const body = {
                customer_id: parsedTokenData.customer_id,
            };
            const response = await fetch('/customer/address', 'POST', body, null);
            setAddressData(response.data.data);
            setIsLoading(false); // Set loading state to false after data is fetched
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    };
    useEffect(() => {
        getAddressData();
    }, []);
    const hasBillingAddress = addressData && addressData.bill_adderss || "";


    useEffect(() => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            bill_fname: hasBillingAddress?.bill_fname || '',
            bill_lname: hasBillingAddress?.bill_lname || '',
            bill_company: hasBillingAddress?.bill_company || '',
            bill_adderss_one: hasBillingAddress?.bill_adderss_one || '',
            bill_adderss_two: hasBillingAddress?.bill_adderss_two || '',
            bill_pincode: hasBillingAddress?.bill_pincode || '',
            bill_city: hasBillingAddress?.bill_city || '',
            bill_state: hasBillingAddress?.bill_state || '',
            bill_country: hasBillingAddress?.bill_country || '',
            bill_mobile: hasBillingAddress?.bill_mobile || '',
        }));
    }, [hasBillingAddress]);



    const [formData, setFormData] = useState({
        customer_email: '',
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

    const [validationErrors, setValidationErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const handleInputChange = (event) => {
        const { name, value, placeholder } = event.target;
        setValidationErrors({
            ...validationErrors,
            [name]: '',
        });
        setFormData({
            ...formData,
            [name]: value,
        });
        setValidationErrors((prevErrors) => ({
            ...prevErrors,
            [name]: value.trim() ? '' : `${placeholder || name} is required`,
        }));

    };

    const validateForm = () => {
        const errors = {};
        if (formData.bill_fname.trim() === '') {
            errors.bill_fname = 'First Name is required';
        }
        if (formData.bill_lname.trim() === '') {
            errors.bill_lname = 'Last Name is required';
        }
        if (formData.bill_adderss_one.trim() === '') {
            errors.bill_adderss_one = 'Address is required';
        }
        if (formData.bill_pincode.trim() === '') {
            errors.bill_pincode = 'PIN Code is required';
        }
        if (formData.bill_mobile.trim() === '') {
            errors.bill_mobile = 'Mobile is required';
        }
        if (formData.bill_city.trim() === '') {
            errors.bill_city = 'City is required';
        }
        if (formData.bill_state.trim() === '') {
            errors.bill_state = 'State is required';
        }
        if (formData.bill_country.trim() === '') {
            errors.bill_country = 'Country is required';
        }
        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };


    const handleBillingAdd = async () => {
        if (validateForm()) {
            try {
                const body = {
                    customer_id: parsedTokenData.customer_id,
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
                }
                const response = await fetch('/customer/save-bill-addre', 'POST', body, null);
                if (response.data) {
                    updateAddressData();  // Call the callback to refresh address data
                    handleClose();
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
    };


    const [pinCode, setPinCode] = useState('');
    const [pinCodeDetails, setPinCodeDetails] = useState(null);
    const [errorMessagePin, setErrorMessagePin] = useState("");
    const fetchPinCode = async () => {
        try {
            const body = {
                pincode: pinCode,
            };
            const pincoderes = await fetch('/pincode/by-pincode', 'POST', body, null);
            const pincodeDetails = pincoderes.data.data.pincode_details;
            if (pincodeDetails) {
                setPinCodeDetails(pincodeDetails);
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    bill_city: pincodeDetails.city || prevFormData.bill_city,
                    bill_state: pincodeDetails.state || prevFormData.bill_state,
                    bill_country: pincodeDetails.country || prevFormData.bill_country,

                }));
            } else {
                setErrorMessagePin('No Pincode found');
            }
        } catch (error) {
            setErrorMessagePin('No Pincode found');
        }
    };

    const handlePinCodeKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === 'Tab') {
            e.preventDefault();
            fetchPinCode();
        }
    };
    const handlePinCodeBlur = () => {
        fetchPinCode();
    };


    return (
        <div>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal show={show} size='lg' onHide={handleClose}>

                    <Modal.Header closeButton>
                        <Modal.Title>Billing Address</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <FormGroup as={Col} md="6" className='py-1'>
                                <Form.Label>First Name</Form.Label>
                                <FormControl
                                    type="text"
                                    placeholder='First Name'
                                    name="bill_fname"
                                    value={formData.bill_fname}
                                    onChange={handleInputChange}
                                />

                                {validationErrors.bill_fname && (
                                    <div className="text-danger">{validationErrors.bill_fname}</div>
                                )}
                            </FormGroup>
                            <FormGroup as={Col} md="6" className='py-1'>
                                <Form.Label>Last Name</Form.Label>
                                <FormControl
                                    type="text"
                                    placeholder='Last Name'
                                    name="bill_lname"
                                    value={formData.bill_lname}
                                    onChange={handleInputChange}
                                />
                                {validationErrors.bill_lname && (
                                    <div className="text-danger">{validationErrors.bill_fname}</div>
                                )}
                            </FormGroup>

                            <FormGroup as={Col} md="6" className='py-1'>
                                <Form.Label>Mobile</Form.Label>
                                <FormControl
                                    type="number"
                                    placeholder='Mobile'
                                    name="bill_mobile"
                                    value={formData.bill_mobile}
                                    onChange={handleInputChange}
                                />
                                {validationErrors.bill_mobile && (
                                    <div className="text-danger">{validationErrors.bill_mobile}</div>
                                )}
                            </FormGroup>

                            <FormGroup as={Col} md="6" className='py-1'>
                                <Form.Label>Address</Form.Label>
                                <FormControl
                                    type="text"
                                    placeholder='Address'
                                    name="bill_adderss_one"
                                    value={formData.bill_adderss_one}
                                    onChange={handleInputChange}
                                />
                                {validationErrors.bill_adderss_one && (
                                    <div className="text-danger">{validationErrors.bill_adderss_one}</div>
                                )}
                            </FormGroup>

                            <FormGroup as={Col} md="6" className='py-1'>
                                <Form.Label>Apartment, suite, unit, etc. (optional)</Form.Label>
                                <FormControl
                                    type="text"
                                    placeholder='Apartment, suite, unit,'
                                    name="bill_adderss_two"
                                    value={formData.bill_adderss_two}
                                    onChange={handleInputChange}
                                />
                            </FormGroup>

                            <FormGroup as={Col} md="6" className='py-1'>
                                <Form.Label>Company</Form.Label>
                                <FormControl
                                    type="text"
                                    placeholder='Company'
                                    name="bill_company"
                                    value={formData.bill_company}
                                    onChange={handleInputChange}
                                />
                            </FormGroup>

                            <FormGroup as={Col} md="6" className='col-mt'>
                                <Form.Label>PIN Code</Form.Label>
                                <FormControl
                                    type="number"
                                    placeholder='Pin code'
                                    name="bill_pincode"
                                    value={formData.bill_pincode}
                                    onChange={(e) => {
                                        handleInputChange(e);
                                        setPinCode(e.target.value);
                                    }}
                                    onKeyDown={handlePinCodeKeyDown}
                                    onBlur={handlePinCodeBlur}
                                />
                                {!errorMessagePin && validationErrors.bill_pincode && (
                                    <div className="text-danger">{validationErrors.bill_pincode}</div>
                                )}
                                <div className='text-danger'>{errorMessagePin}</div>
                            </FormGroup>



                            <FormGroup as={Col} md="6" className='py-1'>
                                <Form.Label>City</Form.Label>
                                <FormControl
                                    type="text"
                                    placeholder='City'
                                    name="bill_city"
                                    value={formData.bill_city}
                                    onChange={handleInputChange}
                                    readOnly
                                />
                                {validationErrors.bill_city && (
                                    <div className="text-danger">{validationErrors.bill_city}</div>
                                )}
                            </FormGroup>
                            <FormGroup as={Col} md="6" className='py-1'>
                                <Form.Label>State</Form.Label>
                                <FormControl
                                    type="text"
                                    placeholder='State'
                                    name="bill_state"
                                    value={formData.bill_state}
                                    onChange={handleInputChange}
                                    readOnly
                                />
                                {validationErrors.bill_state && (
                                    <div className="text-danger">{validationErrors.bill_state}</div>
                                )}
                            </FormGroup>
                            <FormGroup as={Col} md="6" className='py-1'>
                                <Form.Label>Country</Form.Label>
                                <FormControl
                                    type="text"
                                    placeholder='Country'
                                    name="bill_country"
                                    value={formData.bill_country}
                                    onChange={handleInputChange}
                                    readOnly
                                />
                                {validationErrors.bill_country && (
                                    <div className="text-danger">{validationErrors.bill_country}</div>
                                )}
                            </FormGroup>

                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleBillingAdd}>
                            {loading ? 'Wait...' : 'Save Address'}
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>

                </Modal>
            </div>
        </div>
    )
}

export default BillAddress;


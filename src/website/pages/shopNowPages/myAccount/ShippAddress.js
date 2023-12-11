import React, { useState, useEffect } from 'react';
import { Col, Row, FormControl, FormGroup, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { fetch } from '../../../../utils';
import { useSelector, useDispatch } from 'react-redux';

const ShippAddress = ({ show, handleClose, updateShipAddressData }) => {
    const tokenDataFromLocalStorage = localStorage.getItem("muskan_token_data");
    const parsedTokenData = tokenDataFromLocalStorage ? JSON.parse(tokenDataFromLocalStorage) : null;



    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const address = useSelector((state) => state.address.addressData1);
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
    const hasShippingAddress = addressData && addressData.ship_adderss;

    useEffect(() => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            ship_fname: hasShippingAddress?.ship_fname || '',
            ship_lname: hasShippingAddress?.ship_lname || '',
            ship_company: hasShippingAddress?.ship_company || '',
            ship_adderss_one: hasShippingAddress?.ship_adderss_one || '',
            ship_adderss_two: hasShippingAddress?.ship_adderss_two || '',
            ship_pincode: hasShippingAddress?.ship_pincode || '',
            ship_city: hasShippingAddress?.ship_city || '',
            ship_state: hasShippingAddress?.ship_state || '',
            ship_country: hasShippingAddress?.ship_country || '',
            ship_mobile: hasShippingAddress?.ship_mobile || '',
        }));
    }, [hasShippingAddress]);



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
    });
    const [validationErrors, setValidationErrors] = useState({}); // Store validation errors
    const [loading, setLoading] = useState(false); // Add loading state
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
        // Update error messages
        setValidationErrors((prevErrors) => ({
            ...prevErrors,
            [name]: value.trim() ? '' : `${placeholder || name} is required`,
        }));

    };

    const validateForm = () => {
        const errors = {};
        if (formData.ship_fname.trim() === '') {
            errors.ship_fname = 'First Name is required';
        }
        if (formData.ship_lname.trim() === '') {
            errors.ship_lname = 'Last Name is required';
        }
        if (formData.ship_adderss_one.trim() === '') {
            errors.ship_adderss_one = 'Address is required';
        }
        if (formData.ship_pincode.trim() === '') {
            errors.ship_pincode = 'PIN Code is required';
        }
        if (formData.ship_city.trim() === '') {
            errors.ship_city = 'City is required';
        }
        if (formData.ship_state.trim() === '') {
            errors.ship_state = 'State is required';
        }
        if (formData.ship_country.trim() === '') {
            errors.ship_country = 'Country is required';
        }
        if (formData.ship_country.trim() === '') {
            errors.ship_mobile = 'Mobile is required';
        }
        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleshipingAdd = async () => {
        if (validateForm()) {
            try {
                const body = {
                    customer_id: parsedTokenData.customer_id,
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
                }
                const response = await fetch('/customer/save-ship-addre', 'POST', body, null);
                if (response.data) {
                    updateShipAddressData();  // Call the callback to refresh address data
                    handleClose();
                }
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false); // Reset loading state after API call completes
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
                    ship_city: pincodeDetails.city || prevFormData.ship_city,
                    ship_state: pincodeDetails.state || prevFormData.ship_state,
                    ship_country: pincodeDetails.country || prevFormData.ship_country,

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
                        <Modal.Title>Shipping Address</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <FormGroup as={Col} md="6" className='py-1'>
                                <Form.Label>First Name</Form.Label>
                                <FormControl
                                    type="text"
                                    placeholder='First Name'
                                    name="ship_fname"
                                    value={formData.ship_fname}
                                    onChange={handleInputChange}
                                />

                                {validationErrors.ship_fname && (
                                    <div className="text-danger">{validationErrors.ship_fname}</div>
                                )}
                            </FormGroup>
                            <FormGroup as={Col} md="6" className='py-1'>
                                <Form.Label>Last Name</Form.Label>
                                <FormControl
                                    type="text"
                                    placeholder='Last Name'
                                    name="ship_lname"
                                    value={formData.ship_lname}
                                    onChange={handleInputChange}
                                />
                                {validationErrors.ship_lname && (
                                    <div className="text-danger">{validationErrors.ship_fname}</div>
                                )}
                            </FormGroup>

                            <FormGroup as={Col} md="6" className='py-1'>
                                <Form.Label>Mobile</Form.Label>
                                <FormControl
                                    type="number"
                                    placeholder='Mobile'
                                    name="ship_mobile"
                                    value={formData.ship_mobile}
                                    onChange={handleInputChange}
                                />
                                {validationErrors.ship_mobile && (
                                    <div className="text-danger">{validationErrors.ship_mobile}</div>
                                )}
                            </FormGroup>

                            <FormGroup as={Col} md="6" className='py-1'>
                                <Form.Label>Address</Form.Label>
                                <FormControl
                                    type="text"
                                    placeholder='Address'
                                    name="ship_adderss_one"
                                    value={formData.ship_adderss_one}
                                    onChange={handleInputChange}
                                />
                                {validationErrors.ship_adderss_one && (
                                    <div className="text-danger">{validationErrors.ship_adderss_one}</div>
                                )}
                            </FormGroup>

                            <FormGroup as={Col} md="6" className='py-1'>
                                <Form.Label>Apartment, suite, unit, etc. (optional)</Form.Label>
                                <FormControl
                                    type="text"
                                    placeholder='Apartment, suite, unit,'
                                    name="ship_adderss_two"
                                    value={formData.ship_adderss_two}
                                    onChange={handleInputChange}
                                />
                            </FormGroup>

                            <FormGroup as={Col} md="6" className='py-1'>
                                <Form.Label>Company</Form.Label>
                                <FormControl
                                    type="text"
                                    placeholder='Company'
                                    name="ship_company"
                                    value={formData.ship_company}
                                    onChange={handleInputChange}
                                />
                            </FormGroup>

                            <FormGroup as={Col} md="6" className='col-mt'>
                                <Form.Label>PIN Code</Form.Label>
                                <FormControl
                                    type="number"
                                    placeholder='Pin code'
                                    name="ship_pincode"
                                    value={formData.ship_pincode}
                                    onChange={(e) => {
                                        handleInputChange(e);
                                        setPinCode(e.target.value);
                                    }}
                                    onKeyDown={handlePinCodeKeyDown}
                                    onBlur={handlePinCodeBlur}
                                />
                                {!errorMessagePin && validationErrors.ship_pincode && (
                                    <div className="text-danger">{validationErrors.ship_pincode}</div>
                                )}
                                <div className='text-danger'>{errorMessagePin}</div>
                            </FormGroup>



                            <FormGroup as={Col} md="6" className='py-1'>
                                <Form.Label>City</Form.Label>
                                <FormControl
                                    type="text"
                                    placeholder='City'
                                    name="ship_city"
                                    value={formData.ship_city}
                                    onChange={handleInputChange}
                                    readOnly
                                />
                                {validationErrors.ship_city && (
                                    <div className="text-danger">{validationErrors.ship_city}</div>
                                )}
                            </FormGroup>
                            <FormGroup as={Col} md="6" className='py-1'>
                                <Form.Label>State</Form.Label>
                                <FormControl
                                    type="text"
                                    placeholder='State'
                                    name="ship_state"
                                    value={formData.ship_state}
                                    onChange={handleInputChange}
                                    readOnly
                                />
                                {validationErrors.ship_state && (
                                    <div className="text-danger">{validationErrors.ship_state}</div>
                                )}
                            </FormGroup>
                            <FormGroup as={Col} md="6" className='py-1'>
                                <Form.Label>Country</Form.Label>
                                <FormControl
                                    type="text"
                                    placeholder='Country'
                                    name="ship_country"
                                    value={formData.ship_country}
                                    onChange={handleInputChange}
                                    readOnly
                                />
                                {validationErrors.ship_country && (
                                    <div className="text-danger">{validationErrors.ship_country}</div>
                                )}
                            </FormGroup>

                        </Row>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleshipingAdd}>
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

export default ShippAddress;

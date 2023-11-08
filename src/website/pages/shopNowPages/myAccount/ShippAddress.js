// import React from 'react'

// const ShippAddress = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default ShippAddress


import React, { useState } from 'react';
import { Col, Row, FormControl, FormGroup, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { fetch } from '../../../../utils';

const ShippAddress = () => {
    const tokenDataFromLocalStorage = localStorage.getItem("muskan_token_data");
    const parsedTokenData = tokenDataFromLocalStorage ? JSON.parse(tokenDataFromLocalStorage) : null;
    const [show, setShow] = useState(false);
    const handleCloseShip = () => setShow(false);
    const handleShowShip = () => setShow(true);
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
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const validateForm = () => {
        const errors = {};
        // Add validation rules for each field here
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
        return Object.keys(errors).length === 0; // Return true if there are no errors
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
                    ship_adderss_two: formData.ship_adderss_one,
                    ship_pincode: formData.ship_pincode,
                    ship_city: formData.ship_city,
                    ship_state: formData.ship_state,
                    ship_country: formData.ship_country,
                    ship_mobile: formData.ship_mobile,
                }
                const response = await fetch('/customer/save-ship-addre', 'POST', body, null);
                if (response.data) {
                    handleCloseShip();
                }
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false); // Reset loading state after API call completes
            }
        }
    };

    return (
        <div>
            <h6 className=''>SHIPPING ADDRESS <font className='main-color' onClick={handleShowShip}>( Add ) </font></h6>


            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal show={show} size='lg' onHide={handleCloseShip}>
                    <Modal.Header closeButton>
                        <Modal.Title>Shiping Address</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <FormGroup as={Col} md="6" className='py-1'>
                                <Form.Label>First Name</Form.Label>
                                <FormControl
                                    type="text"
                                    name="ship_fname"
                                    placeholder='First Name'
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
                                    name="ship_lname"
                                    placeholder='Last Name'
                                    value={formData.ship_lname}
                                    onChange={handleInputChange}
                                />
                                {validationErrors.ship_lname && (
                                    <div className="text-danger">{validationErrors.ship_fname}</div>
                                )}
                            </FormGroup>

                            <FormGroup as={Col} md="6" className='py-1'>
                                <Form.Label>Compay</Form.Label>
                                <FormControl
                                    type="text"
                                    name="ship_company"
                                    placeholder='Company'
                                    value={formData.ship_company}
                                    onChange={handleInputChange}
                                />
                                {validationErrors.ship_company && (
                                    <div className="text-danger">{validationErrors.ship_company}</div>
                                )}
                            </FormGroup>


                            <FormGroup as={Col} md="6" className='py-1'>
                                <Form.Label>Address 1</Form.Label>
                                <FormControl
                                    type="text"
                                    name="ship_adderss_one"
                                    placeholder='Address 1'
                                    value={formData.ship_adderss_one}
                                    onChange={handleInputChange}
                                />
                                {validationErrors.ship_adderss_one && (
                                    <div className="text-danger">{validationErrors.ship_adderss_one}</div>
                                )}
                            </FormGroup>


                            <FormGroup as={Col} md="6" className='py-1'>
                                <Form.Label>Address 2</Form.Label>
                                <FormControl
                                    type="text"
                                    name="ship_adderss_two"
                                    placeholder='Address 2'
                                    value={formData.ship_adderss_two}
                                    onChange={handleInputChange}
                                />
                                {validationErrors.ship_adderss_two && (
                                    <div className="text-danger">{validationErrors.ship_adderss_two}</div>
                                )}
                            </FormGroup>

                            <FormGroup as={Col} md="6" className='py-1'>
                                <Form.Label>PIN Code</Form.Label>
                                <FormControl
                                    type="number"
                                    name="ship_pincode"
                                    placeholder='Pin code'
                                    value={formData.ship_pincode}
                                    onChange={handleInputChange}
                                />
                                {validationErrors.ship_pincode && (
                                    <div className="text-danger">{validationErrors.ship_pincode}</div>
                                )}
                            </FormGroup>

                            <FormGroup as={Col} md="6" className='py-1'>
                                <Form.Label>City</Form.Label>
                                <FormControl
                                    type="text"
                                    name="ship_city"
                                    placeholder='City'
                                    value={formData.ship_city}
                                    onChange={handleInputChange}
                                />
                                {validationErrors.ship_city && (
                                    <div className="text-danger">{validationErrors.ship_city}</div>
                                )}
                            </FormGroup>

                            <FormGroup as={Col} md="6" className='py-1'>
                                <Form.Label>State</Form.Label>
                                <FormControl
                                    type="text"
                                    name="ship_state"
                                    placeholder='State'
                                    value={formData.ship_state}
                                    onChange={handleInputChange}
                                />
                                {validationErrors.ship_state && (
                                    <div className="text-danger">{validationErrors.ship_state}</div>
                                )}
                            </FormGroup>

                            <FormGroup as={Col} md="6" className='py-1'>
                                <Form.Label>Country</Form.Label>
                                <FormControl
                                    type="text"
                                    name="ship_country"
                                    placeholder='Country'
                                    value={formData.ship_country}
                                    onChange={handleInputChange}
                                />
                                {validationErrors.ship_country && (
                                    <div className="text-danger">{validationErrors.ship_country}</div>
                                )}
                            </FormGroup>

                            <FormGroup as={Col} md="6" className='py-1'>
                                <Form.Label>Mobile</Form.Label>
                                <FormControl
                                    type="number"
                                    name="ship_mobile"
                                    placeholder='Mobile'
                                    value={formData.ship_mobile}
                                    onChange={handleInputChange}
                                />
                                {validationErrors.ship_mobile && (
                                    <div className="text-danger">{validationErrors.ship_mobile}</div>
                                )}
                            </FormGroup>

                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleshipingAdd}>
                            {loading ? 'Wait...' : 'Save Address'}
                        </Button>
                        <Button variant="secondary" onClick={handleCloseShip}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default ShippAddress;

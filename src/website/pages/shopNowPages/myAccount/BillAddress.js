import React, { useState } from 'react';
import { Col, Row, FormControl, FormGroup, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { fetch } from '../../../../utils';

const BillAddress = ({ show, handleClose }) => {
    const tokenDataFromLocalStorage = localStorage.getItem("muskan_token_data");
    const parsedTokenData = tokenDataFromLocalStorage ? JSON.parse(tokenDataFromLocalStorage) : null;
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
        if (formData.bill_city.trim() === '') {
            errors.bill_city = 'City is required';
        }
        if (formData.bill_state.trim() === '') {
            errors.bill_state = 'State is required';
        }
        if (formData.bill_country.trim() === '') {
            errors.bill_country = 'Country is required';
        }
        if (formData.bill_country.trim() === '') {
            errors.bill_mobile = 'Mobile is required';
        }

        setValidationErrors(errors);
        return Object.keys(errors).length === 0; // Return true if there are no errors
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
                    bill_adderss_two: formData.bill_adderss_one,
                    bill_pincode: formData.bill_pincode,
                    bill_city: formData.bill_city,
                    bill_state: formData.bill_state,
                    bill_country: formData.bill_country,
                    bill_mobile: formData.bill_mobile,
                }
                const response = await fetch('/customer/save-bill-addre', 'POST', body, null);
                if (response.data) {
                    handleClose();
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
                                    name="bill_fname"
                                    placeholder='First Name'
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
                                    name="bill_lname"
                                    placeholder='Last Name'
                                    value={formData.bill_lname}
                                    onChange={handleInputChange}
                                />
                                {validationErrors.bill_lname && (
                                    <div className="text-danger">{validationErrors.bill_fname}</div>
                                )}
                            </FormGroup>

                            <FormGroup as={Col} md="6" className='py-1'>
                                <Form.Label>Compay</Form.Label>
                                <FormControl
                                    type="text"
                                    name="bill_company"
                                    placeholder='Company'
                                    value={formData.bill_company}
                                    onChange={handleInputChange}
                                />
                                {validationErrors.bill_company && (
                                    <div className="text-danger">{validationErrors.bill_company}</div>
                                )}
                            </FormGroup>


                            <FormGroup as={Col} md="6" className='py-1'>
                                <Form.Label>Address 1</Form.Label>
                                <FormControl
                                    type="text"
                                    name="bill_adderss_one"
                                    placeholder='Address 1'
                                    value={formData.bill_adderss_one}
                                    onChange={handleInputChange}
                                />
                                {validationErrors.bill_adderss_one && (
                                    <div className="text-danger">{validationErrors.bill_adderss_one}</div>
                                )}
                            </FormGroup>


                            <FormGroup as={Col} md="6" className='py-1'>
                                <Form.Label>Address 2</Form.Label>
                                <FormControl
                                    type="text"
                                    name="bill_adderss_two"
                                    placeholder='Address 2'
                                    value={formData.bill_adderss_two}
                                    onChange={handleInputChange}
                                />
                                {validationErrors.bill_adderss_two && (
                                    <div className="text-danger">{validationErrors.bill_adderss_two}</div>
                                )}
                            </FormGroup>

                            <FormGroup as={Col} md="6" className='py-1'>
                                <Form.Label>PIN Code</Form.Label>
                                <FormControl
                                    type="number"
                                    name="bill_pincode"
                                    placeholder='Pin code'
                                    value={formData.bill_pincode}
                                    onChange={handleInputChange}
                                />
                                {validationErrors.bill_pincode && (
                                    <div className="text-danger">{validationErrors.bill_pincode}</div>
                                )}
                            </FormGroup>

                            <FormGroup as={Col} md="6" className='py-1'>
                                <Form.Label>City</Form.Label>
                                <FormControl
                                    type="text"
                                    name="bill_city"
                                    placeholder='City'
                                    value={formData.bill_city}
                                    onChange={handleInputChange}
                                />
                                {validationErrors.bill_city && (
                                    <div className="text-danger">{validationErrors.bill_city}</div>
                                )}
                            </FormGroup>

                            <FormGroup as={Col} md="6" className='py-1'>
                                <Form.Label>State</Form.Label>
                                <FormControl
                                    type="text"
                                    name="bill_state"
                                    placeholder='State'
                                    value={formData.bill_state}
                                    onChange={handleInputChange}
                                />
                                {validationErrors.bill_state && (
                                    <div className="text-danger">{validationErrors.bill_state}</div>
                                )}
                            </FormGroup>

                            <FormGroup as={Col} md="6" className='py-1'>
                                <Form.Label>Country</Form.Label>
                                <FormControl
                                    type="text"
                                    name="bill_country"
                                    placeholder='Country'
                                    value={formData.bill_country}
                                    onChange={handleInputChange}
                                />
                                {validationErrors.bill_country && (
                                    <div className="text-danger">{validationErrors.bill_country}</div>
                                )}
                            </FormGroup>

                            <FormGroup as={Col} md="6" className='py-1'>
                                <Form.Label>Mobile</Form.Label>
                                <FormControl
                                    type="number"
                                    name="bill_mobile"
                                    placeholder='Mobile'
                                    value={formData.bill_mobile}
                                    onChange={handleInputChange}
                                />
                                {validationErrors.bill_mobile && (
                                    <div className="text-danger">{validationErrors.bill_mobile}</div>
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

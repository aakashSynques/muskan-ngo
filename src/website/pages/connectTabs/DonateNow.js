import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, FormControl, Button, Image } from 'react-bootstrap';
import CaptchaComponent from '../../component/CaptchaComponent';
import { fetch } from '../../../utils';
const DonateNow = () => {
  const [captchaValue, setCaptchaValue] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [headsData, setHeadsData] = useState();
  const [errorMessage, setErrorMessage] = useState('');

  const getDonateHeads = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/donation/heads', 'get', null, null);
      setHeadsData(response.data.data.headList);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getDonateHeads();
  }, []);

  const [selectedItem, setSelectedItem] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [donationAmount, setDonationAmount] = useState(0);
  const handleClick = (index) => {
    if (selectedItem !== index) {
      setCustomAmount('');

    }
    setSelectedItem(index);
    if (index === 'other') {
      setDonationAmount(parseFloat(customAmount) || 0);
    } else if (headsData && headsData[index]) {
      setDonationAmount(parseFloat(headsData[index].head_amount) || 0);
    }

    if (validationErrors.donationAmount) {
      setValidationErrors({ ...validationErrors, donationAmount: '' });
    }
  };
  const [validationErrors, setValidationErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    address: '',

  });
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    address: '',
  });


  const handleAmountChange = (e) => {
    const enteredAmount = parseFloat(e.target.value);
    if (donationAmount !== null && enteredAmount <= donationAmount) {
      setErrorMessage('Entered amount should be greater than or equal to the selected donation amount.');
    } else {
      setErrorMessage('');
    }
    setDonationAmount(enteredAmount);
  };

  const handleCaptchaChange = (value) => {

  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (selectedItem !== 'other' && !donationAmount) {
      errors.donationAmount = 'Donation amount is required';
      isValid = false;
    } else if (selectedItem === 'other' && (!customAmount || customAmount <= 0)) {
      errors.donationAmount = 'Enter donation amount';
      isValid = false;
    }

    if (!formData.firstName.trim()) {
      errors.firstName = 'First Name is required';
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      errors.lastName = 'Last Name is required';
      isValid = false;
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Invalid email address';
      isValid = false;
    }
    if (!formData.mobile.trim()) {
      errors.mobile = 'Mobile is required';
      isValid = false;
    }
    if (!formData.address.trim()) {
      errors.address = 'Address is required';
      isValid = false;
    }


    if (!captchaValue) {
      errors.captcha = 'Please complete the reCAPTCHA';
    }

    setValidationErrors(errors);
    return isValid;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    try {
      if (validateForm()) {
        const body = {
          donationOption: selectedItem === 'other' ? 'other' : headsData[selectedItem]?.head_name,
          amount: donationAmount || customAmount,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          mobile: formData.mobile,
          address: formData.address,
        };
        const response = await fetch('/form/save-contact-us', 'POST', body, null);
        // Handle the response as needed
      }
    } catch (error) {
      // Handle errors
    }
  };


  return (
    <>
      <p><em><strong>Together, let’s make the world one bit better!</strong></em></p>
      {/* <div className="button-list">
        <hr />
        <h5 className="mb-0 p-0"> <strong>Choose Contribution Amount <span className='text-danger'>*</span> </strong></h5>

        {headsData?.map((i, index) => (
          <li key={index}>
            <label
              className={`daily-anadhaanam acc ${selectedItem === index ? 'acc-active' : ''}`}
              onClick={() => handleClick(index)}
            >
              <input
                type="radio"
                name="donationOption"
                value={index}
                checked={selectedItem === index}
                onChange={() => handleClick(index)}
              />
              <div className="daily-text">{i.head_name}</div>
              <span className="daily-amt">
                &nbsp; <strong>₹ {i.head_amount}</strong>
              </span>
            </label>
          </li>
        ))}

        <li>
          <label className={`daily-anadhaanam acc ${selectedItem === 'other' ? 'acc-active' : ''}`}>
            <input
              type="radio"
              name="donationOption"
              value="other"
              checked={selectedItem === 'other'}
              onChange={() => handleClick('other')}
            />
            <div className="daily-text" style={{ width: '15px' }}>
              <strong> <i className="fa fa-inr"></i> </strong>
            </div>
            <input
              type='number'
              style={{ width: "320px" }}
              placeholder='Type Your Own Amount'
              className={`border-0 ${selectedItem === 'other' ? 'acc-input-place acc-active' : ''}`}
              onClick={() => handleClick('other')}
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
            />
          </label>
        </li>

        {selectedItem !== null && selectedItem !== 'other' && (
          <div className='mt-2'>
            <strong style={{ fontSize: '17px' }}>{selectedItem === 'other' ? 'other' : headsData[selectedItem]?.head_name} : </strong>
            <input
              type="number"
              value={donationAmount}
              onChange={handleAmountChange}
            />
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
          </div>
        )}


        {validationErrors.donationAmount && (
          <p className="error text-danger m-0">{validationErrors.donationAmount}</p>
        )}

        <h6 className='py-2 mt-4 main-color'>Your contribution amount: <i class="fa fa-inr"></i> {donationAmount || customAmount || 0}</h6>
      </div> */}

      <div className='parsnal-info'>
        <hr />
        <h5 className='mb-0 p-0'>
          <strong>Personal information <span className='text-danger'>*</span> </strong>
        </h5>
        <Form className='mt-3'>
          <Row>
            <Form.Group className="mb-3" as={Col} md="6">
              <FormControl
                type='text'
                name='firstName'
                placeholder='First Name *'
                className='contact-input'
                value={formData.firstName}
                onChange={(e) => {
                  const value = e.target.value;
                  setFormData({ ...formData, firstName: value });
                  setValidationErrors((prevErrors) => ({
                    ...prevErrors,
                    firstName: value.trim() ? '' : 'First Name is required',
                  }));
                }}
              />
              {validationErrors.firstName && <p className="error text-danger m-0">{validationErrors.firstName}</p>}
            </Form.Group>
            <Form.Group className="mb-3" as={Col} md="6">
              <FormControl
                type='text'
                name='lastName'
                placeholder='Last Name *'
                className='contact-input'
                value={formData.lastName}
                onChange={(e) => {
                  const value = e.target.value;
                  setFormData({ ...formData, lastName: value });
                  setValidationErrors((prevErrors) => ({
                    ...prevErrors,
                    lastName: value.trim() ? '' : 'Last Name is required',
                  }));
                }}
              />
              {validationErrors.lastName && <p className="error text-danger m-0">{validationErrors.lastName}</p>}

            </Form.Group>

            <Form.Group className="mb-3" as={Col} md="6">
              <FormControl
                type='email'
                name='email'
                placeholder='E-mail Address *'
                className='contact-input'
                value={formData.email}
                onChange={(e) => {
                  const value = e.target.value;
                  setFormData({ ...formData, email: value });
                  setValidationErrors((prevErrors) => ({
                    ...prevErrors,
                    email: value.trim() ? '' : 'Email is required',
                  }));
                }}

              />
              {validationErrors.email && <p className="error text-danger m-0">{validationErrors.email}</p>}
            </Form.Group>

            <Form.Group className="mb-3" as={Col} md="6">
              <FormControl
                type='number'
                name='mobile'
                placeholder='Mobile *'
                className='contact-input'
                value={formData.mobile}
                onChange={(e) => {
                  const value = e.target.value;
                  setFormData({ ...formData, mobile: value });
                  setValidationErrors((prevErrors) => ({
                    ...prevErrors,
                    mobile: value.trim() ? '' : 'Mobile  is required',
                  }));
                }}
              />
              {validationErrors.mobile && <p className="error text-danger m-0">{validationErrors.mobile}</p>}
            </Form.Group>
            <Form.Group className="mb-3" as={Col} md="12">
              <Form.Control
                as="textarea"
                name='address'
                placeholder='Address *'
                rows={3}
                className='contact-input'
                value={formData.address}
                onChange={(e) => {
                  const value = e.target.value;
                  setFormData({ ...formData, address: value });
                  setValidationErrors((prevErrors) => ({
                    ...prevErrors,
                    address: value.trim() ? '' : 'Address is required',
                  }));
                }}
              />
              {validationErrors.address && <p className="error text-danger m-0">{validationErrors.address}</p>}

            </Form.Group>

            <Form.Group className="mb-3">
              <CaptchaComponent onChange={handleCaptchaChange} />

              {validationErrors.captcha && <p className="error text-danger">{validationErrors.captcha}</p>}
            </Form.Group>

            <Form.Group as={Col} md="5">
              <Button
                className='rounded-1 px-5 py-2 btn btn-primary-1 px-5 py-2'
                onClick={handleSubmit}
              >
                Send Message
              </Button>
            </Form.Group>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default DonateNow;

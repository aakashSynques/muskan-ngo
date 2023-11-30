import React, { useState } from 'react';
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import CaptchaComponent from '../../component/CaptchaComponent';
import { fetch } from '../../../utils';
const Volunteer = () => {
  const [captchaValue, setCaptchaValue] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNo: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    file: '',
  });
  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };
  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Valid Email is required';
    }
    const phoneRegex = /^\d{10}$/;
    if (!formData.phoneNo.trim() || !phoneRegex.test(formData.phoneNo.trim())) {
      newErrors.phoneNo = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }
    if (!formData.state.trim()) {
      newErrors.state = 'State is required';
    }
    if (!formData.pincode.trim()) {
      newErrors.pincode = 'Pin code is required';
    } if (!formData.file.trim()) {
      newErrors.file = 'File is required';
    }
    if (!captchaValue) {
      newErrors.captcha = 'Please complete the reCAPTCHA';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const submitContact = async () => {
    try {
      setIsSubmitting(true);
      if (validateForm()) {
        const body = new FormData();
        body.append('full_name', formData.fullName);
        body.append('email', formData.email);
        body.append('phone_no', formData.phoneNo);
        body.append('address', formData.address);
        body.append('city', formData.city);
        body.append('state', formData.state);
        body.append('pincode', formData.pincode);
        body.append('file', formData.file);
        const response = await fetch('/form/save-volunteer', 'POST', body, null);
        if (response.data) {
          setFormData({
            fullName: '',
            email: '',
            phoneNo: '',
            address: '',
            city: '',
            state: '',
            pincode: '',
            file: '',
          });
          setCaptchaValue(null);
          setErrors({});
          setSubmitSuccess(true);
        } else {
          console.log('')
        }
      }
    } catch (error) {
      setIsSubmitting(false);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div>
      <Container>
        <Row>
          <Col sm={7}>
            <div className=''>
              <h3 className='main-color'>Volunteer Of Muskaan NGO</h3>
              <p>Whether it’s just a commitment of a few hours a week or a project based engagement, your involvement will make a difference. There are many ways to volunteer with us and some suggestions are outlined below. However, feel free to write to us with any ideas you have on how you would like to give your time to Muskaan. As we are a small organisation with limited resources, please only write to us if you are serious about volunteering and are able to give a commitment of at least 2 weeks. Kindly fill up this online form to express your interest and we will contact you.</p>
              <p>Conduct creative workshops : Self-expression is one of the greatest joys of learning. Help inspire our children with music, dance, theatre, painting, film-making or storytelling workshops</p>
              <p>Share your skills : Do you have a livelihood skill like carpentry, pottery, book binding, vehicle repairs, computer assembly or anything else which you would like to share?</p>
              <p>Illustration and Design : Help collect content, illustrate and design classroom teaching materials, activity material, children’s stories and other things</p>
              <div className='row'>
                <div className="elementor-icon-box-wrapper d-flex  col-sm-6">
                  <div className="main-color pe-3">
                    <i className="fa fa-phone" aria-hidden="true" style={{ fontSize: "34px" }}></i>
                  </div>
                  <div className="elementor-icon-box-content">
                    <h5 className="main-color">
                      <b>
                        PHONE NO
                      </b>
                    </h5>
                    <p className="elementor-icon-box-description">+91 7405297103
                    </p>
                  </div>
                </div>
                <div className="elementor-icon-box-wrapper d-flex  col-sm-6">
                  <div className="main-color pe-3">
                    <i className="fa fa-envelope" aria-hidden="true" style={{ fontSize: "28px" }}></i>
                  </div>
                  <div className="elementor-icon-box-content">
                    <h5 className="main-color">
                      <b>
                        EMAIL ID
                      </b>
                    </h5>
                    <p className="elementor-icon-box-description">muskaan@muskaan.org
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={5}>
            <Row>
              <Form.Group className="mb-3">
                <FormControl
                  type='text'
                  placeholder='Full Name'
                  className='contact-input'
                  name='fullName'
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && <p className="error text-danger m-0">{errors.fullName}</p>}
              </Form.Group>
              <Form.Group className="mb-3">
                <FormControl
                  type='mail'
                  placeholder='Email Address'
                  className='contact-input'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="error text-danger m-0">{errors.email}</p>}
              </Form.Group>
              <Form.Group className="mb-3">
                <FormControl
                  type='number'
                  placeholder='Phone No.'
                  className='contact-input'
                  name='phoneNo'
                  value={formData.phoneNo}
                  onChange={handleChange}
                />
                {errors.phoneNo && <p className="error text-danger m-0">{errors.phoneNo}</p>}
              </Form.Group>
              <Form.Group className="mb-3">
                <FormControl
                  type='text'
                  placeholder='Address'
                  className='contact-input'
                  name='address'
                  value={formData.address}
                  onChange={handleChange}
                />
                {errors.address && <p className="error text-danger m-0">{errors.address}</p>}
              </Form.Group>
              <Form.Group className="mb-3">
                <FormControl
                  type='text'
                  placeholder='City'
                  className='contact-input'
                  name='city'
                  value={formData.city}
                  onChange={handleChange}
                />
                {errors.city && <p className="error text-danger m-0">{errors.city}</p>}
              </Form.Group>
              <Form.Group className="mb-3">
                <FormControl
                  type='text'
                  placeholder='State'
                  className='contact-input'
                  name='state'
                  value={formData.state}
                  onChange={handleChange}
                />
                {errors.state && <p className="error text-danger m-0">{errors.state}</p>}
              </Form.Group>
              <Form.Group className="mb-3">
                <FormControl
                  type='number'
                  placeholder='Pin Code'
                  className='contact-input'
                  name='pincode'
                  value={formData.pincode}
                  onChange={handleChange}
                />
                {errors.pincode && <p className="error text-danger m-0">{errors.pincode}</p>}
              </Form.Group>
              <Form.Group className="mb-3">
                <FormControl
                  type='file'
                  className='contact-input'
                  name='file'
                  onChange={handleChange}
                />
                {errors.file && <p className="error text-danger m-0">{errors.file}</p>}
              </Form.Group>
              <Form.Group className="mb-3">
                <CaptchaComponent onChange={handleCaptchaChange} />
                {errors.captcha && <p className="error text-danger">{errors.captcha}</p>}
              </Form.Group>
              <Form.Group as={Col}>
                <Button
                  onClick={submitContact}
                  className='rounded-1 px-5 py-2'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Send Message'}
                </Button>
              </Form.Group>
              <Form.Group as={Col} >
                {submitSuccess && (
                  <h6 className="text-success">Form submitted successfully!</h6>
                )}
              </Form.Group>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Volunteer

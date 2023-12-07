import React, { useState } from 'react'
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap'
import { fetch } from '../../../utils';
import CaptchaComponent from '../../component/CaptchaComponent';

const Contect = () => {
  const [captchaValue, setCaptchaValue] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNo: '',
    message: '',
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    if (!captchaValue) {
      newErrors.captcha = 'Please complete the reCAPTCHA';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const submitContact = async () => {
    try {
      if (validateForm()) {
        const body = {
          full_name: formData.fullName,
          email: formData.email,
          phone_no: formData.phoneNo,
          message: formData.message,
        };
        const response = await fetch('/form/save-contact-us', 'POST', body, null);
        if (response.data) {
          setFormData({
            fullName: '',
            email: '',
            phoneNo: '',
            message: '',
          });
          setCaptchaValue(null);
          setErrors({});
          setSubmitSuccess(true);

          console.log('Submitted successfully');
        } else {
          alert('Error submitting form:', response.error);
        }
      }
    } catch (error) {
      // Handle any unexpected errors
      setIsSubmitting(false); // Reset loading state
    }
  };



  return (
    <div>
      <Container>
        <Row>
          <Col sm={5}>
            <h3>Information</h3>
            <div className="elementor-icon-box-wrapper d-flex  pt-2">
              <div className="main-color pe-3">
                <i className="fa fa-map-marker" aria-hidden="true" style={{ fontSize: "34px" }}></i>
              </div>
              <div className="elementor-icon-box-content">
                <h5 className="main-color">
                  <b>
                    ADDRESS
                  </b>
                </h5>
                <p className="elementor-icon-box-description">
                  Muskaan Mud Building – ‘Mitti Ka Ghar’ Plot No. 264-65, Behind Canara Bank, Landmark
                  – Left in the lane opposite D.P.S. School Bhadbhada Road, Neelbad, Bhopal – 462044	.
                </p>
              </div>
            </div>


            <div className="elementor-icon-box-wrapper d-flex  pt-2">
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


            <div className="elementor-icon-box-wrapper d-flex  pt-2">
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

            <div className="elementor-icon-box-wrapper d-flex  pt-2">
              <div className="main-color pe-3">
                <i className="fa fa-firefox" aria-hidden="true" style={{ fontSize: "28px" }}></i>
              </div>
              <div className="elementor-icon-box-content">
                <h5 className="main-color">
                  <b>
                    WEB ADDRESS
                  </b>
                </h5>
                <p className="elementor-icon-box-description">https://muskaan.org/
                </p>
              </div>
            </div>

            <div className='contact-social-icon'>
              <a href="#" className="fa fa-facebook text-white p-3 m-1" style={{ background: "#3B5998" }}></a>
              <a href="#" className="fa fa-twitter text-white p-3 m-1" style={{ background: "#55ACEE" }}></a>
              <a href="#" className="fa fa-instagram text-white p-3 m-1" style={{ background: "#125688" }}></a>
              <a href="#" className="fa fa-youtube text-white p-3 m-1" style={{ background: "#bb0000" }}></a>
            </div>

          </Col> <Col sm={1}></Col>
          <Col sm={6}>
            <h3>Have Any Question?</h3>
            <Form className='mt-5' >
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
                <Form.Group className="mb-3" as={Col} md="6">
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
                <Form.Group className="mb-3" as={Col} md="6">
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
                  <Form.Control
                    as="textarea"
                    rows={3}
                    className='contact-input'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && <p className="error text-danger m-0">{errors.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3">
                  <CaptchaComponent onChange={handleCaptchaChange} />
                  {errors.captcha && <p className="error text-danger">{errors.captcha}</p>}
                </Form.Group>

                <Form.Group as={Col} md="5">
                  <Button
                    onClick={submitContact}
                    className='rounded-1 px-5 py-2'
                    disabled={isSubmitting} // Disable the button during submission
                  >
                    {isSubmitting ? 'Submitting...' : 'Send Message'}
                  </Button>
                </Form.Group>

                <Form.Group as={Col} md='6'>
                  {submitSuccess && (
                    <h6 className="text-success">Form submitted successfully!</h6>
                  )}
                </Form.Group>
              </Row>
            </Form>

          </Col>
        </Row>
        <div className='mt-5'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.2669433714823!2d77.34868658675006!3d23.196940355799907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c5de3423bf189%3A0xfe3f16755d4a007b!2sMuskan%20NGO!5e0!3m2!1sen!2sin!4v1699943234969!5m2!1sen!2sin"
            width="100%" height="450" allowfullscreen="" loading="lazy" ></iframe>
        </div>
      </Container>
    </div>
  )
}

export default Contect



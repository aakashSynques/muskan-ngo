import React from 'react'
import { Container, Row, Col, Form, FormControl, Button, Image } from 'react-bootstrap'
import ReCAPTCHA from 'react-google-recaptcha';


const DonateNow = () => {
  return (
    <>
      <p>The work we do simply cannot be done without your support, period. There is always a child out there who can be educated or a life that can be turned around with rehabilitation. Help our children see the world around them as they learn to be independent and integrate with the mainstream.</p>
      <p><em> <strong>Together, let’s make the world one bit better!</strong></em></p>
      <p><strong>To Sponsor a child, please fill the form to connect with us.</strong></p>

      <Form className='mt-2'>
        <Row className="mb-3">

          <Form.Group className="mb-3" as={Col} md="4">
            <FormControl type='text' placeholder='Full Name' className='contact-input' /></Form.Group>
          <Form.Group className="mb-3" as={Col} md="4" >
            <FormControl type='text' placeholder='Email Address' className='contact-input' />         </Form.Group>
          <Form.Group className="mb-3" as={Col} md="4" >
            <FormControl type='number' placeholder='Phone  No.' className='contact-input' />
          </Form.Group>
          <Form.Group className="mb-3" as={Col} md="4">
            <FormControl type='text' placeholder='Address' className='contact-input' />
          </Form.Group>
          <Form.Group className="mb-3" as={Col} md="4" >
            <FormControl type='text' placeholder='City' className='contact-input' />
          </Form.Group>
          <Form.Group className="mb-3" as={Col} md="4">
            <FormControl type='text' placeholder='State' className='contact-input' />
          </Form.Group>
          <Form.Group className="mb-3" as={Col} md="4">
            <FormControl type='text' placeholder='Donation Amount' className='contact-input' />
          </Form.Group>
          <Form.Group className="mb-3" as={Col} md="4">
            <FormControl type='text' placeholder='Zip Code' className='contact-input' />
          </Form.Group>
          <Form.Group className="mb-3" as={Col} md="4">
            <FormControl type='file' placeholder='' className='contact-input' />
          </Form.Group>

          <Form.Group className='mt-5' as={Col} md="6">
         
                <ReCAPTCHA sitekey='YOUR_RECAPTCHA_SITE_KEY' />
          
          </Form.Group>

          <Form.Group className='mt-5 text-end' as={Col} md="6">
            <Button className='rounded-1 px-5 py-2'>Send Message</Button>
          </Form.Group>
        </Row>
      </Form>

    </>
  )
}

export default DonateNow

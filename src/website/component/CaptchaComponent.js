import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha';

const CaptchaComponent = ({ onChange }) => {
  return (
    <ReCAPTCHA
    sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
    // sitekey='6LeCACApAAAAANK8okpr0IjvQqfu2J9PLTYbIt34'
    onChange={onChange}
  />
  )
}

export default CaptchaComponent


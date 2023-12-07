import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha';

const CaptchaComponent = ({ onChange }) => {
  return (
    <ReCAPTCHA
    sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
    // sitekey='6LclpiEpAAAAAIcZa-Qu2mF5oniU-LYtE30_NFA6'
    onChange={onChange}
  />
  )
}

export default CaptchaComponent


import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, FormControl, Button, Image } from 'react-bootstrap';
import CaptchaComponent from '../../component/CaptchaComponent';
import { fetch } from '../../../utils';
const DonateNow = () => {
  const [captchaValue, setCaptchaValue] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [headsData, setHeadsData] = useState();


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

  console.log('headsData', headsData)


  return (
    <>
      <p><em> <strong>Together, let’s make the world one bit better!</strong></em></p>
      <p className='mb-0 p-0'><strong>To Sponsor a child, please fill the form to connect with us.</strong></p>

      <div class="button-list">
        {/* {headsData.map((item, index) => {
          <>
            asdfasd
          </>
        })} */}

        <ul>
          {headsData.map((i, index) => (
            <li className='donet-radio bg-success'>
              <label className='daily-anadhaanam '>
                <div class="daily-text">{i.head_name}</div>
                <span class="daily-amt">
                  &nbsp; <strong>₹ {i.head_amount}</strong>
                </span>
              </label>
            </li>
          ))}
        </ul>
        {/* <ul>
          <li className='donet-radio bg-success'>
            <label className='daily-anadhaanam '>
              <div class="daily-text">I wish to offer 11 Sadhakas a meal</div>
              <span class="daily-amt">
                &nbsp; <strong>₹ 1,100</strong>
              </span>
            </label>
          </li>
          <li className='donet-radio bg-white'>
            <label className='daily-anadhaanam '>
              <div class="daily-text">I wish to offer 11 Sadhakas a meal</div>
              <span class="daily-amt">
                &nbsp; <strong>₹ 1,100</strong>
              </span>
            </label>
          </li>
          <li className='donet-radio bg-white'>
            <label className='daily-anadhaanam '>
              <div class="daily-text">I wish to offer 11 Sadhakas a meal</div>
              <span class="daily-amt">
                &nbsp; <strong>₹ 1,100</strong>
              </span>
            </label>
          </li>
        </ul> */}
      </div>

    </>
  )
}

export default DonateNow


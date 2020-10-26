/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Slider } from 'antd';
import { ArrowRightOutlined, ClockCircleOutlined, FileOutlined } from '@ant-design/icons'
import yacht from '../../assets/images/yacht.png';
import CreditCard1 from '../../assets/images/cc-1.png';
import CreditCard2 from '../../assets/images/cc-2.png';
import UserImage from '../../assets/images/user.jpg';
import BackgroundImage from '../../assets/images/cloudy-mountain.jpg';

const Plan = () => {
  const [price, setPrice] = useState(20);
  const [hourly, setHourly] = useState(true);
  const priceMarks = {
    20: {
      label: <p>$20</p>
    },
    300: {
      label: <p>$300</p>
    }
  }
  return (
    <div className="plan">
      <div className="plan-wrapper">
        <div className="plan-info">
          <h1>Upgrade your plan</h1>
          <p className="upgrading-plan-msg">Please make the payment to start enjoying all the features of <br/>our premium plan as soon as possible.</p>
          <div className="current-plan">
            <div className="plan-property">
              <div className="yacht">
                <img src={yacht} alt="yacht" />
              </div>
              <div className="property">
                <h2>Small Business</h2>
                <a href="#">Change plan</a>
              </div>
            </div>
            <div className="plan-price">
              <sup>$ </sup>8,350 <sub>/ year</sub>
            </div>
          </div>
          <h2 id="payement-detail">Payment details</h2>
          <div className="credit-card">
            <div className="cc-info">
              <div className="cc-image">
                <img src={CreditCard1} alt="credit card" />
              </div>
              <div className="cc-hint">
                <h3>Credit card</h3>
                <span>2344 xxxx xxxx 8880</span>
              </div>
            </div>
            <div className="cc-input">
              <input type="text" placeholder="CVC" id="cvc-edit" />
            </div>
          </div>
          <div className="credit-card">
            <div className="cc-info">
              <div className="cc-image">
                <img src={CreditCard2} alt="credit card" />
              </div>
              <div className="cc-hint">
                <h3>Credit card</h3>
                <span>8890 xxxx xxxx 1234</span>
              </div>
            </div>
            <div className="cc-input">
              <input type="text" placeholder="CVC" id="cvc-edit" />
            </div>
          </div>
          <div className="add-payment-method">
            <a href="#">add payment method</a>
          </div>
          <div className="email-address">
            <input type="text" placeholder="Email address" id="email-address" />
          </div>
          <button id="proceed-btn">Proceed to payment <ArrowRightOutlined/></button>
        </div>
      </div>
    </div>
  )
}

export default Plan;
import React from 'react';
import Button from '../Button/Button';
import { FaMobileAlt } from 'react-icons/fa';
import './ContactBox.css';

const ContactBox = () => {
  return (
    <div className="contact-box">
      <div className="got-a-project">
        <p>Got a project for us?</p>
        <p>Let's Talk!</p>
      </div>

      <div className="consultation">
        <Button path="/contact" darkBg={false}>
          Get Online Consultation
        </Button>
      </div>

      <div className="call-us">
        <p>Call us to discuss details</p>
        <div className="call-us-phone">
          <FaMobileAlt className="call-us-phone-icon" />
          <p className="call-us-phone-text">+30 6942 841 613</p>
        </div>
      </div>
    </div>
  );
};

export default ContactBox;

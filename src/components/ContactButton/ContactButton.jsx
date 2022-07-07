import React from 'react';
import { Link } from 'react-router-dom';
import './ContactButton.css';

const ContactButton = ({ path, darkBg, children }) => {
  return (
    <Link
      className={`${darkBg ? 'contact-btn' : 'contact-btn light'}`}
      to={path}
    >
      {children}
    </Link>
  );
};

export default ContactButton;

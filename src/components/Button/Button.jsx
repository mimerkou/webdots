import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ path, darkBg, children }) => {
  return (
    <Link
      className={`${darkBg ? 'contact-btn' : 'contact-btn light'}`}
      to={path}
    >
      {children}
    </Link>
  );
};

export default Button;

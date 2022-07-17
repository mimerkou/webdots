import React from 'react';
import Logo from '../../assets/logo-small.png';
import { Link } from 'react-router-dom';
import { FaBars, FaMobileAlt } from 'react-icons/fa';
import Button from '../Button/Button';

import './Navbar.css';

const Navbar = ({ toggle }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="logo-image-container">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>

      <div className="right-menu">
        <div className="phone">
          <FaMobileAlt className="phone-icon" />
          <p className="phone-text">+30 6942 841 613</p>
        </div>

        <div className="contact">
          <Button path="/contact" darkBg={true}>
            Start a project
          </Button>
        </div>

        <div className="open-icon">
          <FaBars onClick={toggle} />

          {/* <div class="menu-btn" onClick={toggle}>
            <div class="menu-btn__burger"></div>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

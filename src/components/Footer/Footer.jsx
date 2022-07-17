import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
} from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer>
        <div className="footer-wrapper">
          <div className="sec aboutus">
            <h2>WebDots Digital Agency</h2>
            <p>
              "You cannot connect the dots looking forward, you can only connect
              them looking backwards. So you have to trust that the dots will
              somehow connect in your future." - Steve Jobs
            </p>

            <ul className="social-icons">
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>

          <div className="sec quick-links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/our-works">Our Works</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="sec contact-info">
            <h2>Contact Info</h2>
            <ul className="info">
              <li>
                <span>
                  <FaMapMarkerAlt />
                </span>
                <span>
                  Thisseos 40 Maroussi,
                  <br />
                  Athens Greece
                </span>
              </li>
              <li>
                <span>
                  <MdAccessTime />
                </span>
                <span>
                  Working time:
                  <br />
                  Mon to Fri, 10.00 - 18.00
                </span>
              </li>
              <li>
                <span>
                  <FaEnvelope />
                </span>
                <span>
                  <a href="mailto:nikos@webdots.gr">nikos@webdots.gr</a>
                </span>
              </li>
              {/* <li>
              <span>
                <FaMobileAlt />
              </span>
              <span>+30 6942 841 613</span>
            </li> */}
            </ul>
          </div>
        </div>
      </footer>

      <div className="copyright">
        <p>&copy; Copyright {year} WebDots - All rights reserved</p>
      </div>
    </>
  );
};

export default Footer;

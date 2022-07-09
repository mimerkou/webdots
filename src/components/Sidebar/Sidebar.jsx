import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div
      className={`${isOpen ? 'sidebar-container' : 'sidebar-container opened'}`}
    >
      <div className="sidebar-wrapper">
        <FaTimes className="close-icon" onClick={toggle} />
        <div className="links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'sidebar-link active' : 'sidebar-link'
            }
            onClick={toggle}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'sidebar-link active' : 'sidebar-link'
            }
            onClick={toggle}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? 'sidebar-link active' : 'sidebar-link'
            }
            onClick={toggle}
          >
            Services
          </NavLink>
          <NavLink
            to="/our-works"
            className={({ isActive }) =>
              isActive ? 'sidebar-link active' : 'sidebar-link'
            }
            onClick={toggle}
          >
            Our Works
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'sidebar-link active' : 'sidebar-link'
            }
            onClick={toggle}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

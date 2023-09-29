import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Components/Styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const location = useLocation();

  // Function to toggle the menu

  return (
    <>

    <nav className='navbar navbar-expand fixed-top'>
        <Link id="nav-link" to="/"
            className={`navbar-brand ${location.pathname === '/' ? 'active-page' : ''}`}
            >Jonas
        </Link>


      <ul className='navbar-nav'>
        <li className='nav-item'>
                <Link
                  to="/experience"
                  className={`nav-link ${location.pathname === '/experience' ? 'active-page' : ''}`}>
                  <FontAwesomeIcon className="nav-icon" icon={faLaptopCode} style={{color: "#485365",}} /> Erfaring
                </Link>
          </li>

          <li className='nav-item'>
              <Link
                  to="/work-experience"
                  className={`nav-link ${location.pathname === '/work-experience' ? 'active-page' : ''}`}>
                 <FontAwesomeIcon className="nav-icon" icon={faBriefcase} style={{color: "#485365",}} /> Yrkeserfaring
              </Link>
          </li>

          <li className='nav-item'>
            <Link
                    to="/education"
                    className={`nav-link ${location.pathname === '/education' ? 'active-page' : ''}`}>
                    <FontAwesomeIcon className="nav-icon" icon={faGraduationCap} style={{color: "#485365",}} /> Utdanning
            </Link>
             
          </li>
        </ul>


    </nav>

    </>
  );
};

export default Navbar;

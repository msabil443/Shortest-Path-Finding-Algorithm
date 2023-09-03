import React, { useState } from "react";
// import "./navbar.css";
import {
  FaGithubSquare,
  FaLinkedinIn,
  FaFileArchive,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>A</span>lgo
            <span>V</span>isual
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              {/* <NavLink to="/home" >Dijkstra</NavLink> */}
              {/* use navlink to move to this directory */}
            </li>
            <li>
              {/* <NavLink to="/about">about</NavLink> */}
            </li>
            <li>
              {/* <NavLink to="/service">services</NavLink> */}
            </li>
            <li>
              {/* <NavLink to="/contact">contact</NavLink> */}
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://github.com/msabil443"
                target="_blank">
                <FaGithubSquare className="github" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mohammed-sabil-4a1b68225/"
                target="_blank">
                <FaLinkedinIn className="LinkedIn" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/msabil443"
                target="_blank">
                <FaFileArchive className="file" />
              </a>
            </li>
          </ul>

          {/* hamburger menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Mohammed Sabil</h1>
      </section> */}
    </>
  );
};

export default Navbar;
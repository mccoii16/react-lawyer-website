import React, { useState } from "react";
import "./header.css";
import logo from "./assets/logo-light.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="desktop-menu">
          <ul>
            <li>
              <a href="/#">Home</a>
            </li>
            <li>
              <a href="/#">Service</a>
            </li>
            <li>
              <a href="/#">Clients</a>
            </li>
          </ul>
        </div>

        <div className="Logo">
          <img src={logo} alt="" />
        </div>

        <button>Contact US</button>

        <FontAwesomeIcon icon={faBars} onClick={toggleMobileMenu} />
      </nav>

      <div className={`mobile-menu ${mobileMenuVisible ? "visible" : ""}`}>
        <FontAwesomeIcon icon={faClose} onClick={toggleMobileMenu} />
        <img src={logo} alt="" />
        <ul>
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/#">Service</a>
          </li>
          <li>
            <a href="/#">Clients</a>
          </li>
        </ul>
      </div>

      <div className="hero-section">
        <h3>Need Any Help?</h3>
        <h1>Finest Defence Lawler</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button>CONTACT US</button>
      </div>
    </header>
  );
};

export default Header;

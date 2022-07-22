import NavItem from "../NavItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";
import React from "react";
import Dropdown from "../Dropdown";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="brand-name">
        <FontAwesomeIcon id="brand-logo" icon={faLayerGroup} />
        Devstack
      </h1>
      <ul>
        <NavItem label={'Technologies'}/>
        <li
          id="engineering"
          onClick={handleClick}
          className={isClicked ? "nav-item clicked" : "nav-item"}
        >
          Engineering <FontAwesomeIcon icon={faAngleDown} />
          {showDropdown && <Dropdown sectionName="Engineering" />}
        </li>
        <li
          id="services"
          onClick={handleClick}
          className={isClicked ? "nav-item clicked" : "nav-item"}
        >
          Services <FontAwesomeIcon icon={faAngleDown} />
          {showDropdown && <Dropdown sectionName="Services" />}
        </li>
        <li
          id="resources"
          onClick={handleClick}
          className={isClicked ? "nav-item clicked" : "nav-item"}
        >
          Resources <FontAwesomeIcon icon={faAngleDown} />
          {showDropdown && <Dropdown sectionName="Resources" />}
        </li>
        <li id="ip_protection" className="nav-item">
          IP Protection
        </li>
      </ul>
      <Button id="contact-us-btn">Contact Us</Button>
    </nav>
  );
};

export default Navbar;

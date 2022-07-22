import { Card } from "@mui/material";
import {
  engineeringDropdownItems,
  resourcesDropdownItems,
  serviceDropdownItems,
  technologiesDropdownItems,
} from "../../data";
import "./Dropdown.css";

import React, { useState } from "react";

function Dropdown({ sectionName }) {
  const section = sectionName;

  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <Card id="dropdown-card">
        <ul className={isClicked ? "dropdown clicked" : "dropdown"}>
          {section == "Resources"
            ? resourcesDropdownItems.map((e, index) => (
                <li key={index}>{e.text}</li>
              ))
            : section == "Services"
            ? serviceDropdownItems.map((e, index) => (
                <li key={index}>{e.text}</li>
              ))
            : section == "Engineering"
            ? engineeringDropdownItems.map((e, index) => (
                <li key={index}>{e.text}</li>
              ))
            : technologiesDropdownItems.map((e, index) => (
                <li key={index}>{e.text}</li>
              ))}
        </ul>
      </Card>
    </>
  );
}

export default Dropdown;

import React from "react";
import './NavItem.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown} from "@fortawesome/free-solid-svg-icons";

const NavItem = ({id, label}) => {
  const [isClicked, setIsClicked] = useState(false);

  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    setShowDropdown(!showDropdown);
    console.log(`showDropdown -> ${showDropdown}`);
    console.log(`isClicked -> ${isClicked}`);
  };

  return (
    <li
      id={id}
      onClick={handleClick}
      className={isClicked ? "nav-item clicked" : "nav-item"}
    >
      {label} <FontAwesomeIcon icon={faAngleDown} />
      {showDropdown && <Dropdown sectionName={label} />}
    </li>
  );
};

export default NavItem;

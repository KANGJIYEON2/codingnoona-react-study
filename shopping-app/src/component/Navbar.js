import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const menuList = ["다이아", "귀걸이", "목걸이", "팔찌", "반지"];
  return (
    <div>
      <div className="login-button">
        <FontAwesomeIcon icon={faUser} />
        <div>Login</div>
      </div>
      <div className="nav-section">Jewelry Shop</div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
      </div>
      <div>
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" />
      </div>
    </div>
  );
};

export default Navbar;

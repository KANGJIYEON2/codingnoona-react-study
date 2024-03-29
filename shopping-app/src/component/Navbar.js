import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, useAuthentication }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuList = ["다이아", "귀걸이", "목걸이", "팔찌", "반지"];
  console.log(authenticate, useAuthentication);
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };
  const goToHome = () => {
    navigate("/");
  };

  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div>
      {authenticate ? (
        <div className="login-button" onClick={useAuthentication}>
          <FontAwesomeIcon icon={faUser} />
          <div>Logout</div>
        </div>
      ) : (
        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>Login</div>
        </div>
      )}
      <div className="nav-section" onClick={goToHome}>
        <h3> Jewelry Shop</h3>
      </div>
      <div className="menu-area">
        <ul className={menuOpen ? "open" : ""}>
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
        <div
          className="hamber-bar"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            className="search-text"
            type="text"
            placeholder="검색하기"
            onKeyUp={(event) => search(event)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

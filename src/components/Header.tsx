import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useStateValue } from "./MyContext";
import { auth } from "../firebase";
import "./Header.css";

const Header: React.FC = () => {
  // @ts-ignore
  let [{ basket, user }] = useStateValue();

  const handleAuthentication = (): void => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <Navbar className="header" sticky="top">
      <Link to="/">
        <img src={logo} alt="logo" className="header__logo ml-5 mr-4" />
      </Link>

      <span className="heading__searchbar w-50">
        <input
          type="text"
          placeholder="Search for products, brands and more"
          className="header__searchinput pl-3 pt-1 pb-1"
        />
        <FontAwesomeIcon icon={faSearch} className="heading__searchicon " />
      </span>

      <Link to={user ? "./" : "./login"}>
        {user ? (
          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              className="ml-5 mr-5 login__dropdown"
            >
              {`Hello ${user.displayName}!`}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                className="login__dropdown"
                onClick={handleAuthentication}
              >
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Button variant="light" className="header__loginbtn ml-5 mr-5">
            Login
          </Button>
        )}
      </Link>

      <Link to="/checkout" className="header__link">
        <h6 className="text-white ml-4 mt-2">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="heading__basketcount">{basket.length} </span>
          <span> Cart</span>
        </h6>
      </Link>
    </Navbar>
  );
};

export default Header;

import React from "react";
import "./Header.scss";
import logo from "../../imgApp/logoMATOA.svg";
import Cart from "../../imgApp/Cart.svg";
import Search from "../../imgApp/search.svg";
import User from "../../imgApp/user.svg";
import ModalCart from "../ModalCart/ModalCart";
import { useState } from "react";
const Header = () => {
  const [visible, setVisible] = useState(false);

  const Open = () => {
    setVisible(!visible);
  };
  return (
    <div className="Header">
      <div className="Header_navbar">
        <div className="navbar_logo">
          <img src={logo} alt="" />
        </div>
        <ul className="navbar_list">
          <a href="">
            <li>Watches</li>
          </a>
          <a href="">
            <li>Eyewear</li>
          </a>
          <a href="">
            <li>Accessories</li>
          </a>
          <a href="">
            <li>News</li>
          </a>
        </ul>
        <div className="navbar_cart-user">
          <div style={{ paddingTop: "8px" }}>
            <img src={Search} alt="" className="navbar_searach" />
          </div>
          <div className="navbar_login">
            <div className="user">
              <img src={User} alt="" />
            </div>
            <div className="navbar_login-text">Log In</div>
          </div>
          <div className="navbar_cart">
            <button onClick={Open}>
              <img src={Cart} alt="" />
            </button>
          </div>
        </div>
      </div>
      <ModalCart visible={visible} setVisible={setVisible} />
    </div>
  );
};

export default Header;

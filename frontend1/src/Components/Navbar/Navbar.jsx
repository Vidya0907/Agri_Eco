import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/Frontend_Assets/logo.png";
import cart_icon from "../Assets/Frontend_Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../Assets/Frontend_Assets/nav_dropdown.png";
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={"/logo.svg"} alt="" />
        {/* <p>SHOPPER</p> */}
      </div>
      <img
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={nav_dropdown}
        alt=""
      />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" , color:"green"}} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Seeds");
          }}
        >
          <Link style={{ textDecoration: "none" ,color:"green"}} to="/Seeds">
          Seeds
          </Link>
          {menu === "Seeds" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Farming_Equipment");
          }}
        >
          <Link style={{ textDecoration: "none",color:"green" }} to="/Farming_Equipment">
          Farming Equipment 
          </Link>
          {menu === "Farming_Equipment" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Fertilizer");
          }}
        >
          <Link style={{ textDecoration: "none",color:"green" }} to="/Fertilizer">
          Fertilizers 
          </Link>
          {menu === "Fertilizer" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}

        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;

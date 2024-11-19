import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import menu_icon from "../../assets/menu-icon.png";

const Navbar = () => {
  const [bgColor, setBgColor] = useState("transparent");
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setBgColor("#212ea0");
    } else setBgColor("transparent");
  };
  window.addEventListener("scroll", handleScroll);

  const [menuIcon, setMenuIcon] = useState(false);
  const list = useRef(null);
  const showList = () => {
    if (menuIcon) {
      list.current.style.transform = `translateX(0px)`;
    }
  };

  return (
    <nav className="container" style={{ backgroundColor: bgColor }}>
      <img src={logo} className="logo" />
      <img
        src={menu_icon}
        className="menu"
        onClick={() => {
          setMenuIcon((prev) => !prev);
          showList();
        }}
      />
      <ul className={menuIcon ? "mobile-menu" : "hide-nav"} ref={list}>
        <li>
          <Link to="hero" smooth={true} offset={-260} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-260} duration={500}>
            Programs
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonial" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            className="btn"
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
          >
            Contact US
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

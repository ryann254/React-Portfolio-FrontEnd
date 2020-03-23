import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header({ children }) {
  const [showMenu, setShowMenu] = useState(false);
  const [menuBtn, setMenuBtn] = useState(null);
  const [menuNav, setMenuNav] = useState(null);
  const [menuBranding, setMenuBranding] = useState(null);
  const [navItems, setNavItem] = useState(null);
  const [menu, setMenu] = useState(null);

  //On component mount the following should be fetched and set to state
  useEffect(() => {
    let menuBtn = document.querySelector(".menu-btn");
    let menu = document.querySelector(".menu");
    let menuNav = document.querySelector(".menu-nav");
    let menuBranding = document.querySelector(".menu-branding");
    let navItems = document.querySelectorAll(".nav-item");
    setMenuBtn(menuBtn);
    setMenu(menu);
    setMenuNav(menuNav);
    setMenuBranding(menuBranding);
    setNavItem(navItems);
  }, []);

  //Open and Closes the menu
  const toggleMenu = e => {
    console.log(e.currentTarget.id);
    if (!showMenu) {
      menuBtn.classList.add("close");
      menu.classList.add("show");
      menuNav.classList.add("show");
      menuBranding.classList.add("show");
      navItems.forEach(item => {
        item.classList.add("show");
      });
      setShowMenu(true);
    } else {
      menuBtn.classList.remove("close");
      menu.classList.remove("show");
      menuNav.classList.remove("show");
      menuBranding.classList.remove("show");
      navItems.forEach(item => {
        item.classList.remove("show");
      });
      setShowMenu(false);
    }
  };
  return (
    <Fragment>
      <div className="menu-btn" onClick={e => toggleMenu(e)} id="menuBtn">
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div>

      <nav className="menu">
        <div className="menu-branding">
          <div>
            <img
              src="/images/Profile-Pic-One-Croped.jpeg"
              className="portrait"
              alt=""
            />
          </div>
        </div>
        <ul className="menu-nav">
          <li className="nav-item current">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/work" className="nav-link">
              My Work
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              How To Reach Me
            </Link>
          </li>
        </ul>
      </nav>
      {children}
    </Fragment>
  );
}

export default Header;

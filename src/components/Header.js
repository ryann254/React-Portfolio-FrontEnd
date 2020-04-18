import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Header.css";

function Header({ children }) {
  const [target, setTarget] = useState("");
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

  //Adds the current class to the right link
  function setCurrent(e) {
    const link = e.currentTarget;
    setTarget(link);
  }

  //Closes the menu on moving to a different page
  function handleClose() {
    setShowMenu(false);
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => {
      item.classList.remove("show");
    });
  }

  //Open and Closes the menu
  const toggleMenu = () => {
    if (!showMenu) {
      const linkElements = document.querySelectorAll(".nav-item");
      linkElements.forEach((item) => {
        item.classList.remove("current");
      });
      if (target !== "") {
        target.classList.add("current");
      }
      menuBtn.classList.add("close");
      menu.classList.add("show");
      menuNav.classList.add("show");
      menuBranding.classList.add("show");
      navItems.forEach((item) => {
        item.classList.add("show");
      });
      setShowMenu(true);
    } else {
      handleClose();
    }
  };

  return (
    <Fragment>
      <div id="bg-img">
        <div className="menu-btn" onClick={toggleMenu}>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div>

        <nav className="menu">
          <div className="menu-branding">
            <div>
              <img
                src="/images/Profile-Pic-One-Croped.jpg"
                className="portrait"
                alt=""
              />
            </div>
          </div>
          <ul className="menu-nav">
            <li className="nav-item" onClick={(e) => setCurrent(e)}>
              <Link to="/" className="nav-link" onClick={() => handleClose()}>
                Home
              </Link>
            </li>
            <li className="nav-item" onClick={(e) => setCurrent(e)}>
              <Link
                to="/about"
                className="nav-link"
                onClick={() => handleClose()}
              >
                About Me
              </Link>
            </li>
            <li className="nav-item" onClick={(e) => setCurrent(e)}>
              <Link
                to="/work"
                className="nav-link"
                onClick={() => handleClose()}
              >
                My Work
              </Link>
            </li>
            <li className="nav-item" onClick={(e) => setCurrent(e)}>
              <Link
                to="/contact"
                className="nav-link"
                onClick={() => handleClose()}
              >
                How To Reach Me
              </Link>
            </li>
          </ul>
        </nav>
        {children}
      </div>
    </Fragment>
  );
}

Header.propTypes = {
  children: PropTypes.object,
};

export default Header;

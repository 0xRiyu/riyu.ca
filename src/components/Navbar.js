import { Link } from "gatsby";
import React from "react";

import {
  nav,
  navLink,
  navLogo,
  navContent,
  navList,
  navListItem,
  navListItemLink,
} from "./Navbar.module.css";

const Navbar = ({ siteTitle }) => {
  return (
    <nav className={nav}>
      <div className={navContent}>
        <div className={navLogo}>
          <Link to="/">
            <img
              src={require("../images/logo-clear.png").default}
              alt="Navbar Logo"
            />
          </Link>
        </div>
        <div className={navLink}>
          <div className={navList}>
            <li className={navListItem}>
              <Link className={navListItemLink} to="/">
                Home
              </Link>
            </li>
            <li className={navListItem}>
              <Link className={navListItemLink} to="/about">
                About
              </Link>
            </li>
            {
            <li className={navListItem}>
              <Link className={navListItemLink} to="/journal">
                Journal
              </Link>
            </li>
            }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { Link } from "gatsby";
import React from "react";

import {
  nav,
  navLink,
  navLogo,
  navLogoLink,
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
          <Link className={navLogoLink} to="/">{siteTitle}</Link>
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
            <li className={navListItem}>
              <Link className={navListItemLink} to="/journal">
                Journal
              </Link>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
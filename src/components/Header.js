import React from "react";

import {
  headerImage,
  headerContent,
  pageText,
  titleWrap,
  titleSubWrap,
  socialLinks,
  socialListItem,
  socialListItemLink

} from "./Header.module.css";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa/";

const Header = ({ pageTitle, subTitle, pageHeaderImage, showSocials }) => {
  return (
    <div className={headerContent}>
      <div
        className={headerImage}
        style={{ backgroundImage: `-webkit-linear-gradient(rgba(0,0,0, 0) 0%,rgba(22,24,26, 1) 100%), url(${pageHeaderImage})` }}
      />
      <div className={pageText}>
        <h1 className={titleWrap}>{pageTitle}</h1>
        <h2 className={titleSubWrap}>{subTitle}</h2>
        {showSocials === true ? 
        <div className={socialLinks}>
          <li className={socialListItem}>
            <a
              className={socialListItemLink}
              href="https://github.com/0xRiyu"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li className={socialListItem}>
            <a
              className={socialListItemLink}
              href="https://twitter.com/0xRiyu"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter/>
            </a>
          </li>
          <li className={socialListItem}>
            <a
              className={socialListItemLink}
              href="https://www.linkedin.com/in/drew-cornfield/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin/>
            </a>
          </li>
        </div>
      : null}
      </div>
    </div>
  );
};

export default Header;

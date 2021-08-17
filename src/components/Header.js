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

const Header = ({ pageTitle, subTitle, pageHeaderImage }) => {
  return (
    <div className={headerContent}>
      <div
        className={headerImage}
        style={{ backgroundImage: `url(${pageHeaderImage})` }}
      />
      <div className={pageText}>
        <h1 className={titleWrap}>{pageTitle}</h1>
        <h2 className={titleSubWrap}>{subTitle}</h2>
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
      </div>
    </div>
  );
};

export default Header;

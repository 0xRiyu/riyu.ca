import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { container, copyright } from "./layout.module.css";
import Navbar from "./Navbar";
import Header from "./Header";

const Layout = ({ pageTitle, pageSubTitle, pageHeaderImage, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div>
      <Navbar siteTitle={data.site.siteMetadata.title} />
      <Header pageTitle={pageTitle} subTitle={pageSubTitle} pageHeaderImage={pageHeaderImage} />
      <div className={container}>
        <title>
        {data.site.siteMetadata.title} | {pageTitle}
        </title>
        <main>
          {children}
        </main>
      </div>
        <p className={copyright}>Drew Cornfield ~ 2021</p><br/>
    </div>
  );
};

export default Layout;

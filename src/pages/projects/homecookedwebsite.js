import * as React from "react";
import Layout from "../../components/layout";
import webpageBanner from "../../images/website-css-carbon.png";
import {
  contentContainer,
  articleContent,
} from "../../styles/content-container.module.css";

const AboutPage = () => {
  return (
    <Layout pageTitle="Riyu.ca (This Website 🙂)" pageHeaderImage={webpageBanner}>
      <div className={contentContainer}>
        <div className={articleContent}>
          <p>
          </p>
          <p></p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;

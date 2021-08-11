import * as React from "react";
import Layout from "../components/layout";
import webpageBanner from "../images/quote-book-close.jpg";
import {
  contentContainer,
  articleContent,
  articleEntry
} from "../styles/content-container.module.css";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me" pageHeaderImage={webpageBanner}>
      <div className={contentContainer}>
        <div className={articleContent}>
          <div className={articleEntry}>
            <p>Im drew</p>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;

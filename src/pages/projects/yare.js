import * as React from "react";
import Layout from "../../components/layout";
import webpageBanner from "../../images/Yare/08.18.2021-sandbox.jpg";
import {
  contentContainer,
  articleContent,
} from "../../styles/content-container.module.css";

const AboutPage = () => {
  return (
    <Layout pageTitle="Yare Engine" pageHeaderImage={webpageBanner}>
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

import * as React from "react";
import Layout from "../components/layout";
import webpageBanner from "../images/quote-book-close.jpg";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me" pageHeaderImage={webpageBanner}>
      <p>Something to say</p>
    </Layout>
  );
};

export default AboutPage;

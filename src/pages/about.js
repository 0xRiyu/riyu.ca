import * as React from "react";
import Layout from "../components/layout";
import webpageBanner from "../images/quote-book-close.jpg";
import {
  contentContainer,
  articleContent,
} from "../styles/content-container.module.css";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me" pageHeaderImage={webpageBanner}>
      <div className={contentContainer}>
        <div className={articleContent}>
          <p>
            I'm your host, Drew Cornfield, also known as <em>Riyu</em> by some
            of my peers.
            <br /> <br />
            I work as a tools developer at AMD in the Windows core graphics
            team. Most of my work lies with GPUs, building and designing systems
            that improve the workflows of other engineers. <br />
          </p>
          <p>
            Outside of my work, I am interested in building computer graphics
            rendering engines, learning Japanese, reading light novels, and the like.
          </p>
          <p>
            <br />
            This site, RiyuDev is a central hub for all my projects and
            writings.
          </p>
          <p>Below is a timeline that shows what I've been upto until now.</p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;

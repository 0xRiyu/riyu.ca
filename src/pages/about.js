import * as React from "react";
import Layout from "../components/layout";
import webpageBanner from "../images/banners/redtree.webp";
import {
  contentContainer,
  articleContent,
} from "../styles/content-container.module.css";

const AboutPage = () => {
  return (
    <Layout
      pageTitle="Who I Am"
      pageHeaderImage={webpageBanner}
      showSocials={true}
    >
      <div className={contentContainer}>
        <div className={articleContent}>
          <p>
            I'm <b>Drew Cornfield</b>, a software engineer from Canada.
            <br />
            <br />
            My career focus has been working on graphics debugging tools, currently at{" "}
            <a href="https://www.nvidia.com/" target="_blank" rel="noreferrer">
            NVIDIA
            </a>
            , prior{" "}
            <a href="https://www.amd.com/en" target="_blank" rel="noreferrer">
            AMD
            </a>
            .
            <br />
            Outside of my work, I enjoy learning about and building small graphics rendering projects, studying Japanese
            , reading light novels, and the like.
            <br />
            <br/ >All views are my own and do not reflect that of my employer.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;

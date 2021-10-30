import * as React from "react";
import Layout from "../components/layout";
import webpageBanner from "../images/quote-book-close.jpg";
import {
  contentContainer,
  articleContent,
} from "../styles/content-container.module.css";

const AboutPage = () => {
  return (
    <Layout
      pageTitle="About"
      pageHeaderImage={webpageBanner}
      showSocials={true}
    >
      <div className={contentContainer}>
        <div className={articleContent}>
          <p>
            I'm <b>Drew Cornfield</b>, a Canadian software developer, also known
            as <em>Riyu</em> by some of my peers.
            <br />
            <br />I currently develop internal software tools at{" "}
            <a href="https://www.amd.com/en" target="_blank" rel="noreferrer">
              AMD
            </a>{" "}
            within the windows core graphics driver team. Most of my work lies
            with GPUs, building and designing systems that improve the workflows
            of other engineers.
            <br />
            Outside of my work, I enjoy building graphics rendering engines
            (most recently with Vulkan), studying Japanese
            (それわ難しい), reading light novels, and the like.
            <br />
            <br />
            If you want to learn more, here's my <a href="#!">CV</a>
            <br /> <br />
            This site is a central hub for my personal projects and writings.
            Glad you found it 🙂!
          </p>
          <p></p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;

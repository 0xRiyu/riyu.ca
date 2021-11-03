import * as React from "react";
import Layout from "../components/layout";
import webpageBanner from "../images/street.jpg";
import {
  contentContainer,
  cardContainer,
} from "../styles/content-container.module.css";

import Card from "../components/Card";

const IndexPage = () => {
  var subTitle = "C++ Developer, GPU Meddler";
  return (
    <Layout
      pageTitle="Drew ｜ Riyu"
      pageSubTitle={subTitle}
      pageHeaderImage={webpageBanner}
      showSocials={true}
    >
      <div className={contentContainer}>
        <div className={cardContainer}>
          <Card
            frontBackgroundImageUrl="Yare/08.18.2021-sandbox.jpg"
            backBackgroundImageUrl="Yare/yaregif.webm"
            frontContent="Yare"
            backContent="A Vulkan environment renderer written in C++.      In active development!"
            projectPageLink="/projects/yare"
            githubLink="https://github.com/0xRiyu/Yare"
          />
          <Card
            frontBackgroundImageUrl="bonsai/flowers.png"
            backBackgroundImageUrl="bonsai/bonsaigif.webm"
            frontContent="Bonsai"
            backContent="A renderer written with C++ and DirectX 11"
            githubLink="https://github.com/0xRiyu/Bonsai-Engine"
          />
          <Card
            frontBackgroundImageUrl="opengl-3dengine/wireframe.png"
            backBackgroundImageUrl="opengl-3dengine/shapes.webm"
            frontContent="OpenGL 3D"
            backContent="A renderer written with C++ and OpenGL 4.0"
            githubLink="https://github.com/0xRiyu/OpenGL-3D-Engine"
          />
          <Card
            frontBackgroundImageUrl="website-css-carbon.png"
            backBackgroundImageUrl="website.webm"
            frontContent="RiyuDev"
            backContent="My personal portfolio and blog - built with Gatsby JS"
            projectPageLink="/projects/site"
            githubLink="https://github.com/0xRiyu/Riyu.ca"
          />
          <Card
            frontBackgroundImageUrl="Raytrace.png"
            backBackgroundImageUrl="Raytrace.webm"
            frontContent="Raytracer"
            backContent="A Raytracer built with Peter Shirleys 'Raytracing In One Weekend'"
            githubLink="https://github.com/0xRiyu/Raytracer"
          />
          <Card
            frontBackgroundImageUrl="building-escape/buildingescape.jpg"
            backBackgroundImageUrl="building-escape/buildingescape.webm"
            frontContent="Building Escape"
            backContent="An UnrealEngine 4 puzzle game"
            githubLink="https://github.com/0xRiyu/Building-Escape"
          />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

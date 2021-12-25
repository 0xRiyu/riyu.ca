import * as React from "react";
import Layout from "../components/layout";
import webpageBanner from "../images/banners/street.webp";
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
            frontBackgroundImageUrl="yare/08.18.2021-sandbox.webp"
            backBackgroundImageUrl="yare/yaregif-c.webm"
            frontContent="Yare"
            backContent="A Vulkan environment renderer written in C++.      In active development!"
            projectPageLink="/projects/yare"
            githubLink="https://github.com/0xRiyu/Yare"
          />
          <Card
            frontBackgroundImageUrl="bonsai/flowers.webp"
            backBackgroundImageUrl="bonsai/bonsaigif-c.webm"
            frontContent="Bonsai"
            backContent="A renderer written with C++ and DirectX 11"
            githubLink="https://github.com/0xRiyu/Bonsai-Engine"
          />
          <Card
            frontBackgroundImageUrl="opengl-3dengine/wireframe.webp"
            backBackgroundImageUrl="opengl-3dengine/shapes-c.webm"
            frontContent="OpenGL 3D"
            backContent="A renderer written with C++ and OpenGL 4.0"
            githubLink="https://github.com/0xRiyu/OpenGL-3D-Engine"
          />
          <Card
            frontBackgroundImageUrl="website/website-css-carbon.webp"
            backBackgroundImageUrl="website/website-c.webm"
            frontContent="RiyuDev"
            backContent="My personal portfolio and blog - built with Gatsby JS"
            projectPageLink="/projects/site"
            githubLink="https://github.com/0xRiyu/Riyu.ca"
          />
          <Card
            frontBackgroundImageUrl="raytracing/Raytrace.webp"
            backBackgroundImageUrl="raytracing/Raytrace.webm"
            frontContent="Raytracer"
            backContent="A Raytracer built with Peter Shirleys 'Raytracing In One Weekend'"
            githubLink="https://github.com/0xRiyu/Raytracer"
          />
          <Card
            frontBackgroundImageUrl="building-escape/buildingescape.webp"
            backBackgroundImageUrl="building-escape/buildingescape-c.webm"
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

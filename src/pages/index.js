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
      pageTitle="Drew | Riyu"
      pageSubTitle={subTitle}
      pageHeaderImage={webpageBanner}
      showSocials={true}
    >
      <div className={contentContainer}>
        <div className={cardContainer}>
          <Card
            frontBackgroundImageUrl="Yare/08.18.2021-sandbox.jpg"
            backBackgroundImageUrl="Yare/08.18.2021-sandbox.jpg"
            frontContent="Yare"
            backContent="A Vulkan Renderer Written In C++"
            projectPageLink="/projects/yare"
            githubLink="https://github.com/0xRiyu/Yare"
          />
          <Card
            frontBackgroundImageUrl="bonsai/flowers.png"
            backBackgroundImageUrl="bonsai/flowers.png"
            frontContent="Bonsai"
            backContent="A DirectX 11 Renderer Written In C++"
            githubLink="https://github.com/0xRiyu/Bonsai-Engine"
          />
          <Card
            frontBackgroundImageUrl="opengl-3dengine/wireframe.png"
            backBackgroundImageUrl="opengl-3dengine/wireframe.png"
            frontContent="OpenGL 3D"
            backContent="A OpenGl Renderer Written In C++"
            githubLink="https://github.com/0xRiyu/OpenGL-3D-Engine"
          />
          <Card
            frontBackgroundImageUrl="website-css-carbon.png"
            backBackgroundImageUrl="website-css-carbon.png"
            frontContent="RiyuDev"
            backContent="My Personal Site Built With Gatsby"
            projectPageLink="/projects/site"
            githubLink="https://github.com/0xRiyu/Riyu.ca"
          />
          <Card
            frontBackgroundImageUrl="Raytrace.png"
            backBackgroundImageUrl="Raytrace.png"
            frontContent="Raytracer"
            backContent="A Raytracer built with Peter Shirleys 'Raytracing In One Weekend'"
            githubLink="https://github.com/0xRiyu/Raytracer"
          />
          <Card
            frontBackgroundImageUrl="building-escape/buildingescape.jpg"
            backBackgroundImageUrl="building-escape/buildingescape.gif"
            frontContent="Building Escape"
            backContent="A UnrealEngine 4 Puzzle Game"
            githubLink="https://github.com/0xRiyu/Building-Escape"
          />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

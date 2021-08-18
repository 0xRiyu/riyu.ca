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
      pageTitle="Drew Cornfield"
      pageSubTitle={subTitle}
      pageHeaderImage={webpageBanner}
    >
      <div className={contentContainer}>
        <div className={cardContainer}>
          <Card
            frontBackgroundImageUrl="Yare/08.18.2021-sandbox.jpg"
            backBackgroundImageUrl="Yare/08.18.2021-sandbox.jpg"
            frontContent="Yare"
            backContent="fun fun"
          />
          <Card
            frontBackgroundImageUrl="bonsai/flowers.png"
            backBackgroundImageUrl="bonsai/flowers.png"
            frontContent="Bonsai"
            backContent="fun fun"
          />
          <Card
            frontBackgroundImageUrl="opengl-3dengine/wireframe.png"
            backBackgroundImageUrl="opengl-3dengine/wireframe.png"
            frontContent="OpenGL 3D"
            backContent="fun fun"
          />
          <Card
            frontBackgroundImageUrl="website-css-carbon.png"
            backBackgroundImageUrl="website-css-carbon.png"
            frontContent="RiyuDev"
            backContent="fun fun"
          />
          <Card
            frontBackgroundImageUrl="Raytrace.png"
            backBackgroundImageUrl="Raytrace.png"
            frontContent="Raytracer"
            backContent="fun fun"
          />
          <Card
            frontBackgroundImageUrl="building-escape/buildingescape.jpg"
            backBackgroundImageUrl="building-escape/buildingescape.gif"
            frontContent="Building Escape"
            backContent="fun fun"
          />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

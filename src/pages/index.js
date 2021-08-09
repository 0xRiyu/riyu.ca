import * as React from "react";
import Layout from "../components/layout";
import webpageBanner from "../images/street.jpg";
import {
  contentContainer,
  cardContainer,
} from "../styles/card-content-container.module.css";

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
            frontBackgroundImageUrl="//source.unsplash.com/300x401"
            backBackgroundImageUrl="//source.unsplash.com/300x301"
            frontContent="Yare"
            backContent="fun fun"
          />
          <Card
            frontBackgroundImageUrl="//source.unsplash.com/300x402"
            backBackgroundImageUrl="//source.unsplash.com/300x302"
            frontContent="DirectX"
            backContent="fun fun"
          />
          <Card
            frontBackgroundImageUrl="//source.unsplash.com/300x403"
            backBackgroundImageUrl="//source.unsplash.com/300x303"
            frontContent="OpenGL"
            backContent="fun fun"
          />
          <Card
            frontBackgroundImageUrl="//source.unsplash.com/300x404"
            backBackgroundImageUrl="//source.unsplash.com/300x304"
            frontContent="Website"
            backContent="fun fun"
          />
          <Card
            frontBackgroundImageUrl="//source.unsplash.com/300x405"
            backBackgroundImageUrl="//source.unsplash.com/300x305"
            frontContent="VsCode Ext"
            backContent="fun fun"
          />
          <Card
            frontBackgroundImageUrl="//source.unsplash.com/300x406"
            backBackgroundImageUrl="//source.unsplash.com/300x306"
            frontContent="RayTracer"
            backContent="fun fun"
          />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

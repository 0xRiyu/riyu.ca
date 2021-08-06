import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this using a tutorial neat</p>
      <StaticImage
        alt="something something image"
        src="..\images\cat.jpg"
      />
    </Layout>
  );
};

export default IndexPage;

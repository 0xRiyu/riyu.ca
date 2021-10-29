import * as React from "react";
import Layout from "../../components/layout";
import webpageBanner from "../../images/Yare/08.18.2021-sandbox.jpg";
import { graphql, useStaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import {
  contentContainer,
  articleContent,
} from "../../styles/content-container.module.css";

const YarePage = () => {
  const data = useStaticQuery(graphql`
    query {
      mdx(fileAbsolutePath: { regex: "/yare.mdx/" }) {
        body
      }
    }
  `);
  return (
    <Layout pageTitle="Yare Engine" pageHeaderImage={webpageBanner}>
      <div className={contentContainer}>
        <div className={articleContent}>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
      </div>
    </Layout>
  );
};

export default YarePage;

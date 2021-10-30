import * as React from "react";
import Layout from "../../components/layout";
import webpageBanner from "../../images/website-css-carbon.png";
import { graphql, useStaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import {
  contentContainer,
  articleContent,
} from "../../styles/content-container.module.css";

const WebsitePage = () => {
  const data = useStaticQuery(graphql`
    query {
      mdx(fileAbsolutePath: { regex: "/site.mdx/" }) {
        body
      }
    }
  `);
  return (
    <Layout pageTitle="About This Website" pageHeaderImage={webpageBanner}>
      <div className={contentContainer}>
        <div className={articleContent}>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
      </div>
    </Layout>
  );
};

export default WebsitePage;

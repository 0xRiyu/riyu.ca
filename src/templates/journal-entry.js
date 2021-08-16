import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import webpageDefaultBanner from "../images/street.jpg";
import {
  contentContainer,
  articleContent,
  articleEntry,
} from "../styles/content-container.module.css";

const JournalEntry = ({ data }) => {
  var webpageBanner = data.mdx.frontmatter.featuredImage
    ? require("../images/" + data.mdx.frontmatter.featuredImage).default
    : webpageDefaultBanner;
  return (
    <Layout
      pageTitle={data.mdx.frontmatter.title}
      pageHeaderImage={webpageBanner}
    >
      <div className={contentContainer}>
        <div className={articleContent}>
          <div className={articleEntry}>
            <p>{data.mdx.frontmatter.date}</p>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        featuredImage
      }
      body
    }
  }
`;

export default JournalEntry;

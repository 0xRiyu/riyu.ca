import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import webpageDefaultBanner from "../images/street.jpg";

const JournalEntry = ({ data }) => {
  var webpageBanner = data.mdx.frontmatter.featuredImage ? data.mdx.frontmatter.featuredImage : webpageDefaultBanner;

  return (
    <Layout
      pageTitle={data.mdx.frontmatter.title}
      pageHeaderImage={webpageBanner}
    >
      <p>{data.mdx.frontmatter.date}</p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
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

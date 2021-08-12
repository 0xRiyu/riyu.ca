import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import webpageBanner from "../images/book-cart.jpg";
import {
  contentContainer,
  articleContent,
  blogEntryBg,
  articleEntry,
} from "../styles/content-container.module.css";

const JournalPage = ({ data }) => {
  return (
    <Layout pageTitle="Journal" pageHeaderImage={webpageBanner}>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <div className={contentContainer}>
            <div className={`${articleContent}`}>
              <div className={blogEntryBg}>
                <img
                  src={
                    require("../images/" + node.frontmatter.featuredImage)
                      .default
                  }
                />
              </div>
              <div className={articleEntry}>
                <h2>
                  <Link to={`${node.fields.slug}`}>
                    {node.frontmatter.title}
                  </Link>
                </h2>
                <p style={{ lineHeight: 2 }}>Posted: {node.frontmatter.date}</p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          featuredImage
        }
        fields {
          slug
        }
        id
      }
    }
  }
`;

export default JournalPage;

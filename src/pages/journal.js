import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import webpageBanner from "../images/book-cart.jpg";
import {
  contentContainer,
  blogEntryBg,
  articleEntry,
} from "../styles/content-container.module.css";

const JournalPage = ({ data }) => {
  return (
    <Layout
      pageTitle="Journal"
      pageHeaderImage={webpageBanner}
      showSocials={true}
    >
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <div className={contentContainer}>
            <Link to={`${node.fields.slug}`} style={{ textDecoration: "none" }}>
              <div className={articleEntry}>
                <div className={blogEntryBg}>
                  <img
                    src={
                      node.frontmatter.featuredImage
                        ? require("../images/" + node.frontmatter.featuredImage)
                            .default
                        : require("../images/street.jpg").default
                    }
                    alt="Webpage banner"
                  />
                </div>
                <h2>{node.frontmatter.title}</h2>
                <p style={{ lineHeight: 2 }}>{node.frontmatter.date}</p>
              </div>
            </Link>
          </div>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { type: { eq: "article" } } }
    ) {
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

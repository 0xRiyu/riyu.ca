import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import webpageBanner from "../images/book-cart.jpg";

const JournalPage = ({ data }) => {
  return (
    <Layout pageTitle="Journal" pageHeaderImage={webpageBanner}>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`${node.fields.slug}`}>{node.frontmatter.title}</Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
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
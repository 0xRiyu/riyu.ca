const { createFilePath } = require(`gatsby-source-filesystem`);
const moment = require(`moment`);
const path = require(`path`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  console.log(`Node created of type "${node.internal.type}"`);
  if (node.internal.type === `Mdx`) {
    const postDate = moment(node.frontmatter.date); // Use moment.js to easily change date format.
    const url = `/${postDate.format("YYYY/MM/DD")}/${node.frontmatter.slug}`;

    createNodeField({
      name: `slug`,
      node,
      value: url,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
            id
          }
        }
      }
    }
  `);
  result.data.allMdx.edges.forEach(({ node }) => {
    console.log(`Node id : ${node.id}`);
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blogpost.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        id: node.id,
        slug : node.fields.slug
      },
    });
  });
};

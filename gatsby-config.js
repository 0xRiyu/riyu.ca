
const path = require(`path`)

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.riyu.ca",
    title: "RiyuDev",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `writings`,
        path: path.join(__dirname, `writings`),
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    "moment"
  ],
};

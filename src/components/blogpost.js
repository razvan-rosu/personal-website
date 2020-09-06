import React from "react";
import Layout from "./layout";
import SEO from "./seo";
import Img from "gatsby-image";

import { graphql } from "gatsby";

export default function Template({ data }) {
  const { markdownRemark: blogpost } = data;

  return (
    <Layout>
      <SEO title={blogpost.frontmatter.title} />
      <h1>{blogpost.frontmatter.title}</h1>
      <Img
        sizes={blogpost.frontmatter.featuredImage.childImageSharp.sizes}
        title={blogpost.frontmatter.title}
        alt={blogpost.frontmatter.title}
      />
      <p>date: {blogpost.frontmatter.date}</p>
      <p>path: {blogpost.frontmatter.path}</p>
      <p>tags: {blogpost.frontmatter.tags}</p>
      <div dangerouslySetInnerHTML={{ __html: blogpost.html }} />
    </Layout>
  );
}

export const postQuery = graphql`
  query BlogPostsByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            sizes {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;

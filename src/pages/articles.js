import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const ArticlesPage = ({data}) => (
  <Layout>
    <SEO title="Page Articles" />
    <h1>Hi from the Articles page</h1>
    <p>Welcome to Articles</p>

    <ul>
      {data.allMarkdownRemark.edges.map(post => (
        <li key={post.node.id}>
          <a href={post.node.frontmatter.path}>
            {post.node.frontmatter.title}
          </a>
        </li>
      ))}
    </ul>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          id
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`;

export default ArticlesPage;

import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Filters from "../components/filters"
import SEO from "../components/seo";

const ArticlesPage = ({ data }) => (
  <Layout>
    <SEO title="Page Articles" />
    <h1>Hi from the Articles page</h1>
    <p>Welcome to Articles</p>

    <ul>
      {data.allMarkdownRemark.edges.map(post => (
        <li key={post.node.id}>
          <Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link>
        </li>
      ))}
    </ul>

    <Link to="/">Go back to the homepage</Link>

    <Filters></Filters>
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

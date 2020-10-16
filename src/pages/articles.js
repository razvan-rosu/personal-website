import React from "react";
import { Link, graphql } from "gatsby";
import { FiArrowLeft, FiArrowUp } from 'react-icons/fi';

import Layout from "../components/layout";
// import Filters from "../components/filters"
import SEO from "../components/seo";

const ArticlesPage = ({ data }) => (
  <Layout>
    <SEO title="Page Articles" />
    <h1 className="text-4xl font-extrabold text-midnight">Articles</h1>
    <h2 className="text-2xl font-bold text-midnight">Here's what I've been up to:</h2>
    <ul>
      {data.allMarkdownRemark.edges.map(post => (
        <li key={post.node.id} className="my-5">
          <div className="w-full border border-concrete lg:border lg:border-gray-400 bg-white rounded-b lg:rounded p-4 flex flex-col justify-between leading-normal">
            <h3 className="text-midnight font-bold text-xl mb-2">
              <Link to={post.node.frontmatter.path}>
                {post.node.frontmatter.title}
              </Link>
            </h3>
            <div className="flex items-center">
              <span className="inline-block bg-clouds rounded-full px-3 py-1 text-sm font-semibold text-concrete mr-2 mb-2">#photography</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
    <div className="flex justify-between text-concrete">
      <Link to="/">
        <FiArrowLeft className="inline align-middle" />
        <span className="align-middle">Go to the homepage</span>
      </Link>
      <a href="#top">
        <span className="align-middle">Go to top</span>
        <FiArrowUp className="inline align-middle" />
      </a>
    </div>
    {/*<Filters></Filters>*/}
  </Layout>
);

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___date],
        order: [DESC],
      },
      limit: 10
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            tags
          }
        }
      }
    }
  }
`;

export default ArticlesPage;

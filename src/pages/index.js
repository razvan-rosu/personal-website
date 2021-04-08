import React from "react";
import { Link, graphql } from "gatsby";
import { FiArrowUp } from 'react-icons/fi';

import Layout from "../components/layout";
import Slider from "../components/slider";
import SEO from "../components/seo";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1 className="text-4xl font-extrabold text-midnight">About me</h1>
    <p className="text-2xl font-bold text-midnight">Front-End engineer by day, geek by night!</p>
    <Slider />
    <h2 className="text-4xl font-extrabold text-midnight">Articles</h2>
    <p className="text-2xl font-bold text-midnight">Here's what I've been up to:</p>
    <ul>
      {data.allMarkdownRemark.edges.map(post => (
        <li key={post.node.id} className="my-5">
          <div className="w-full border border-concrete lg:border lg:border-gray-400 bg-white rounded-b lg:rounded p-4 flex flex-col justify-between leading-normal">
            <h3 className="text-midnight font-bold text-xl mb-2">
              <Link to={post.node.frontmatter.path} className="focus:outline-none focus:shadow-outline hover:underline">
                {post.node.frontmatter.title}
              </Link>
            </h3>
            <div className="flex items-center justify-center sm:justify-start">
              {
                post.node.frontmatter.tags.split(', ').map(tag => (
                  <span key={tag} className="inline-block bg-clouds rounded-full px-3 py-1 text-sm font-semibold text-concrete mx-1 sm:ml-0 sm:mr-2">#{tag}</span>
                ))
              }
            </div>
          </div>
        </li>
      ))}
    </ul>
    <div className="flex justify-end text-concrete">
      <a href="#top" className="focus:outline-none focus:shadow-outline hover:underline">
        <span className="align-middle">Go to top</span>
        <FiArrowUp className="inline align-middle" />
      </a>
    </div>
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

export default IndexPage;

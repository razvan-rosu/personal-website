import React from "react";
import Layout from "./layout";
import SEO from "./seo";
import Img from "gatsby-image";

import { graphql, Link } from "gatsby";
import { FiArrowLeft } from "react-icons/fi";

export default function Template({ data }) {
  const { markdownRemark: blogpost } = data;

  return (
    <Layout>
      <SEO title={blogpost.frontmatter.title} />
      <article className="prose mx-auto">
        <h1>{blogpost.frontmatter.title}</h1>
        <Img
          sizes={blogpost.frontmatter.featuredImage.childImageSharp.sizes}
          title={blogpost.frontmatter.title}
          alt={blogpost.frontmatter.title}
        />
        <div className="flex items-center justify-between">
          <span className="inline-block bg-concrete rounded-full px-3 py-1 text-sm font-semibold text-clouds">{blogpost.frontmatter.tags}</span>
          <p className="text-sm font-semibold text-right">Posted on: <time datetime={blogpost.frontmatter.date}>{blogpost.frontmatter.date}</time></p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: blogpost.html }} />
      </article>
      <Link className="inline-block sm:mt-8 text-concrete" to="/articles">
        <FiArrowLeft className="inline align-middle" />
        <span className="align-middle">Back to articles</span>
      </Link>
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
        tags
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

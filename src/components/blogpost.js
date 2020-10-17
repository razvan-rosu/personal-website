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
        <h1 class="break-words">{blogpost.frontmatter.title}</h1>
        <Img
          className="Blogpost-banner -mx-6 md:mx-0"
          fluid={blogpost.frontmatter.featuredImage.childImageSharp.sizes}
          title={blogpost.frontmatter.title}
          alt={blogpost.frontmatter.title}
        />
        <div className="flex flex-col-reverse sm:flex-row items-center sm:justify-between">
          <div>
            {
              blogpost.frontmatter.tags.split(', ').map(tag => (
                <span className="inline-block bg-concrete rounded-full mx-1 sm:mr-2 sm:ml-0 px-3 py-1 text-sm font-semibold text-clouds">#{tag}</span>
              ))
            }
          </div>
          <p className="text-sm font-semibold text-right">Posted on: <time datetime={blogpost.frontmatter.date}>{blogpost.frontmatter.date}</time></p>
        </div>
        <div class="text-justify sm:text-left" dangerouslySetInnerHTML={{ __html: blogpost.html }} />
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

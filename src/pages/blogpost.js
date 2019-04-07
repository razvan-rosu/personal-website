import React from "react"

export default function Template({data}) {
  const blogpost = data.markdownRemark;

  return (
    <div>
      <h1>{blogpost.frontmatter.title}</h1>
      <p>path: {blogpost.frontmatter.path}</p>
      <div dangerouslySetInnerHTML={{__html: blogpost.html}}></div>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostsByPath($path: String!) {
    markdownRemark(frontmatter: { path: {eq: $path} }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`

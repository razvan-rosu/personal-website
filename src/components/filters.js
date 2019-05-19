import React from "react";
import { Link } from "gatsby";

const Filters = ({ data }) => (
  <section 
    style={{
      backgroundColor: `#ddd`,
      padding: `15px 30px`
    }}
  >
    <h3>Filters</h3>
    <p>by tags:</p>
    <ul>
      <li>
        <Link to="/">home</Link>
      </li>
      {/* {data.allMarkdownRemark.edges.map(post => (
        <li key={post.node.id}>
          <Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link>
        </li>
      ))} */}
    </ul>
    <p>by date:</p>
    <ul>
      <li>
        <Link to="/">2019</Link>
      </li>
    </ul>
  </section>
);

export default Filters;
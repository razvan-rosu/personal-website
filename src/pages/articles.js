import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ArticlesPage = () => (
  <Layout>
    <SEO title="Page Articles" />
    <h1>Hi from the Articles page</h1>
    <p>Welcome to Articles</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ArticlesPage

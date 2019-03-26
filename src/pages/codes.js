import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CodesPage = () => (
  <Layout>
    <SEO title="Page Codes" />
    <h1>Hi from the Codes page</h1>
    <p>Welcome to Codes</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default CodesPage

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Page About me" />
    <h1>Hi from the About page</h1>
    <p>Welcome to About</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage

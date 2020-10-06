import React from "react";
import { Link } from "gatsby";
import { FiArrowLeft } from "react-icons/fi";

import Layout from "../components/layout";
import SEO from "../components/seo";

const ContactPage = () => (
  <Layout>
    <SEO title="Page Contact" />
    <article>
      <h1 className="text-4xl font-extrabold text-midnight">Contact</h1>
      <h2 className="text-2xl font-bold text-midnight">If you're social media shy, you can message me here!</h2>
      <Link className="text-concrete" to="/">
        <FiArrowLeft className="inline align-middle" />
        <span className="align-middle">Go to the homepage</span>
      </Link>
    </article>
  </Layout>
);

export default ContactPage;

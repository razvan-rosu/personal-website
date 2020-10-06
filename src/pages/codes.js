import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { FiArrowLeft } from "react-icons/fi";

const CodesPage = () => (
  <Layout>
    <SEO title="Page Codes" />
    <article>
      <h1 className="text-4xl font-extrabold text-midnight">Codes</h1>
      <h2 className="text-2xl font-bold text-midnight">Welcome to my laboratory!</h2>
      <Link className="text-concrete" to="/">
        <FiArrowLeft className="inline align-middle" />
        <span className="align-middle">Go to the homepage</span>
      </Link>
    </article>
  </Layout>
);

export default CodesPage;

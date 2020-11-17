import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby";
import {  FiArrowLeft } from "react-icons/fi";

const ThankYouPage = () => (
  <Layout>
    <div className="bg-clouds border-t-4 border-greensea rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
      <div className="flex">
        <div className="py-1">
          <svg className="fill-current h-6 w-6 text-greensea mr-4" xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 20 20">
            <path
              d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
          </svg>
        </div>
        <div>
          <p className="font-bold text-midnight">Success</p>
          <p className="text-sm text-midnight">Thank you for your submission, I will reach out to you shortly!</p>
        </div>
      </div>
    </div>
    <Link className="inline-block mt-8 text-concrete focus:outline-none focus:shadow-outline" to="/">
      <FiArrowLeft className="inline align-middle" />
      <span className="align-middle">Go to homepage</span>
    </Link>
  </Layout>
)

export default ThankYouPage

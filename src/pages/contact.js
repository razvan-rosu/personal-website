import React from "react";
import { Link } from "gatsby";
import CoffeeCup from "../images/coffee.svg";
import { FiArrowLeft } from "react-icons/fi";
import { IoIosPaperPlane } from "react-icons/io";

import Layout from "../components/layout";
import SEO from "../components/seo";

const ContactFormPage = () => (
  <Layout>
    <SEO title="Page Contact" />
    <section className="Contact">
      <h1 className="mb-2 text-4xl text-center font-handwritten text-midnight">Contact</h1>

      <form className="text-2xl font-handwritten text-midnight"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/thank-you">
        <input type="hidden"
               aria-hidden="true"
               name="form-name"
               value="contact" />
        <h2 className="text-3xl mb-8">If you're social media shy, you can message me here!</h2>
        <label htmlFor="name" className="Contact-label">My name is</label>
        <span className="Contact-inputWrap">
          <input type="text"
                 name="name"
                 id="name"
                 className="Contact-input focus:outline-none focus:shadow-outline"
                 placeholder="John Doe"
                 required />
        </span>,&nbsp;
        <br/>
        I'm a <span className="Contact-inputWrap">
          <select name="role"
                  id="role"
                  className="Contact-dropdown focus:outline-none focus:shadow-outline"
                  required>
            <option value="default" selected disabled hidden>Visionary</option>
            <option value="ux">UX Designer</option>
            <option value="ui">UI Designer</option>
            <option value="pm">Project Manager</option>
            <option value="po">Product Owner</option>
            <option value="hr">HR</option>
            <option value="dev">Developer</option>
            <option value="business owner">Business Owner</option>
            <option value="other">Other</option>
          </select>
        </span>&nbsp;
        and I'd like to talk to you <label htmlFor="message" className="Contact-label">about:</label>
        <div className="Contact-textareaWrap">
          <textarea name="message"
                    id="message"
                    className="Contact-textarea focus:outline-none focus:shadow-outline"
                    placeholder="an open source project"
                    required></textarea>
        </div>

        You can reach me at the following <label htmlFor="email" className="Contact-label">e-mail address:</label>
        <span className="Contact-inputWrap">
          <input type="email"
                 name="email"
                 id="email"
                 className="Contact-input focus:outline-none focus:shadow-outline"
                 placeholder="john.doe@email.com"
                 required />
        </span>
        <br/>

        <button type="submit" className="w-full sm:w-auto mt-8 bg-transparent hover:bg-greensea text-greensea font-sans hover:text-white px-4 border border-text-greensea rounded
                                        focus:outline-none focus:shadow-outline"
          ><IoIosPaperPlane className="inline align-text-middle mr-2"
          /><span className="text-xl font-handwritten align-text-middle mr-2">Send</span
        ></button>
      </form>
      <img className="Contact-coffee hidden md:block" src={CoffeeCup} alt="Cup of Coffee"/>
    </section>
    <Link className="inline-block mt-8 text-concrete focus:outline-none focus:shadow-outline" to="/">
      <FiArrowLeft className="inline align-middle" />
      <span className="align-middle">Go to homepage</span>
    </Link>
  </Layout>
);

export default ContactFormPage;

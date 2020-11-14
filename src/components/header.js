import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="bg-pomegranate p-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between flex-wrap text-white">
          <div className="flex items-center flex-shrink-0 mr-6">
            <Link className="Logo font-handwritten" to="/">
              {siteTitle}
            </Link>
          </div>
          <div className="block md:hidden">
            <button onClick={() => toggleExpansion(!isExpanded)}
                    className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
              </svg>
            </button>
          </div>
          <div className={`${ isExpanded ? `block` : `hidden` } w-full md:flex md:items-center md:w-auto`}>
            <div className="text-sm md:flex-grow">
              <Link className="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4"
                    to="/articles/">Articles</Link>
              <Link className="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4"
                    to="/codes/">Codes</Link>
              <Link className="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4"
                    to="/contact/">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;

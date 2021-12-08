import React from "react";
import "./Footer.css";

const Footer = ({ copyright }) => {
  return (
    <footer>
      <p>
        More Info:{"   "}
        <button>
          <a
            href="https://www.nasa.gov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            nasa.gov
          </a>
        </button>
      </p>
      <p className="copyright">Copyright: {copyright}</p>
    </footer>
  );
};

export default Footer;

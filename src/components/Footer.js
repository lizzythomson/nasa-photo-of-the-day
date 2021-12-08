import React from "react";
import "./Footer.css";

const Footer = ({ copyright }) => {
  return (
    <footer>
      <p>
        For more information visit:{" "}
        <a
          href="https://www.nasa.gov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          nasa.gov
        </a>
      </p>
      <p>Copyright: {copyright}</p>
    </footer>
  );
};

export default Footer;

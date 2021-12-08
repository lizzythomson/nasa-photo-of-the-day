import React from "react";
import "./Footer.css";

const Footer = ({ copyright }) => {
  return (
    <footer>
      <p>
        For More Information Visit{" "}
        <a
          href="https://www.nasa.gov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          nasa.gov
        </a>
      </p>
      <p>{copyright}</p>
    </footer>
  );
};

export default Footer;

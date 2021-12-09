import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  margin: 1%;
`;

const StyledCopyRight = styled.p`
  font-style: italic;
`;

const StyledATag = styled.a`
  text-decoration: none;
`;

const Footer = ({ copyright }) => {
  return (
    <StyledFooter>
      <p>
        More Info:{"   "}
        <button>
          <StyledATag
            href="https://www.nasa.gov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            nasa.gov
          </StyledATag>
        </button>
      </p>
      <StyledCopyRight>Copyright: {copyright}</StyledCopyRight>
    </StyledFooter>
  );
};

export default Footer;

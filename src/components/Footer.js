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

const StyledButton = styled.button`
  &:hover {
    border: 2px black solid;
  }
`;

const StyledATag = styled.a`
  text-decoration: none;
`;

const Footer = ({ copyright }) => {
  return (
    <StyledFooter>
      <p>
        More Info:{"   "}
        <StyledButton>
          <StyledATag
            href="https://www.nasa.gov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            nasa.gov
          </StyledATag>
        </StyledButton>
      </p>
      <StyledCopyRight>Copyright: {copyright}</StyledCopyRight>
    </StyledFooter>
  );
};

export default Footer;

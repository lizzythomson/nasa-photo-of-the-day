import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  margin: 1%;
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>NASA Astronomy Picture of the Day </h1>
    </StyledHeader>
  );
};

export default Header;

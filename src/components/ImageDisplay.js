import React from "react";
import styled from "styled-components";

const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledExplanation = styled.div`
  width: 60%;
  border: 2px lightslategray solid;
  box-shadow: 0px 3px 8px rgb(0 0 0 / 24%);
  border-radius: 10px;
  padding: 3.5%;
  margin: 3%;
`;

const ImageDisplay = ({ hdurl, title, date, explanation }) => {
  return (
    <div>
      <StyledImageContainer>
        <img src={hdurl} alt="NASA APOD" className="picture-of-the-day" />
      </StyledImageContainer>
      <StyledTextContainer>
        <h2>{title}</h2>
        <p>
          {new Date(date).toLocaleString("default", {
            month: "long",
            day: "numeric",
            year: "numeric",
            timeZone: "UTC",
          })}
        </p>
        <StyledExplanation>
          <p>{explanation}</p>
        </StyledExplanation>
      </StyledTextContainer>
    </div>
  );
};

export default ImageDisplay;

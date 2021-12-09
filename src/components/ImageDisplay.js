import React from "react";
import "./ImageDisplay.css";
import styled from "styled-components";

const ImageDisplay = ({ hdurl, title, date, explanation }) => {
  return (
    <div>
      <div className="image-container">
        <img src={hdurl} alt="NASA APOD" className="picture-of-the-day" />
      </div>
      <div className="text-container">
        <h2>{title}</h2>
        <p>
          {new Date(date).toLocaleString("default", {
            month: "long",
            day: "numeric",
            year: "numeric",
            timeZone: "UTC",
          })}
        </p>
        <div className="explanation">
          <p>{explanation}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageDisplay;

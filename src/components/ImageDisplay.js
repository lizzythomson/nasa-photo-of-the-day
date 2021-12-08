import React from "react";
import "./ImageDisplay.js";

const ImageDisplay = ({ hdurl, title, date, explanation }) => {
  return (
    <div>
      <img src={hdurl} alt="NASA APOD" style={{ height: 200 }} />
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{explanation}</p>
    </div>
  );
};

export default ImageDisplay;

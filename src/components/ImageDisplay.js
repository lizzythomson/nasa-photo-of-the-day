import React from "react";
import "./ImageDisplay.css";

const ImageDisplay = ({ hdurl, title, date, explanation }) => {
  return (
    <div>
      <img src={hdurl} alt="NASA APOD" style={{ height: 200 }} />
      <h2>{title}</h2>
      <p>
        {new Date(date).toLocaleString("default", {
          month: "long",
          day: "numeric",
          year: "numeric",
          timeZone: "UTC",
        })}
      </p>
      <p>{explanation}</p>
    </div>
  );
};

export default ImageDisplay;

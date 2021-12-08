import React, { useState, useEffect } from "react";
import axios from "axios";
import fetchData from "./fetchData";
import Header from "./components/Header";
import ImageDisplay from "./components/ImageDisplay";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const todaysDate = new Date().toISOString().split("T")[0];
  const [dateValue, setDateValue] = useState(todaysDate);

  useEffect(() => {
    fetchData()
      // axios
      //   .get(
      //     `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${dateValue}`
      //   )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("Error occurred in useEffect: ", error);
      });
  }, [dateValue]);

  return (
    <div className="App">
      <div>
        <div className="header-container">
          <Header />
        </div>
        <div className="date-finder">
          <input
            className="input"
            type="date"
            max={todaysDate}
            value={dateValue}
            onChange={(event) => {
              setDateValue(event.target.value);
            }}
          />
        </div>
        {data === null ? (
          <h2>Loading...</h2>
        ) : (
          <div>
            <ImageDisplay
              hdurl={data.hdurl}
              title={data.title}
              date={data.date}
              explanation={data.explanation}
            />
            <div className="footer-container">
              <Footer copyright={data.copyright} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

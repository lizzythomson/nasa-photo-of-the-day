import React, { useState, useEffect } from "react";
import axios from "axios";
import fetchData from "./fetchData";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData()
      // axios
      //   .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((response) => {
        console.log("Data: ", response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log("Error occurred in useEffect: ", error);
      });
  }, []);

  return (
    <div className="App">
      <div>
        <Header />
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
            <Footer copyright={data.copyright} />
          </div>
        )}
      </div>
    </div>
  );
}

const Header = () => {
  return (
    <header>
      <h1>NASA Astronomy Picture of the Day </h1>
    </header>
  );
};

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

export default App;

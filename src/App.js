import React from 'react';
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1></h1>
      <Weather/>
      <footer>
        {' '}
        This project was coded by Edona Rexhaj and is{' '}
        <a
          href='https://github.com/ShiineCodes/react-weather-app'
          target='_blank'
        >
          open-sourced on GitHub.
        </a>
      </footer>
    </div>
    </div>
  );
}

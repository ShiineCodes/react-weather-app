import React from 'react';
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Weather defaultCity='stockholm' />
        <footer className='footer'>
          {' '}
          This project was coded by Edona Rexhaj and is{' '}
          <a
            href='https://github.com/ShiineCodes/react-weather-app'
            target='_blank'
            rel='noreferrer'
          >
            open-sourced on GitHub
          </a>{' '}
          and hosted on{' '}
          <a
            href='https://reactweatherapplication2.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >Netlify </a>
        </footer>
      </div>
    </div>
  );
}

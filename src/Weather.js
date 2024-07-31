import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css';

export default function Weather() {
  const [ready, setReady] = useState(false);
  const { weatherData, setWeatherData } = useState({});
  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
    temperature: response.data.main.temp,
    wind:12,
    city: response.data.name  


    });

    setReady(true);
  }

  if (ready) {
    return (
      <div className='Weather'>
        <form>
          <div className='row'>
            <div className='col-9'>
              <input
                type='search'
                placeholder='Enter a city....'
                className='form-control'
                autoFocus='on'
              />
            </div>
            <div className='col-3'>
              <input
                type='submit'
                value='Search'
                className='btn btn-primary w-100'
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Wedsnday 07:00</li>

          <li>{weatherData.descprition}</li>
        </ul>
        <div className='row mt-3'>
          <div className='col-6'>
            <div className='clearfix'>
              <img
                src='https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png'
                alt='Mostly Cloudy'
                className='float-left'
              />
              <div className='float-left'>
                <span className='temperature'>{Math.round(weatherData.temperature)}</span>
                <span className='unit'>°C</span>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: 45%</li>
              <li>Wind:{weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "1a2b7258ebd456c01aef9175dfe8b709";
    let city = "Stockholm";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&apiKey=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..."
  }
}

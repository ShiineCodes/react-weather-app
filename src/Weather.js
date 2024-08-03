import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css';

export default function Weather() {
 const [ready, setReady] = useState(false);
 const [weatherData, setWeatherData] = useState({});
 function handleResponse(response) {
  console.log(response.data);
  setWeatherData({
   temperature: response.data.main.temp,
   humidity: response.data.main.humidity,
   description: response.data.weather[0].descprition,
   iconUrl: 'https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png',
   wind: response.data.wind.speed,
   city: response.data.city
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
        src={weatherData.iconUrl} 
        alt={weatherData.descprition}
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
       <li>Humidity: {weatherData.humidity}</li>
       <li>Wind:{weatherData.wind} km/h</li>
      </ul>
     </div>
    </div>
   </div>
  );
 } else {
  const apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
  let city = "Stockholm";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading..."
 }
}

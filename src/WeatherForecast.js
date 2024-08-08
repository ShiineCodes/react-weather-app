import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";



export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecastData, setForecastData] = useState(null);

    useEffect(() => {
        setLoaded(false);
        }, [props.coordinates]);


    function handleResponse(response) {
        setForecastData(response.data.daily);
        setLoaded(true);
    }

    function load() {
        const apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
        let longitude = props.coordinates.longitude;
        let latitude = props.coordinates.latitude;
        let apiUrl=`https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;
    
        axios.get(apiUrl).then(handleResponse);
    
        return null;
    }

    if (loaded) {
        console.log(forecastData);
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecastData.map(function(dailyForecast, index) {
                        if (index < 5) {
                            return (
                                <div className="col" key={index}>
                                <WeatherForecastDay data={dailyForecast}/>
                             </div>
                             );
                        } else {
                            return null;
                        }
                     })}
                </div>
            </div>
        );
    } else {
        load();
    }
}

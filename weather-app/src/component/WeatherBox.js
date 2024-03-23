import React from "react";

const WeatherBox = ({ weather }) => {
  return (
    <div className="weather-box">
      <div>{weather?.name}</div>
      <h2> 현재온도:{weather?.main.temp}°</h2>
      <h5>
        최저온도:{weather?.main.temp_min}° 최고온도:{weather?.main.temp_max}°
      </h5>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  );
};

export default WeatherBox;

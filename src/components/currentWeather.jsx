import React from "react";

const Weather = ({
  city,
  country,
  error,
  temperature,
  description,
  submit,
  backFunction
}) => {
  return (
    <div className="weatherInfo">
      {submit && city && country && (
        <span>
          {city},{country}
        </span>
      )}
      {submit && temperature && <span> / {temperature}°C</span>}
      {submit && description && <p>{description}</p>}
      {submit && (
        <button className="backButton" onClick={backFunction}>
          Back
        </button>
      )}
      {!submit && <p className="errorMessage">{error}</p>}
    </div>
  );
};

export default Weather;

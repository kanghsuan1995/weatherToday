import React from "react";

const Form = props => {
  return (
    <div className="formContainer">
      <form onSubmit={props.getWeather}>
        <input
          className="inputCity"
          type="text"
          placeholder="city"
          name="city"
          size="10"
        />
        <input
          className="inputCountry"
          type="text"
          placeholder="country"
          name="country"
          size="10"
        />
        <button className="searchButton">Go</button>
      </form>
    </div>
  );
};

export default Form;

import React from "react";
import { useState } from "react";
import Weather from "./currentWeather";
import Form from "./Form.jsx";
import CurrentTime from "./time.jsx";

function App() {
  const [weather, setWeather] = useState([]);
  const APIKEY = "9fb9150f039939137e39401ea9f2af4f";
  const [submit, setSubmit] = useState(false);
  async function fetchData(e) {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();

    const apiData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIKEY}&units=metric`
    )
      .then(res => res.json())
      .then(data => data);
    if (city && country) {
      setWeather({
        data: apiData,
        city: apiData.name,
        country: apiData.sys.country,
        temperature: apiData.main.temp,
        description: apiData.weather[0].description,
        error: "",
        code: apiData.cod
      });
      setSubmit(true);
      const icon = apiData.weather[0].icon;

      if (icon === "10n") {
        document.getElementById("weatherContainerId").style.backgroundImage =
          "linear-gradient(#3b6978, #d4f3ef)";
      } else if ((icon === "01d") | (icon === "02d")) {
        document.getElementById("weatherContainerId").style.backgroundImage =
          "linear-gradient(#ff9234,#fcf876)";
      } else if ((icon === "01n") | (icon === "02n")) {
        document.getElementById("weatherContainerId").style.backgroundImage =
          "linear-gradient(#303960,#5c2a9d,#f1f3f4)";
      } else if (icon === "03d") {
        document.getElementById("weatherContainerId").style.backgroundImage =
          "linear-gradient(#a6dcef,#e0dede)";
      } else if (icon === "03n") {
        document.getElementById("weatherContainerId").style.backgroundImage =
          "linear-gradient(#436f8a,#e0dede)";
      } else if ((icon === "04d") | (icon === "04n")) {
        document.getElementById("weatherContainerId").style.backgroundImage =
          "linear-gradient(#393e46,#dbdbdb)";
      } else if (
        (icon === "09d") |
        (icon === "09n") |
        (icon === "10d") |
        (icon === "10n")
      ) {
        document.getElementById("weatherContainerId").style.backgroundImage =
          "linear-gradient(#30475e,gray,#beebe9)";
      } else if ((icon === "11d") | (icon === "11n")) {
        document.getElementById("weatherContainerId").style.backgroundImage =
          "linear-gradient(#222831,gray,#f6d743)";
      } else if ((icon === "13d") | (icon === "13n")) {
        document.getElementById("weatherContainerId").style.backgroundImage =
          "linear-gradient(#6886c5,#dbdbdb)";
      } else if ((icon === "50d") | (icon === "50n")) {
        document.getElementById("weatherContainerId").style.backgroundImage =
          "linear-gradient(#dbdbdb)";
      }
    } else {
      setWeather({
        data: "",
        city: "",
        country: "",
        temperature: "",
        description: "",
        error: "Please search for a valid city/country"
      });
    }
  }

  function back() {
    setSubmit(false);
    document.getElementById("weatherContainerId").style.backgroundImage =
      "linear-gradient(#ffcbcb, #efee9d)";
  }
  return (
    <div className="weatherContainer" id="weatherContainerId">
      <CurrentTime />
      <h3 className="title">
        Going out today?
        <br />
        Check out the weather first!
      </h3>
      {!submit && <Form getWeather={fetchData} />}
      <Weather
        city={weather.city}
        country={weather.country}
        temperature={weather.temperature}
        description={weather.description}
        submit={submit}
        backFunction={back}
        error={weather.error}
      />
      {console.log(weather.data)}
    </div>
  );
}

export default App;

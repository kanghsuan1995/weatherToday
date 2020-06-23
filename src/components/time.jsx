import React, { useState } from "react";

function CurrentTime() {
  const currentTime = new Date();
  const timeOnly = currentTime.toLocaleTimeString();
  const hour = currentTime.getHours();
  const min = currentTime.getMinutes();
  const day = currentTime.getDay();
  let weekday = "";

  if (day === 1) {
    weekday = "Monday";
  } else if (day === 2) {
    weekday = "Tuesday";
  } else if (day === 3) {
    weekday = "Wednesday";
  } else if (day === 4) {
    weekday = "Thursday";
  } else if (day === 5) {
    weekday = "Friday";
  } else if (day === 6) {
    weekday = "Saturday";
  } else if (day === 7) {
    weekday = "Sunday";
  }

  const [timeNow, setTimeNow] = useState(timeOnly);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTimeNow(newTime);
  }

  setInterval(updateTime, 1000);

  return (
    <div className="timeContainer">
      <h3> {timeNow} </h3>
      <h3>{weekday}</h3>
    </div>
  );
}

export default CurrentTime;

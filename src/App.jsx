import React, { useEffect, useState } from "react";
import "./app.css";
function Clock() {
  const date = new Date();
  const [time, setTime] = useState({
    hour: 0,
    minutes: 0,
    seconds: 0,
    period: "AM",
  });
  function setZero(T) {
    if (T <= 9) {
      return "0" + T;
    } else return T;
  }

  useEffect(() => {
    const currentHour = date.getHours();
    const currentPeriod = currentHour >= 12 ? "PM" : "AM";
    setTime({
      hour: date.getDate(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
      period: currentPeriod,
    });
  });

  return (
    <div className="container">
      <div className="clock">
        <div>{setZero(time.hour)}:</div>
        <div>{setZero(time.minutes)}:</div>
        <div> {setZero(time.seconds)}</div>
        <div className="period">{time.period}</div>
      </div>
    </div>
  );
}

export default Clock;

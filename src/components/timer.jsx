import React from "react";
import Digit from "./Digit";

export default function TimerStyled({ seconds, minutes, hours, days }) {
  return (
    <div className="timer_container">
      {days !== undefined ? (
        <Digit value={days} title="DIAS" addSeparator />
      ) : null}
      {days !== undefined ? (
        <div className="timer_separator">
          <div className="timer_separator_child" />
          <div className="timer_separator_child" />
        </div>
      ) : null}
      <Digit value={hours} title="HORAS" addSeparator />
      <div className="timer_separator">
        <div className="timer_separator_child" />
        <div className="timer_separator_child" />
      </div>
      <Digit value={minutes} title="MINUTOS" addSeparator />
      <div className="timer_separator">
        <div className="timer_separator_child" />
        <div className="timer_separator_child" />
      </div>
      <Digit value={seconds} title="SEGUNDOS" />
    </div>
  );
}

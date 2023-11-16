import React from "react";

export default function Digit({ value, title }) {
  let third = "";
  let leftDigit = "0";
  let rightDigit = "0";
  if (value >= 100) {
    leftDigit = value >= 10 ? value.toString()[1] : "0";
    rightDigit = value >= 10 ? value.toString()[2] : value.toString();
    third = value.toString()[0];
  } else {
    leftDigit = value >= 10 ? value.toString()[0] : "0";
    rightDigit = value >= 10 ? value.toString()[1] : value.toString();
  }
  return (
    <div className="digit_container">
      <span className="digit_title">{title}</span>
      <div className="digit_wrapper">
        {third != "" ? <span className="single_digit">{third}</span> : <></>}
        <span className="single_digit">{leftDigit}</span>
        <span className="single_digit">{rightDigit}</span>
      </div>
    </div>
  );
}

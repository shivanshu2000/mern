import React from "react";

const Rating = ({ value, text }) => {
  const rating = value ? value.toString() : "0";
  let [floor, decimal] = rating.split(".");
  floor = floor * 1;
  decimal = decimal ? decimal * 1 : 0;

  let arrayLength = [];
  let isDecimal = decimal !== 0 && decimal >= 5 ? true : false;

  for (let i = 0; i < floor; i++) {
    arrayLength.push("");
  }

  let decimalNumber = isDecimal ? 1 : 0;

  const emptyStarsLength = 5 - arrayLength.length - decimalNumber;
  let emptyStarsArray = [];

  for (let i = 0; i < emptyStarsLength; i++) {
    emptyStarsArray.push("");
  }

  return (
    <div className="rating">
      {arrayLength.map((rating) => (
        <span key={Math.random().toString()}>
          <i style={{ color: "#f8e825" }} className="fas fa-star"></i>
        </span>
      ))}

      {isDecimal ? (
        <span>
          <i style={{ color: "#f8e825" }} className="fas fa-star-half-alt"></i>
        </span>
      ) : null}

      {emptyStarsArray &&
        emptyStarsArray.map((star) => (
          <span key={Math.random().toString()}>
            <i style={{ color: "#f8e825" }} className="far fa-star"></i>
          </span>
        ))}

      <span className="ml-1">{text && text}</span>
    </div>
  );
};

export default Rating;

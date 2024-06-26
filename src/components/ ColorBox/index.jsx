import React, { useState } from "react";
// import PropTypes from "prop-types";
import "./ColorBox.scss";

ColorBox.propTypes = {};

function getRandomColor() {
  const colorList = ["green", "yellow", "black", "blue", "red"];
  const randomIndex = Math.trunc(Math.random() * 5);
  return colorList[randomIndex];
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box_color") || "deeppink";
    return initColor;
  });

  function handleBoxClick() {
    const newColor = getRandomColor();
    setColor(newColor);

    localStorage.setItem("box_color", newColor);
  }

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={() => handleBoxClick()}
    ></div>
  );
}

export default ColorBox;

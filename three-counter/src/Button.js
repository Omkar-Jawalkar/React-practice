import React from "react";
import "./App.css";

const Button = ({ title = "Increase", fun = "" }) => {
  return <button className="button">{title}</button>;
};

export default Button;

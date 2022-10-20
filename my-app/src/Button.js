import React from "react";

const Button = ({ title = "default" }) => {
  return <button className="button">{title}</button>;
};

export default Button;

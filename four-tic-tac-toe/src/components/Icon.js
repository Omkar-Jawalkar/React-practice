import React from "react";
import { GiCrossMark } from "react-icons/gi";
import { FaRegCircle } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";

const Icon = ({ name = "none" }) => {
  switch (name) {
    case "circle":
      return <FaRegCircle className="icon" />;
    case "cross":
      return <GiCrossMark className="icon" />;
    default:
      return <BsFillPencilFill className="icon" />;
  }
};

export default Icon;

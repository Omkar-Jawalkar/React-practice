import React, { useContext } from "react";

import ThemeContext from "../Context/Context";
import AppTheme from "../Color";

const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return (
    <div>
      <h1>This is Context</h1>
      <button>Click Me</button>
    </div>
  );
};

export default HeroSection;

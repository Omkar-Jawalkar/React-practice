import React, { useContext } from "react";
import ThemeContext from "../Context/Context";

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <div
      onClick={() => {
        setThemeMode(themeMode == "light" ? "dark" : "light");
      }}
    >
      <p>{themeMode === "light" ? "Turn Off" : "Turn On"}</p>
    </div>
  );
};
export default ThemeToggler;

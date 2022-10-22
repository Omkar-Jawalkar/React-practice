import React, { useState } from "react";
import ThemeContext from "./Context/Context";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";

const App = () => {
  const themeHook = useState("light");
  return (
    <div>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <Header>
            <HeroSection></HeroSection>
          </Header>
        </div>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;

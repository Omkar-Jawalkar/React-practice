import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Jumbo from "./Jumbo";
import Appsection from "./Appsection";
import Cardsection from "./Cardsection";
const App = () => {
  return (
    <div>
      <Navbar />
      <Jumbo />
      <Appsection />
      <Cardsection />
      <Footer />
    </div>
  );
};

export default App;

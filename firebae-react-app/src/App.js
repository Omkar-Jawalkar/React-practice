import React, { useState } from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter as Router, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

// FIrebase
import { initializeApp } from "firebase/app";
import "firebase/auth";

// Components

import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import PageNotFound from "./Pages/PageNotFound";
import { UserContext } from "./Context/UserContext";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import firebaseConfig from "./Config/FirebaseConfig";

// init firebase

initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
            {" "}
          </Route>
          <Route path="/signup" element={<SignUp />}>
            {" "}
          </Route>
          <Route path="/signin" element={<SignIn />}>
            {" "}
          </Route>
          <Route path="*" element={<PageNotFound />}>
            {" "}
          </Route>
        </Routes>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;

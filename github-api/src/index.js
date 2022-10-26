import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Link,
  Routes,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import User from "./User";
import Visit from "./Visit";
import NotFound from "./NotFound";

const Routing = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
          <li>
            <Link to="/visit">Visit</Link>
          </li>
        </ul>{" "}
      </div>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/user" element={<User />} />
        <Route path="/visit" element={<Visit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Routing />);

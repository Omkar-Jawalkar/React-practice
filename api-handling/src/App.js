import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Axios from "axios";
import PersonCard from "./PersonCard";

function App() {
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const response = await Axios.get("https://randomuser.me/api/");
    console.log("RESPONSE : ", response.data.results[0]);
    setDetails(response.data.results[0]);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div className="App">
      <PersonCard details={details}></PersonCard>
      <div className=" pt-3 d-flex justify-content-center align-items-md-center align-items-center">
        <Button color="warning" onClick={fetchDetails}>
          Click Me to Change
        </Button>
      </div>
    </div>
  );
}

export default App;

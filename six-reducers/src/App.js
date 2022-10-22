import React, { useReducer } from "react";
import logo from "./logo.svg";

import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import TodoContext from "./Context/TodoContext";
import TododReducer from "./Context/reducer";
import TodoForm from "./Components/TodoForm";
const App = () => {
  const [todos, dispatch] = useReducer(TododReducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <Container fluid>
        <h1>TODO with Context</h1>
        <div
          style={{
            backgroundColor: "pink",
            border: "3px solid black",
            height: "300px",
          }}
        >
          <TodoForm></TodoForm>
        </div>
      </Container>
    </TodoContext.Provider>
  );
};

export default App;

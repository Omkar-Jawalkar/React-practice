import React, { useEffect, useState } from "react";
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";








function App() {




  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    console.log({ localTodos });
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);









  const addTodos = async (todo) => {
    setTodos([...todos, todo]);
  };











  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);








  const markComplete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };









  return (

    <div>
      <Container fluid>
        <h1>Local Storage</h1>
        <Todos todos={todos} markComplete={markComplete}></Todos>
        <TodoForm addTodos={addTodos}></TodoForm>
      </Container>
    </div>
  );
}

export default App;

import React from "react";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";
import App from "../App";

const Todos = ({ todos, markComplete }) => {
  return (
    <ListGroup>
      {todos.map((todo) => (
        <div>
          <ListGroupItem key={todo.id}>
            {todo.todoString}
            <span
              onClick={() => {
                markComplete(todo.id);
              }}
            >
              <FaCheckDouble />
            </span>
          </ListGroupItem>
        </div>
      ))}
    </ListGroup>
  );
};

export default Todos;

import React, { useState } from "react";
import {
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Button,
} from "reactstrap";
import { v4 } from "uuid";

const TodoForm = ({addTodos}) => {
  const [todoString, setTodoString] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoString === "") {
      return alert("Please add a task");
    }

    const todo = {
      todoString,
      id: v4(),
    };

    addTodos(todo)

    setTodoString("")
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <InputGroup>
            <Input
              type="text"
              name="todo"
              id="todo"
              placeholder="Add Something"
              value={todoString}
              onChange={(e) => setTodoString(e.target.value)}
            ></Input>
            <Button color="Success">Add</Button>
          </InputGroup>
        </FormGroup>
      </Form>
    </Container>
  );
};

export default TodoForm;

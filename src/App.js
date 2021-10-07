import "./App.css";
import { useState } from "react";
import Form from "./Components/Form";
import Input from "./Components/Input";
import FormContainer from "./Components/FormContainer";
import Button from "./Components/Button";
import TodoContainer from "./Components/TodoContainer";
import Todo from "./Components/Todo";

function App() {
  const [todos, setTodos] = useState(["hello", "How are you"]);

  const addToTodos = (e) => {};
  const deleteTodo = (index) => {};
  const updateTodo = (index) => {};
  const formChange = (e) => {};

  const btnStyles = {
    marginTop: "20px",
    marginLeft: "5px",
    marginRight: "5px",
  };

  return (
    <div className="App">
      <FormContainer>
        <Form>
          <Input name="text" type="text" placeholder="todo text" />
          <Button type="submit">Submit</Button>
        </Form>
      </FormContainer>

      <TodoContainer>
        {todos.map((todo, index) => (
          <Todo key={index}>
            <h1>{todo}</h1>
            <Button style={btnStyles}>Delete</Button>
            <Button style={btnStyles}>Update</Button>
          </Todo>
        ))}
      </TodoContainer>
    </div>
  );
}

export default App;

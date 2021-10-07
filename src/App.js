import "./App.css";
import { useState, useRef } from "react";
import Form from "./Components/Form";
import Input from "./Components/Input";
import FormContainer from "./Components/FormContainer";
import Button from "./Components/Button";
import TodoContainer from "./Components/TodoContainer";
import Todo from "./Components/Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");
  const todoRef = useRef("");

  const addToTodos = (e) => {
    e.preventDefault();
    // const copyOfArray = [...todos];
    // copyOfArray.push(todoText);
    // setTodos(copyOfArray);
    setTodos([...todos, todoText]);
  };

  const updateTodo = (index) => {
    const copyOfArray = [...todos];
    copyOfArray[index] = todoText;
    setTodos(copyOfArray);
  };

  const deleteTodo = (index) => {
    const copyOfArray = [...todos];
    copyOfArray.splice(index, 1);
    setTodos(copyOfArray);
  };

  // when I type text in the text box it
  // should be saved to state
  // const formChange = (e) => {
  //   setTodoText(e.target.value);
  // };

  const formChange = () => {
    setTodoText(todoRef.current.value);
  };

  const btnStyles = {
    marginTop: "20px",
    marginLeft: "5px",
    marginRight: "5px",
  };

  return (
    <div className="App">
      <FormContainer>
        <Form onSubmit={addToTodos}>
          <Input
            ref={todoRef}
            onChange={formChange}
            type="text"
            placeholder="todo text"
          />
          <Button type="submit">Submit</Button>
        </Form>
      </FormContainer>

      <TodoContainer>
        {todos.map((todo, index) => (
          <Todo key={index}>
            <h1>{todo}</h1>
            <Button
              onClick={(event) => {
                event.preventDefault();
                deleteTodo(index);
              }}
              style={btnStyles}
            >
              Delete
            </Button>
            <Button
              onClick={(event) => {
                event.preventDefault();
                // call function
                // pass the index to that function
                updateTodo(index);
              }}
              style={btnStyles}
            >
              Update
            </Button>
          </Todo>
        ))}
      </TodoContainer>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  const saveTodos = (updatedTodos) => {
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const addTodo = (text) => {
    const newTodo = { text, completed: false, createdAt: new Date() };
    const updatedTodos = [newTodo, ...todos];
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

  const markComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = true;

    updatedTodos.push(updatedTodos.splice(index, 1)[0]);

    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

  const resetTodos = () => {
    setTodos([]);
    saveTodos([]);
  };

  return (
    <div className="App">
      <h2 className="heading">Todo List</h2>
      <button className="reset-button" onClick={resetTodos}>
        Reset
      </button>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} markComplete={markComplete} />
    </div>
  );
}

export default App;

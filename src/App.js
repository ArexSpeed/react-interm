import React from "react";
import TodoList from "./containers/TodoList";
import AddTodo from "./containers/AddTodo";
import styled, { ThemeProvider } from "styled-components";
import "./style.css";

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <AddTodo />
      <TodoList />
    </div>
  );
}

import React from "react";
import { connect } from "react-redux";

const TodoList = ({ todos }) => {
  return <pre>{JSON.stringify(todos, null, 2)}</pre>;
};

const mapStateToProps = state => ({
  todos: state.todos
});
//todos sa wysylane dzieki connect i łączone z TodoList
export default connect(mapStateToProps)(TodoList);

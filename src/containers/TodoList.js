import React from "react";
import Todo from "../components/Todo";
import { connect } from "react-redux";
import { toggleTodo } from "../actions/todo.actions";
import { AVAILABLE_FILTERS } from "../actions/todo.actions";

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
      ))}
    </ul>
  );
};

//filtrowanie zadan
const filterTodos = (todos, filter) => {
  switch (filter) {
    case AVAILABLE_FILTERS.SHOW_COMPLETE:
      return todos.filter(todo => todo.complete === true);
    case AVAILABLE_FILTERS.SHOW_ACTIVE:
      return todos.filter(todo => todo.complete === false);

    default:
      return todos;
  }
};

const mapStateToProps = state => ({
  todos: filterTodos(state.todos, state.filter)
});

const mapDispatchToProps = {
  toggleTodo
};
//todos sa wysylane dzieki connect i łączone z TodoList
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

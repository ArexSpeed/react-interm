import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/todo.actions";

const AddTodo = ({ addTodo }) => {
  let input; //node ref instead state
  const handleSubmit = e => {
    const value = input.value.trim();
    addTodo(value); //wywowalnie fukcnji reduxowej
    console.log(value);
  };
  return (
    <div>
      <input type="text" ref={node => (input = node)} />
      <button type="submit" onClick={handleSubmit}>
        Add Task
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text))
});
// mapDispatchToProps - potrzebna wywolanie akcji reduxowej
export default connect(
  null,
  mapDispatchToProps
)(AddTodo);

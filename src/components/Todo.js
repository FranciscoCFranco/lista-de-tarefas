import React from "react";
import { connect } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/actions";

const Todo = ({ todo, toggleTodo, deleteTodo }) => {
  const { id, content, completed } = todo;

  return (
    <li className={`todo-item ${completed ? "completed" : ""}`}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodo(id)}
        />
        {`ID ${id} - ${content}`}
      </label>
      <button onClick={() => deleteTodo(id)}>Excluir</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => {
    dispatch(toggleTodo(id));
  },
  deleteTodo: (id) => {
    dispatch(deleteTodo(id));
  },
});

export default connect(null, mapDispatchToProps)(Todo);

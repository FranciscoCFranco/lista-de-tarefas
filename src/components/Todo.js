// Todo.js

import React from "react";
import { connect } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/actions";
import "./styles/Todo.css";

const Todo = ({ todo, toggleTodo, deleteTodo }) => {
  const { id, content, completed } = todo;

  return (
    <li className={`todo-item ${completed ? "completed" : ""}`}>
      <div className="checkbox-container">
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => toggleTodo(id)}
          />
        </label>
      </div>
      <div className="content-container">
        <span className="id">{`ID - ${id} -`}</span>
        <span className="content">{content}</span>
      </div>
      <div className="button-container">
        <button onClick={() => deleteTodo(id)}>Excluir</button>
      </div>
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

import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { getTodosByVisibilityFilter } from "../redux/selectors";
import { deleteTodo } from "../redux/actions";
import "./styles/TodoList.css";

const TodoList = ({ todos, deleteTodo }) => (
  <div className="todo-list-container">
    <ul className="todo-list">
      {todos && todos.length ? (
        todos.map((todo, index) => {
          return (
            <Todo
              key={`todo-${todo.id}`}
              todo={todo}
              onDelete={() => deleteTodo(todo.id)}
            />
          );
        })
      ) : (
        <p className="no-tasks">Nenhuma tarefa para realizar hoje</p>
      )}
    </ul>
  </div>
);

const mapStateToProps = (state) => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
};

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => {
    dispatch(deleteTodo(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

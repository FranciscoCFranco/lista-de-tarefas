import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";
import './styles/AddTodo.css'

const AddTodo = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
    setErrorMessage("");
  };

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (newTodo.trim() !== "") {
      addTodo(newTodo);
      setNewTodo("");
    } else {
      setErrorMessage("Por favor, digite uma tarefa antes de adicionar.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTodo(e);
    }
  };

  return (
    <form className="add-todo-form" onSubmit={handleAddTodo}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTodo}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button type="submit">Adicionar</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTodo: (content) => {
    dispatch(addTodo(content));
  },
});

export default connect(null, mapDispatchToProps)(AddTodo);

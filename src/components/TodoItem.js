import React from 'react';

const TodoItem = ({ todo, onDelete }) => {
  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <div>
      <span>{todo.content}</span>
      <button onClick={handleDelete}>Excluir</button>
    </div>
  );
};

export default TodoItem;

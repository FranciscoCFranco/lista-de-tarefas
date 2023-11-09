import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import Login from "./components/Login";
import "./styles.css";

export default function TodoApp() {
  const [user, setUser] = useState(null);

  const handleLogin = (username, password) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="todo-app">
      <Router>
        {user ? (
          <div className="main-content">
            <h1>Bem-vindo, {user}!</h1>
            <button onClick={handleLogout}>Logout</button>
            <AddTodo />
            <div className="todo-list-container">
              <Routes>
                <Route path="/" element={<TodoList filter="all" />} />
                <Route path="/completed" element={<TodoList filter="completed" />} />
                <Route path="/incomplete" element={<TodoList filter="incomplete" />} />
              </Routes>
            </div>
            <VisibilityFilters />
          </div>
        ) : (
          <Routes>
            <Route
              path="/"
              element={<Login onLogin={handleLogin} />}
            />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

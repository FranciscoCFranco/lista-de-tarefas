// TodoApp.js

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import Login from "./components/Login";

export default function TodoApp() {
  const [user, setUser] = useState(null);

  const handleLogin = (username, password) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className={`todo-app ${user ? "authenticated" : ""}`}>
      <Router>
        {user && (
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        )}
        {user ? (
          <div className="main-content">
            <h1>Bem-vindo, {user || "Visitante"}!</h1>
            <div className="button-container">
              <AddTodo />
            </div>
            <VisibilityFilters />
            <div className="todo-list-container">
              <Routes>
                <Route path="/" element={<TodoList filter="all" />} />
                <Route path="/completed" element={<TodoList filter="completed" />} />
                <Route path="/incomplete" element={<TodoList filter="incomplete" />} />
              </Routes>
            </div>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Login onLogin={handleLogin} />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

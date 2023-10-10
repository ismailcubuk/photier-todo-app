import React, { useState, useEffect } from "react";
import axios from "axios";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:3001/todos"); 
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };
console.log(todos);
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.desc}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

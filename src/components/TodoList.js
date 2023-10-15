import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos, deleteTodo } from "../redux/actions"; 
import axios from "axios";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const firstCode = useSelector((state) => state.firstCode);

  useEffect(() => {
    fetchTodosFromApi();
  }, []);

  const fetchTodosFromApi = async () => {
    try {
      const response = await axios.get("http://localhost:3001/todos");
      dispatch(fetchTodos(response.data));
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const handleDeleteTodo = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            {todo.desc}
          </li>
        ))}
      </ul>
      {firstCode}
    </div>
  );
}

export default TodoList;

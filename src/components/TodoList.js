import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos } from '../redux/actions';
import axios from "axios";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchTodosFromApi();
  }, []);

  const fetchTodosFromApi = async () => {
    try {
      const response = await axios.get('http://localhost:3001/todos');
      dispatch(fetchTodos(response.data));
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

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

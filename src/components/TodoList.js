import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos, deleteTodo, setFirstCode } from "../redux/actions";
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
  useEffect(() => {
    const Letters = todos?.map((letter) => letter.desc).join(" ");
    const firstCode = Letters?.match(/[A-Z]/g);
    if (firstCode) {
      dispatch(setFirstCode(firstCode.join("")));
    }
  }, [todos, dispatch]);
  const handleDeleteTodo = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  return (
    <div>
      <h2>Todo List</h2>
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

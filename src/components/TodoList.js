import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos, deleteTodo, setFirstCode } from "../redux/actions";
import axios from "axios";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

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
    <Card className=" bg-white p-5 rounded-lg">
      <CardContent className="flex justify-center flex-col items-center">
        <Typography variant="h4">Todo List</Typography>
        <Typography variant="h6">First Code = {firstCode}</Typography>
      </CardContent>
      {todos.map((todo) => (
        <Box key={todo.id} className="flex p-2">
          <Button variant="contained" onClick={() => handleDeleteTodo(todo.id)}>
            <DeleteIcon />
          </Button>
          <Typography className="pl-5 flex items-center" variant="body1">
            {todo.desc}
          </Typography>
        </Box>
      ))}
    </Card>
  );
}

export default TodoList;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos, deleteTodo, setFirstCode } from "../redux/actions";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
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
      dispatch(setFirstCode("First Code = "+firstCode.join("")));
    }
  }, [todos, dispatch]);
  const handleDeleteTodo = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  return (
    <Card className="p-5 w-full border-2 border-red-600 h-120">
      <CardContent className="flex justify-center flex-col items-center h-40">
        <Typography variant="h4">Todo List</Typography>
        <Typography variant="h6">{firstCode}</Typography>
      </CardContent>
      <Box className="overflow-auto border-2 border-gray-400 h-80">
        {todos.map((todo) => (
          <Box key={todo.id} className="flex p-2 border-2 hover:bg-blue-200">
            <Button
              size="small"
              variant="contained"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              <DeleteIcon />
            </Button>
            <Typography className="pl-5 flex items-center" variant="body1">
              {todo.desc}
            </Typography>
          </Box>
        ))}
      </Box>
    </Card>
  );
}

export default TodoList;

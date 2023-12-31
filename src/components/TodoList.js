import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos, setFirstCode } from "../redux/actions";
import axios from "axios";
import { Box, Card, CardContent, Typography } from "@mui/material";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const firstCode = useSelector((state) => state.firstCode);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3001/todos");
        dispatch(fetchTodos(response.data));
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    }
  
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    const Letters = todos?.map((letter) => letter.desc).join(" ");
    const firstCode = Letters?.match(/[A-Z]/g);
    if (firstCode) {
      dispatch(setFirstCode("First Code = " + firstCode.join("")));
    }
  }, [todos, dispatch]);

  return (
    <Card className="p-5 w-full h-120">
      <CardContent className="flex justify-center flex-col items-center h-40">
        <Typography variant="h4">Todo List</Typography>
        <Typography variant="h6">{firstCode}</Typography>
      </CardContent>
      <Box className="overflow-auto border-2 border-gray-400 h-80">
        {todos.map((todo) => (
          <Box key={todo.id} className="flex p-2 border-2 hover:bg-blue-200">
             <div className="w-16 h-8 rounded-md flex justify-center items-center text-white bg-custom-blue ">
              {todo.id - 1 + "."}
            </div>
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

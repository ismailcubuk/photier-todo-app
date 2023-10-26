import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setDeleteResults, setLastCode, setDeleteQuery, deleteTodo } from "../redux/actions";
import {Box, Button, Card, CardContent, TextField, Typography} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function TodoDelete() {
  const dispatch = useDispatch();
  const deleteQuery = useSelector((state) => state.deleteQuery);
  const deleteResults = useSelector((state) => state.deleteResults);
  const lastCode = useSelector((state) => state.lastCode);
  
  const handleDelete = () => {
    axios
    .delete(`http://localhost:3001/todos/delete?id=${deleteQuery}`)
    .then((response) => {
          dispatch(setDeleteResults(response.data));
          dispatch(setLastCode("Last Code = MENEMEN"));
        })
    .catch((error) => {
      console.error("Search error:", error);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleDelete();
  };

  return (
    <Card className="p-5 w-full h-120 ">
      <form onSubmit={handleSubmit}>
        <Box className="h-40">
          <CardContent className="flex justify-center flex-col items-center">
            <Typography variant="h4">Delete Todo</Typography>
          </CardContent>
          <Box className="flex justify-center">
            <TextField
              label="Delete Request..."
              variant="outlined"
              size="small"
              value={deleteQuery}
              onChange={(e) => dispatch(setDeleteQuery(e.target.value))}
            />
            <Button variant="contained" onClick={handleDelete}>
              Delete
            </Button>
          </Box>
          <Box className="flex justify-center p-2">
            <Typography variant="h6">{lastCode}</Typography>
          </Box>
        </Box>
      </form>
      <Box className="overflow-auto border-2 border-gray-400 h-80">
        {deleteResults?.map((result) => (
          <Box
            className="flex p-2 items-center border-2 hover:bg-blue-200"
            key={result.id}
          >
            <Button
              size="small"
              variant="contained"
              onClick={() => dispatch(deleteTodo(result.id))}
            >
              <DeleteIcon />
            </Button>
            <Typography
              className="pl-5 flex w-5/6 items-center"
              variant="body1"
            >
              {result.desc}
            </Typography>
          </Box>
        ))}
      </Box>
    </Card>
  );
}

export default TodoDelete;

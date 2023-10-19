import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setDeleteResults, setLastCode } from "../redux/actions";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

function TodoDelete() {
  const dispatch = useDispatch();
  const [deleteQuery, setDeleteQuery] = useState("");
  const deleteResults = useSelector((state) => state.deleteResults);
  const lastCode = useSelector((state) => state.lastCode);
  const apiUrl = process.env.REACT_APP_API_URL;
  const apiToken = process.env.REACT_APP_API_TOKEN;
  const handleDelete = () => {
    axios
      .delete(`${apiUrl}/todos?id=${deleteQuery}`, {
        headers: {
          Authorization: apiToken,
        },
      })
      .then((response) => {
        dispatch(setDeleteResults(response.data));
        dispatch(setLastCode("Last Code = " + "KEBAB"));
      })
      .catch((error) => {
        console.error("Search error:", error);
      });
  };

  return (
    <Card className="p-5 w-full h-120 ">
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
            onChange={(e) => setDeleteQuery(e.target.value)}
          />
          <Button variant="contained" onClick={handleDelete}>
            Delete
          </Button>
        </Box>
        <Box className="flex justify-center p-2">
          <Typography variant="h6">{lastCode}</Typography>
        </Box>
      </Box>
      <Box className="overflow-auto border-2 border-gray-400 h-80">
        {deleteResults?.map((result) => (
          <Box
            className="flex p-2 items-center border-2 hover:bg-blue-200"
            key={result.id}
          >
            <div className="w-16 h-8 rounded-md flex justify-center items-center text-white bg-custom-blue ">
              {result.id - 1 + "."}
            </div>
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

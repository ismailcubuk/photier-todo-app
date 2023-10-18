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

  const handleDelete = () => {
    axios
      .delete(`https://challenge.photier.com/todos?id=${deleteQuery}`, {
        headers: {
          Authorization: "3ff0695a1a16fc4814f4baf64ebac6af",
        },
      })
      .then((response) => {
        dispatch(setDeleteResults(response.data));
        dispatch(setLastCode("KEBAB"));
      })
      .catch((error) => {
        console.error("Search error:", error);
      });
  };

  return (
    <Card className="p-5 w-full h-full">
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
      {deleteResults?.map((result) => (
        <Box className="p-2" key={result.id}>
          <Typography className="pl-5" variant="body1">
            {result.id - 1 + "."}
            {result.desc}
          </Typography>
        </Box>
      ))}
    </Card>
  );
}

export default TodoDelete;

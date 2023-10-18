import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setSearchResults, setSecondCode } from "../redux/actions";
import {
  Box,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

function TodoSearch() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const secondCode = useSelector((state) => state.secondCode);
  const searchResults = useSelector((state) => state.searchResults);

  const handleSearch = () => {
    axios
      .get(`https://challenge.photier.com/todos/search?query=${searchQuery}`, {
        headers: {
          Authorization: "3ff0695a1a16fc4814f4baf64ebac6af",
        },
      })
      .then((response) => {
        dispatch(setSearchResults(response.data));
      })
      .catch((error) => {
        console.error("Search error:", error);
      });
  };

  useEffect(() => {
    const Letters = searchResults?.map((letter) => letter.desc).join(" ");
    const secondCode = Letters?.match(/[A-Z]/g);
    if (secondCode) {
      dispatch(
        setSecondCode(
          "Meaning of life according to " + secondCode.join("") + " = 42"
        )
      );
    }
  }, [searchResults, dispatch]);

  return (
    <Card className="p-5 w-full h-full">
      <CardContent className="flex justify-center flex-col items-center">
        <Typography variant="h4">Search Todo</Typography>
      </CardContent>
      <Box className="flex justify-center">
        <TextField
          label="Search..."
          variant="outlined"
          size="small"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box className="flex justify-center p-2">
        <Typography variant="h6">{secondCode}</Typography>
      </Box>
      {searchResults?.map((result) => (
        <Box className="p-2 flex border-2 hover:bg-blue-200" key={result.id}>
          <div className="w-16 h-8 rounded-md flex justify-center items-center text-white bg-custom-blue ">
            {result.id - 1 + "."}
          </div>
          <Typography className="pl-5 flex items-center" variant="body1">
            {result.desc}
          </Typography>
        </Box>
      ))}
    </Card>
  );
}

export default TodoSearch;

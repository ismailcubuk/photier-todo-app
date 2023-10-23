import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setSearchResults, setSecondCode, setSearchQuery } from "../redux/actions";
import {Box, Button, Card, CardContent, TextField, Typography} from "@mui/material";

function TodoSearch() {
  const dispatch = useDispatch();
  const secondCode = useSelector((state) => state.secondCode);
  const searchResults = useSelector((state) => state.searchResults);
  const searchQuery = useSelector((state) => state.searchQuery);

  const handleSearch = () => {
    axios
      .get(`http://localhost:3001/todos/search?query=${searchQuery}`)
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

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };
  
  return (
    <Card className="p-5 w-full h-120">
      <form onSubmit={handleSubmit}>
        <Box className="h-40">
          <CardContent className="flex justify-center flex-col items-center">
            <Typography variant="h4">Search Todo</Typography>
          </CardContent>
          <Box className="flex justify-center">
            <TextField
              label="Search..."
              variant="outlined"
              size="small"
              value={searchQuery}
              onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            />
            <Button variant="contained" onClick={handleSearch}>
              Search
            </Button>
          </Box>
          <Box className="flex justify-center p-2">
            <Typography variant="h6">{secondCode}</Typography>
          </Box>
        </Box>
      </form>
      <Box className="overflow-auto border-2 border-gray-400 h-80">
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
      </Box>
    </Card>
  );
}

export default TodoSearch;

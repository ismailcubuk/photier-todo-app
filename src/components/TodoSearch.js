import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setSearchResults, setSecondCode } from "../redux/actions";

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
      dispatch(setSecondCode("Meaning of life according to " + secondCode.join("") + " = 42"));
    }
  }, [searchResults, dispatch]);

  return (
    <div>
      <h2>Search Todo</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {searchResults?.map((result) => (
          <li key={result.id}> {result.desc} </li>
        ))}
      </div>
      <div> {secondCode} </div>
    </div>
  );
}

export default TodoSearch;
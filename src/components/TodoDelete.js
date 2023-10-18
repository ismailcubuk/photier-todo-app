import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setDeleteResults, setLastCode } from "../redux/actions";
import { Typography } from "@mui/material";

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
    <div>
      <Typography variant="h4">TodoDelete</Typography>
      <input
        type="text"
        placeholder="Delete..."
        value={deleteQuery}
        onChange={(e) => setDeleteQuery(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>
      <div>
        {deleteResults?.map((result) => (
          <li key={result.id}> {result.desc} </li>
        ))}
      </div>
      {lastCode}
    </div>
  );
}

export default TodoDelete;

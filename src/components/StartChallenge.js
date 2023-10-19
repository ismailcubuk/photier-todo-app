import React, { useState } from "react";
import axios from "axios";
import { Box, Button, TextField, Typography } from "@mui/material";
import photier from "../photier.png";
const BASE_URL = "https://challenge.photier.com";
const TOKEN = "3ff0695a1a16fc4814f4baf64ebac6af";
const StartChallenge = () => {
  const [email, setEmail] = useState("");

  const startChallenge = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}/start/`,
        { email },
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );

      console.log("Challenge start:", response.data);
    } catch (error) {
      console.error("An error occurred while starting the challenge:", error);
    }
  };

  return (
    <Box className="w-full h-full flex justify-center items-center flex-col gap-4">
      <img src={photier} className="w-96" alt="photier" />
      <Box className="bg-white p-5 w-96 rounded-md flex flex-col items-center ">
        <Typography variant="h4">Start Challenge</Typography>
        <Box className="flex">
          <TextField
            label="Mail"
            variant="outlined"
            size="small"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button variant="contained" onClick={startChallenge}>
            Start
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default StartChallenge;

const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const apiUrl = process.env.REACT_APP_API_URL;
const apiToken = process.env.REACT_APP_API_TOKEN;

app.use(express.json());

app.get("/todos", async (req, res) => {
  try {
    const response = await axios.get(`${apiUrl}/todos`, {
      headers: { Authorization: `Bearer ${apiToken}` },
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).json({ error: "An error occurred while fetching todos." });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

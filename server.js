const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());
const fs = require('fs');

const apiUrl = process.env.REACT_APP_API_URL;
const apiToken = process.env.REACT_APP_API_TOKEN;

app.use(express.json());

// TODOS
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
// SEARCH
app.get("/todos/search", async (req, res) => {
  const searchQuery = req.query.query;
  try {
    const response = await axios.get(
      `${apiUrl}/todos/search?query=${searchQuery}`,
      {
        headers: { Authorization: `Bearer ${apiToken}` },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error searching todos:", error);
    res.status(500).json({ error: "An error occurred while searching todos." });
  }
});
// DELETE
app.delete("/todos/delete", async (req, res) => {
  const deleteQuery = req.query.id;

  try {
    const response = await axios.delete(`${apiUrl}/todos?id=${deleteQuery}`, {
      headers: { Authorization: `Bearer ${apiToken}` },
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error deleting todos:", error);
    res.status(500).json({ error: "An error occurred while deleting todos." });
  }
});
// COMPLETE
app.post("/todos/complete", async (req, res) => {
  const finalCode = req.body.code;
  const zipFile = req.body.file;

  const formData = new FormData();
  formData.append("code", finalCode);
  formData.append('zipFile', fs.createReadStream(zipFile));

  try {
    const response = await axios.post(`${apiUrl}/complete`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${apiToken}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error submitting data:", error);
    res.status(500).json({ error: "An error occurred while submitting data." });
  }
});
// PORT
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

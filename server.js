const express = require("express");
const axios = require("axios");
const app = express();

const API_URL = "https://challenge.photier.com/todos";
const TOKEN = "3ff0695a1a16fc4814f4baf64ebac6af";

app.use(express.json());

app.get("/todos", async (req, res) => {
  try {
    const response = await axios.get(API_URL, {
      headers: { Authorization: `Bearer ${TOKEN}` },
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

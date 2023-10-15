const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");
const path = require("path");

const API_ENDPOINT = "https://challenge.photier.com/complete";
const FINAL_CODE = "DOUGLAS"; 

const zipFilePath = path.join(__dirname, "your-code.zip");

const formData = new FormData();
formData.append("code", FINAL_CODE);
formData.append("file", fs.createReadStream(zipFilePath));

axios.post(API_ENDPOINT, formData, {
  headers: {
    ...formData.getHeaders(),
  },
})
  .then((response) => {
    console.log("Challenge completion response:", response.data);
  })
  .catch((error) => {
    console.error("Error completing the challenge:", error);
  });

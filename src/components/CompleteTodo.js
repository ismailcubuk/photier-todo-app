import React, { useState } from "react";
import axios from "axios";
import { Typography, Button, TextField } from "@mui/material";

function CompleteTodo() {
  const [finalCode, setFinalCode] = useState("");
  const [zipFile, setZipFile] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;
  const handleFileChange = (event) => {
    setZipFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("code", finalCode);
    formData.append("file", zipFile);

    axios
      .post(`${apiUrl}/complete`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer 3ff0695a1a16fc4814f4baf64ebac6af`,
        },
      })
      .then((response) => {
        console.log("Submission successful:", response.data);
      })
      .catch((error) => {
        console.error("Submission error:", error);
      });
  };
  return (
    <div className="bg-white rounded-md p-5 mx-5 w-full">
      <form onSubmit={handleSubmit} className="flex flex-col w-full justify-center">
        <div className="flex mb-2 w-full">
          {/* FİLE CODE */}
          <div className="flex xl:flex-col w-1/2">
            <Typography variant="h6" className="flex justify-center items-center xl:justify-start">Final Code</Typography>
            <TextField
              label="Final Code"
              variant="outlined"
              size="small"
              value={finalCode}
              onChange={(e) => setFinalCode(e.target.value)}
            />
          </div>
          {/* UPLOAD */}
          <div className="flex flex-row-reverse justify-end xl:flex-col w-1/2">
            {zipFile ? (
              zipFile && (
                <Typography variant="h6" className="flex">
                  Selected File :
                  {zipFile.name.length > 10
                    ? `${zipFile.name.slice(0, 10)}...`
                    : zipFile.name}
                </Typography>
              )
            ) : (
              <Typography variant="h6">Upload File</Typography>
            )}
            <input
              type="file"
              id="file-upload-input"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <label htmlFor="file-upload-input">
              <Button variant="contained" component="span" className="xl:w-2/4">
                Upload File
              </Button>
            </label>
          </div>
        </div>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default CompleteTodo;
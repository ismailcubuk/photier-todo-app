import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setFinalCode, setZipFile } from "../redux/actions";
import { Typography, Button, TextField } from "@mui/material";

function CompleteTodo() {
  const dispatch = useDispatch();
  const finalCode = useSelector((state) => state.finalCode);
  const zipFile = useSelector((state) => state.zipFile);

 const handleFileChange = (e) => {
    dispatch(setZipFile(e.target.files[0]));
  };

   const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("code", finalCode);
    formData.append('zipFile', zipFile);

    try {
      const response = await axios.post(`http://localhost:3001/complete`, formData);
      console.log("Submission successful:", response.data);
    } catch (error) {
      console.error("Submission error:", error);
    }
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
              onChange={(e) => dispatch(setFinalCode(e.target.value))}
            />
          </div>
          {/* UPLOAD */}
          <div className="flex flex-row-reverse xl:justify-start justify-end xl:flex-col w-1/2">
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
              <Button variant="contained" component="span" >
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

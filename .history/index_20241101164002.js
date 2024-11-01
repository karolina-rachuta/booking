import express from "express";
import dotenv from "dotenv";
const app = express();

app.listen(8800, () => {
    console.log("Connected to backend.");
})
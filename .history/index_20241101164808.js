import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();


try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
  } catch (error) {
    handleError(error);
  }

app.listen(8800, () => {
    console.log("Connected to backend.");
})
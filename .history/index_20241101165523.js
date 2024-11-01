import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongoDB")
    } catch (error) {
        throw error;
    }
};

//api server, no mongodb connection => no api request => then it will throw err
app.listen(8800, () => {
    connect();
    console.log("Connected to backend.");
})
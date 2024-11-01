import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB")
    } catch (error) {
        throw error;
    }
};
//listen on mongodb connection, and if disconnected it will try connect again
mongoose.connection.on("disconnected", () => {
console.log("mongoDB disconnected!")
})

mongoose.connection.on("connected", () => {
console.log("mongoDB connected!")
})

//user is sending req, and what will be our response
app.get("/", (req, res) => {

})

//api server, no mongodb connection => no api request => then it will throw err
app.listen(8800, () => {
    connect();
    console.log("Connected to backend.");
})
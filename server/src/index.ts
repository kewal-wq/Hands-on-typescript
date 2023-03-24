import dotenv from "dotenv";
dotenv.config();
import env from "./utils/validateEnv";
import express from "express";
import mongoose from "mongoose";
const app = express();

const MONGO_URL: string = env.MONGO_CONNECTION_URL;


mongoose.connect(MONGO_URL)
.then(() => {
    console.log("Database connected");
})
.catch((err) => {
    console.log("Error in connecting the database", err);
})
app.get("/", (req: any, res: any) => {
    res.send("Hello world");
})

app.listen(4000, () => {
    console.log("Server started on port 4000");
})
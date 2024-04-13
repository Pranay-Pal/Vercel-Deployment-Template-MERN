import express from "express";
import { fileURLToPath } from 'url';
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import SampleRouter from "./api/routes/SampleRoute.js";
dotenv.config();

const app = express();
//MongoDB connection
mongoose.connect(process.env.MONGOURI).then(() => console.log("Connected to MongoDB")).catch((err) => console.log(err));
//Static frontend serving
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'dist')))
app.get("/", (req, res, next) => {res.sendFile(path.join(__dirname, 'dist', 'index.html'));});
// APIs section 
app.use(express.json());
app.use("/api/sample", SampleRouter);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

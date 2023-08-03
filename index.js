import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import book_router from "./routes/bookroutes.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
dotenv.config();
mongoose.connect(process.env.MONGOURI).then(() => console.log("Connected to MongoDB")).catch((err) => console.log(err));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import path from "path";
const app = express();
app.use(express.static(path.join(__dirname, 'dist')))
app.get("/", (req, res, next) => {res.sendFile(path.join(__dirname, 'dist', 'index.html'));});
app.use("/api/books", book_router);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));


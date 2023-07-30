import express from "express";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import path from "path";
const app = express();
app.use(express.static(path.join(__dirname, 'dist')))
app.get("/", (req, res, next) => {res.sendFile(path.join(__dirname, 'dist', 'index.html'));});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

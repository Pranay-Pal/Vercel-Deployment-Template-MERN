import * as express from "express";
const SampleRouter = express.Router();
import SampleController from "../controllers/SampleController.js";

SampleRouter.get("/",SampleController.getAll);

export default SampleRouter;
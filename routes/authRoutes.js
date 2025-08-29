import express, { json } from "express"
import { fetchFromApi, loginController } from "../controller/authController.js";
import {authMiddleware} from "../middleware/authMiddleware.js"

const authRouter = express.Router();

authRouter.post("/login",loginController)
authRouter.post("/fetch",authMiddleware,fetchFromApi)


export default authRouter
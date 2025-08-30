import express, { json } from "express"
import { fetchFromApi, loginController, searchuser } from "../controller/authController.js";
import {authMiddleware} from "../middleware/authMiddleware.js"

const authRouter = express.Router();

authRouter.post("/login",loginController)
authRouter.post("/fetch",authMiddleware,fetchFromApi)
authRouter.post("/searchuser",authMiddleware,searchuser)


export default authRouter
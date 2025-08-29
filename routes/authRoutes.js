import express, { json } from "express"
import { loginController } from "../controller/authController.js";

const authRouter = express.Router();

authRouter.post("/login",loginController)


export default authRouter
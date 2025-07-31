import express from "express";
import { userSignup, userLogin } from "../controllers/authController.js";
const routers = express.Router();

routers.post("/signup", userSignup);
routers.post("/login", userLogin);

export default routers;

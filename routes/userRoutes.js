import express from "express";
import { getAllUsers, loginUser, signUpUser } from "../controllers/userController.js";
const router = express.Router();

router.get("/",getAllUsers)


router.post("/signup",signUpUser)
router.post("/login",loginUser)
export default router;
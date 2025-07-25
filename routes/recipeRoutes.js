import express from "express"
import { getAllRecipes } from "../controllers/recipeControllers.js";
const router = express.Router();

router.get("/all", getAllRecipes);


export default router;

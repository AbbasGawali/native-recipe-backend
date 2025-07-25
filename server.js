import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config();
import "./config/connection.js"
import logger from "./middlewares/logger.js";
import recipeRoute from "./routes/recipeRoutes.js"
const app = express();
const port = process.env.PORT || 7000

app.use(express.json())
app.use(cors());
app.use(logger)
app.use("/api/v1/recipe", recipeRoute)

app.get("/", (req, res) => {
    res.send("hello")
})

app.listen(port, () => {
    console.log(`listening at Port : ${port.rainbow}`)
}) 

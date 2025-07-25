import mongoose from "mongoose"
import dotenv from "dotenv" 
dotenv.config();


mongoose.connect((process.env.MONGOURI)).then(() => {
    console.log("connection successs".rainbow.bgBlack)
}).catch((err) => {
    console.log("connection failed with error : ".bgRed + err)
})
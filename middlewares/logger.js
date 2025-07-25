import colors from "colors"

const logger = (req, res, next) => {
    console.log(`${req.method.green} : ${req.url}`)
    next();
}


export default logger;
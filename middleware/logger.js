import colors from 'colors'
export const logger = (req,res,next) => {
    switch(req.method){
        case "GET":
            console.log(`${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`.green.bold)
        case "PUT":
            console.log(`${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`.blue.bold)
        case "DELETE":
            console.log(`${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`.red.bold)
        case "POST":
            console.log(`${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`.yellow.bold)
    }
    next();
}
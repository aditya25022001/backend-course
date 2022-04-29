import express from 'express'
import dotenv from 'dotenv'
import { logger } from './middleware/logger.js'
import { connectDB } from './config/db.js'

dotenv.config()

connectDB()

const PORT = process.env.PORT

const app = express()

app.use(logger)

app.post("/",(req,res) => {
    res.send("Hello")
})


app.listen(PORT, console.log(`Server running on ${PORT} in ${process.env.NODE_ENV} mode`));


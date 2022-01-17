import express from 'express'
import dotenv from 'dotenv'

dotenv.config({ path:"./config/.env" })

const PORT = process.env.PORT

const app = express()

app.listen(PORT, console.log(`Server running on ${PORT} in ${process.env.NODE_ENV} mode`));


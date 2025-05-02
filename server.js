import express from "express"
import cors from "cors"
import helmet from "helmet"
import dotenv from "dotenv"
import { changeVolume } from "./controllers/controller.js"
import morgan from "morgan"

dotenv.config()

const app = express()

// Middleware
app.use(cors()) // Allows requests from different origins
app.use(helmet()) // Security HTTP
app.use(express.json()) // Allows express to use JSON
app.use(morgan('dev'))

const PORT = process.env.PORT || 3000

// Routes
app.post("/api/dispositivos", changeVolume)

export default app

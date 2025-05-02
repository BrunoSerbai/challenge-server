import express from "express"
import {
    changeVolume
} from "../controllers/productController.js"

const router = express.Router() // Router is a middleware that handles requests and responses

router.post("/", changeVolume)

export default router

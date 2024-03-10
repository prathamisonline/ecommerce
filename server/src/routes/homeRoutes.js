import express from "express"
import { createHomeData, deleteHomeData, getHomedata, updataHomeData } from "../Controllers/homeController.js";

const router = express.Router();

router.post("/home", createHomeData)
router.get("/home", getHomedata)
router.put("/home/:id", updataHomeData)
router.delete("/home/:id", deleteHomeData)

export default router
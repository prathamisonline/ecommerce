import express from "express"
import { createHomeData, deleteHomeData, getHomedata, updataHomeData } from "../Controllers/homeController.js";
import { adminOnly } from "../middleware/adminOnly.js";
const router = express.Router();

router.post("/home", adminOnly, createHomeData)
router.get("/home", getHomedata)
router.put("/home/:id", adminOnly, updataHomeData)
router.delete("/home/:id", adminOnly, deleteHomeData)

export default router
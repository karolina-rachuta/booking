import express from "express";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";

const router = express.Router();

//CREATE
router.post("/", createHotel);

//UPDATE

router.put("/:id", updateHotel);

//DELETE

router.delete("/:id", deleteHotel);

//GET

router.get("/:id", getHotel);

//GET A HOTEL

router.get("/", getHotels);

export default router;
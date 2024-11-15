import express from "express";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel, countByCity, countByType, getHotelRoom } from "../controllers/hotel.js";
import { verifyAdmin} from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE

router.put("/:id", verifyAdmin, updateHotel);

//DELETE

router.delete("/:id", verifyAdmin, deleteHotel);

//GET

router.get("/find/:id", getHotel);

//GET A HOTEL

router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRoom);
//id - hotel id
export default router;
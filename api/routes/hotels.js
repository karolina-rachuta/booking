import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();

//CREATE
router.post("/", async (req, res) => {

    //take hotel information from user:
    const newHotel = new Hotel(req.body)

    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);

    } catch (error) {
        res.status(500).json(err);
    }
})

//UPDATE

router.put("/:id", async (req, res) => {
    // mongoDb $set method to update hotel
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        // it will return new version of our document in postman
        res.status(200).json(updatedHotel);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE

router.delete("/:id", async (req, res) => {
    // mongoDb $set method to update hotel
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        // it will return new version of our document in postman
        res.status(200).json("Hotel has been deleted.");
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET

router.get("/:id", async (req, res) => {
    // mongoDb $set method to update hotel
    try {
        const hotel = await Hotel.findById(req.params.id);
        // it will return new version of our document in postman
        res.status(200).json(hotel);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET A HOTEL

router.get("/", async (req, res, next) => {

    try {
        const hotels = await Hotel.find();
        // it will return new version of our document in postman
        res.status(200).json(hotels);
    } catch (err) {
        next(err);
        // res.status(500).json(err);
    }
});

export default router;
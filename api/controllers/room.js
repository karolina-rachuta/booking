import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";

export const createRoom = async (req, res, next) => {
    //after creating room, we need to add this id to Hotel model - rooms

    const hotelId = req.params.hotelid; //from url
    const newRoom = new Room(req.body);

    try {
        const savedRoom = await newRoom.save();

        //$push method from mongo db to push data to array
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: {rooms: savedRoom._id}
            })

        } catch (err) {
            next(err);
        }
        res.status(200).json(savedRoom);

    } catch (err) {
        next(err);
    }

}

export const updateRoom = async (req, res, next) => {
    // mongoDb $set method to update hotel
    try {
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {
            new: true
        });
        // it will return new version of our document in postman
        res.status(200).json(updatedRoom);
    } catch (err) {
        next(err);
    }
}

export const updateRoomAvailability = async (req, res, next) => {
    // mongoDb $set method to update hotel
    try {
        await Room.updateOne({"roomNumbers._id": req.params.id}, {
            $push: {
                "roomNumbers.$.unavailableDates": req.body.dates
            }
            //updating nested properties "roomNumbers.$.unavailableDates"
        });
        // it will return new version of our document in postman
        res.status(200).json("Room status has been updated");
    } catch (err) {
        next(err);
    }
}

export const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    try {
        await Room.findByIdAndDelete(req.params.id);
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull: {rooms: req.params.id}
            })
        } catch (err) {
            next(err);
        }
        // it will return new version of our document in postman
        res.status(200).json("Hotel has been deleted.");
    } catch (err) {
        next(err);
    }
}

export const getRoom = async (req, res, next) => {
    try {
        const room = await Room.findById(req.params.id);
        // it will return new version of our document in postman
        res.status(200).json(room);
    } catch (err) {
        next(err);
    }
}

export const getRooms = async (req, res, next) => {
    try {
        const rooms = await Room.find();
        // it will return new version of our document in postman
        res.status(200).json(rooms);
    } catch (err) {
        next(err);
    }
}
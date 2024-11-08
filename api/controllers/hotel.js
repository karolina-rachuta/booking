import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body)

    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);

    } catch (error) {
        next(err);
    }
}

export const updateHotel = async (req, res, next) => {
    // mongoDb $set method to update hotel
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {
            new: true
        });
        // it will return new version of our document in postman
        res.status(200).json(updatedHotel);
    } catch (err) {
        next(err);
    }
}

export const deleteHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        // it will return new version of our document in postman
        res.status(200).json("Hotel has been deleted.");
    } catch (err) {
        next(err);
    }
}

export const getHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        // it will return new version of our document in postman
        res.status(200).json(hotel);
    } catch (err) {
        next(err);
    }
}

export const getHotels = async (req, res, next) => {
    try {
        const hotels = await Hotel.find();
        // it will return new version of our document in postman
        res.status(200).json(hotels);
    } catch (err) {
        next(err);
    }
}
export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try {
        const list = await Promise.all(cities.map(city => {
            return Hotel.countDocuments({
                city: city
            })
        }))
        res.status(200).json(list);
    } catch (err) {
        next(err);
    }
}
export const countByType = async (req, res, next) => {
    try {
        const hotelCount = await Hotel.countDocuments({
            type: "hotel"
        });
        const apartmentCount = await Hotel.countDocuments({
            type: "apartaments"
        });
        const resortCount = await Hotel.countDocuments({
            type: "resports"
        });
        const villasCount = await Hotel.countDocuments({
            type: "villas"
        });
        const cabinCount = await Hotel.countDocuments({
            type: "cabins"
        });

        res.status(200).json([
            {type: "hotel", count: hotelCount},
            {type: "apartments", count: apartmentCount},
            {type: "resorts", count: resortCount},
            {type: "villas", count: villasCount},
            {type: "cabins", count: cabinCount},
        ])

    } catch (err) {
        next(err);
    }
}
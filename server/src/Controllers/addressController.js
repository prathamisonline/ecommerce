import Address from "../models/Address.js";
import User from "../models/User.js";
import { createError } from "../utils/utility.js";

export const createAddress = async (req, res, next) => {
    const userId = req.body;

    const user = await User.find(userId)
    if (!user) {
        return next(
            createError({
                status: 400,
                message: "Something went wrong, Login again and try",
            }))
    };
    try {
        const newAddress = new Address(req.body);
        await newAddress.save();
        res.status(201).json(newAddress)

    } catch (error) {
        next(error);

    }
};


export const getAddress = async (req, res, next) => {
    const id = req.params.id;

    try {
        const user = await Address.find({ userId: id })
        if (!user) {
            return next(
                createError({
                    status: 400,
                    message: "User not found"
                })
            )
        };
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};


export const deleteAddress = async (req, res, next) => {
    const id = req.params.id;
    try {
        await Address.findByIdAndDelete(id)
        res.status(200).json({ message: "Address deleted successfully" })
    } catch (error) {

    }
};


export const updateAddress = async (req, res, next) => {
    const id = req.params.id;

    try {
        const { address, addressType, city, landmark, postalCode, state, userId } = req.body;
        if (
            !address ||
            !addressType ||
            !city ||
            !landmark ||
            !postalCode ||
            !state
        ) {
            return next(
                createError({ status: 400, message: "All fields must be filled" })
            );
        }

        const updatedAddress = await Address.findByIdAndUpdate(id, { address, addressType, city, landmark, postalCode, state, userId }, { new: true });

        if (!updatedAddress) {
            return next(
                createError({
                    status: 400,
                    message: "Address not found"
                })
            )
        }
        res.status(200).json({ message: "Address saved successfully" })


    } catch (error) {
        next(error)
    }
};

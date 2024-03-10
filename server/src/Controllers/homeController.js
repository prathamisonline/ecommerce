import Home from "../models/Home.js"

export const createHomeData = async (req, res, next) => {
    try {
        const homeData = new Home(req.body);
        await homeData.save();

        res.status(200).json({ message: "Home data created successfully!" });

    } catch (error) {
        next(error)
    }
}
export const getHomedata = async (req, res, next) => {
    try {
        const homeData = new Home.find()
        res.status(200).json(homeData);

    } catch (error) {
        next(error)
    }
}
export const deleteHomeData = async (req, res, next) => {
    const { id } = req.body;
    try {
        await Home.findByIdAndDelete(id);
        res.status(200).json({ message: "Home data deleted successfully" });

    } catch (error) {
        next(error)
    }
}
export const updataHomeData = async (req, res, next) => {
    const { id } = req.body;
    try {
        await Home.findByIdAndUpdate(id, { $set: req.body });
        res.status(200).json({ message: "Home data updated successfully" });

    } catch (error) {
        next(error)
    }
}
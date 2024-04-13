import SampleModel from "../models/SampleModel.js";

export const getAll = async (req, res, next) => {
    let All;
    try {
        All = await SampleModel.find();
    }
    catch (err) {
        console.log(err);
    }
    if (!All) {
        return res.status(404).json({ message: "NAN" });
    }
    return res.status(200).json({ All });
}

export default {getAll};
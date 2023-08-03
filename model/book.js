import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name:
    {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    price:
    {
        type: Number,
        required: true
    },
    available:
    {
        type: Boolean,
        required: true
    }
});
export default mongoose.model("Book", BookSchema);
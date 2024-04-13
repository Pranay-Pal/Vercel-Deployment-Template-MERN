import mongoose from "mongoose";
const Schema = mongoose.Schema;
const SampleSchema = new Schema({});
export default mongoose.model("SampleSchema", SampleSchema);
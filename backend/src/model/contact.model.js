import mongoose, { Schema } from "mongoose";
import { model } from "mongoose";

const contactus_schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    phone: { type: String, required: true },
})
const contact = model('contact', contactus_schema);
export default contact
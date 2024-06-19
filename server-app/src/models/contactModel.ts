import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Add the contact name'],
    },
    email: {
        type: String,
        required: [true, "Add the contact email"],
    },
    phone: {
        type: String,
        required: [true, "Add the contact phone number"],
    },
}, {
    timestamps: true,
});

export const contactModel = mongoose.model("Contact", contactSchema);
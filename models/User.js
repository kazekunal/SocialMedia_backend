import mongoose, { Schema } from "mongoose";

const schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlenght: 8
    }
});

export default mongoose.model("User" , userSchema);
// mongodb will store it as users
import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    image:{
        type: String,
        max:4000
    },
    email:{
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    bio:{
        type: String,
    },
    youtube:{
        type: String,
    },
    instagram:{
        type: String,
    },
    facebook:{
        type: String,
    },
    github:{
        type: String,
    }
});
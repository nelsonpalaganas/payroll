const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: [true],
    },
    lastname: {
        type: String,
        required: [true],
    },
    email: {
        type: String,
        required: [true],
        unique: true,
    },
    password: {
        type: String,
        required: [true],
    },
    role: {
        type: String,
        required: [true],
    },
    mobile: {
        type: Number,
        required: [true],
    },
    DOB: {
        type: String,
    },
    age: {
        type: Number,
    },
    gender: {
        type: String,
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)
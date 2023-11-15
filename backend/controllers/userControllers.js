const User = require('../model/userModel')

const registerUser = async (req, res) => {
    res.json({message: 'Register User'})
}

const loginUser = async (req, res) => {
    res.json({message: 'Login User'})
}

module.exports = {
    registerUser,
    loginUser,
}
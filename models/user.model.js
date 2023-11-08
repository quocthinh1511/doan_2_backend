const mongoose = require('mongoose');

const { Schema } = mongoose;

// create table users
const userSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },

}, { timestamps: true });


const User = mongoose.model('users', userSchema);

module.exports = User;
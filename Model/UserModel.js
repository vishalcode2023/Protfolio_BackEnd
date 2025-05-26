const mongoose = require('mongoose');
const joi = require('joi');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    subject: {
        type: String,
        required: true,
    },
}, {
    timestamps: true, 
})

const ValidationSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    subject: joi.string().required(),
});

const UserModel = mongoose.model('User', UserSchema);
module.exports = { UserModel, ValidationSchema };




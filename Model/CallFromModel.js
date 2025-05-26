const mongoose = require('mongoose');
const Joi = require('joi');

const CallFromSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    },
}, { timestamps: true });

const validationSchema = Joi.object({
    name: Joi.string().required().messages({
        'string.empty': 'Name is required',
        'any.required': 'Name is required',
    }),
    phone: Joi.string().required().messages({
        'string.empty': 'Phone number is required',
        'any.required': 'Phone number is required',
    }),
});

const CallFromModel = mongoose.model('CallFrom', CallFromSchema);
module.exports = {
    CallFromModel,
    validationSchema,
};
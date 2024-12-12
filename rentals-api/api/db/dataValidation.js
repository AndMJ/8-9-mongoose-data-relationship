const Joi = require("joi")
Joi.objectID = require("joi-objectid")(Joi)

const carJoiSchema = Joi.object({
    _id: Joi.objectID(),
    model: Joi.string(),
    manufacturer: Joi.objectID(),
    year: Joi.number()
})

const customerJoiSchema = Joi.object({
    _id: Joi.objectID(),
    name: {type: String, required: true},
    age: {type: Number, required: true},
    email: {type: String, required: true},
})

const companyJoiSchema = Joi.object({
    _id: Joi.objectID(),
    name: Joi.string(),
    industry: Joi.string()
})

const rentalJoiSchema = Joi.object({
    _id: Joi.objectID(),
    car: Joi.objectID(),
    customer: Joi.objectID()
})

module.exports = {
    companyJoiSchema,
    customerJoiSchema,
    carJoiSchema,
    rentalJoiSchema
}
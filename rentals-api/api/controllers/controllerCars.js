const {companyJoiSchema, carJoiSchema} = require("../db/dto")
const Joi = require("joi");

module.exports = () => {
    const modelCars = require("../models/modelCars")()
    const modelCompanies = require("../models/modelCompanies")()

    const controller = []
    controller.getCarsList = async (req, res) => {
        try {
            const result = await modelCars.getAll()
            res.status(200).json(result)
        } catch (e) {
            return res.status(404).json(e.message)
        }
    }

    controller.newCar = async (req, res) => {
        try {
            //DATA VALIDATION
            let companyIsValid = companyJoiSchema.validate({
                _id: req.body.manufacturer
            })
            if (companyIsValid.error){
                return res.status(404).json(companyIsValid.error.details[0].message)
            }

            let carIsValid = carJoiSchema.validate({
                model: req.body.model.trim(),
                manufacturer: req.body.manufacturer,
                year: req.body.year
            })
            if (carIsValid.error){
                return res.status(404).json(carIsValid.error.details[0].message)
            }

            const result = await modelCars.create({
                model: req.body.model.trim(),
                manufacturer: req.body.manufacturer,
                year: req.body.year
            })

            res.status(200).json(result)
        } catch (e) {
            return res.status(404).json(e.message)
        }
    }

    return controller
}
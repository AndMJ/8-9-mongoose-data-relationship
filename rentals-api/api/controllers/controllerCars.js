module.exports = () => {
    const modelCars = require("../models/modelCars")()

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
            const result = await modelCars.create({
                manufacturer: "BMW", //TODO: do this correctly, find a company, and reference it here
                model: "E30",
                year: 1998
            })
            res.status(200).json(result)
        } catch (e) {
            return res.status(404).json(e.message)
        }
    }

    return controller
}
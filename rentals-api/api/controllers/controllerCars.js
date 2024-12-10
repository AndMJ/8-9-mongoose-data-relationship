module.exports = () => {
    const modelCars = require("../models/modelCars")()
    //const modelCompanies = require("../models/modelCompanies")()

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
            const company = await modelCompanies.getByID("378n4tvoq")

            // const result = await modelCars.create({
            //     manufacturer: "BMW",
            //     model: "E30",
            //     year: 1998
            // })
            // res.status(200).json(result)
        } catch (e) {
            return res.status(404).json(e.message)
        }
    }

    return controller
}
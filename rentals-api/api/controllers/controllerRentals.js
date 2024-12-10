//TODO: apply Joi validation
module.exports = () => {
    const modelRentals = require("../models/modelRentals")()

    const controller = []
    controller.getRentalsList = async (req, res) => {
        try {
            const result = await modelRentals.getAll()
            res.status(200).json(result)
        } catch (e) {
            return res.status(404).json(e.message)
        }
    }

    return controller
}
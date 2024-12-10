module.exports = () => {
    const modelCustomers = require("../models/modelCustomers")()

    const controller = []
    controller.getCustomersList = async (req, res) => {
        try {
            const result = await modelCustomers.getAll()
            res.status(200).json(result)
        } catch (e) {
            return res.status(404).json(e.message)
        }
    }

    return controller
}
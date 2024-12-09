module.exports = () => {
    const modelCompanies = require("../models/modelCompanies")()

    const controller = []
    controller.getCompaniesList = async (req, res) => {
        try {
            const result = await modelCompanies.getAll()
            res.status(200).json(result)
        } catch (e) {
            return res.status(404).json(e.message)
        }
    }

    return controller
}
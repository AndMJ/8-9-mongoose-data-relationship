const {mongoose, dbConnection} = require("../db/mongodb")

module.exports = () => {

    const Company = mongoose.model("Companies", new mongoose.Schema({
        name: {type: String, required: true},
        industry: {type: String, required: true},
    }))

    const model = []
    model.getAll = async () => {
        let conn;
        try {
            conn = await dbConnection()
            return await Company.find()
        } catch (e) {
            return e
        }finally {
            conn.disconnect()
        }
    }

    return model
}
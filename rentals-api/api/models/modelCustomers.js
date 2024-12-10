const {mongoose, dbConnection} = require("../db/mongodb")
//TODO: apply db transactions
module.exports = () => {

    const Customer = mongoose.model("Customers", new mongoose.Schema({
        name: {type: String, required: true},
        email: {type: String, required: true},
    }))

    const model = []
    model.getAll = async () => {
        let conn;
        try {
            conn = await dbConnection()
            return await Customer.find()
        } catch (e) {
            return e
        }finally {
            conn.disconnect()
        }
    }

    return model
}
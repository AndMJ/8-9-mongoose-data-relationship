const {mongoose, dbConnection} = require("../db/mongodb")
//TODO: apply db transactions
module.exports = () => {

    const Rental = mongoose.model("Rentals", new mongoose.Schema({
        car: {
            type: mongoose.Types.ObjectId,
            ref: "Cars"
        },
        customer: {
            type: mongoose.Types.ObjectId,
            ref: "Customers"
        }
    }))

    const model = []
    model.getAll = async () => {
        let conn;
        try {
            conn = await dbConnection()
            return await Rental.find()
        } catch (e) {
            return e
        }finally {
            conn.disconnect()
        }
    }

    return model
}
const {mongoose, dbConnection, Rental} = require("../db/db-rentals")
//TODO: apply db transactions
module.exports = () => {

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
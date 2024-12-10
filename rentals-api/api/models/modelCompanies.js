const {mongoose, dbConnection, Company} = require("../db/db-rentals")

module.exports = () => {

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
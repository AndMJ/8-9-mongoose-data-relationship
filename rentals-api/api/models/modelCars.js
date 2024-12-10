const {mongoose, dbConnection, Car} = require("../db/db-rentals")

module.exports = () => {

    const model = []
    model.getAll = async () => {
        let conn;
        try {
            conn = await dbConnection()
            return await Car.find().populate()
        } catch (e) {
            return e
        }finally {
            if (conn) conn.disconnect()
        }
    }

    /*model.create = async (data) => {
        let conn;
        try {
            conn = await dbConnection() //TODO: DB TRANSACTIONSSSSS
            // find a company, then ...
            const newCar = new Car({
                manufacturer: foundCompany._id,
                model: data.model,
                year: data.year,
            })
            return await newCar.save()
        } catch (e) {
            return e
        }finally {
            if (conn) conn.disconnect()
        }
    }*/

    return model
}
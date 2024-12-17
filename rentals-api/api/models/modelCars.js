const {mongoose, dbConnection, Car} = require("../db/db-rentals")

module.exports = () => {

    const model = []
    model.getAll = async () => {
        let conn;
        try {
            conn = await dbConnection()
            return await Car.find().populate("manufacturer")
        } catch (e) {
            return e
        }finally {
            if (conn) conn.disconnect()
        }
    }

    model.create = async (data) => {
        let conn;
        try {
            conn = await dbConnection() //TODO: DB TRANSACTIONSSSSS
            const newCar = new Car({
                manufacturer: data.manufacturer,
                model: data.model,
                year: data.year,
            })
            const result = await newCar.save()
            return await Car.findById(result._id).populate()
        } catch (e) {
            return e
        }finally {
            if (conn) conn.disconnect()
        }
    }

    return model
}
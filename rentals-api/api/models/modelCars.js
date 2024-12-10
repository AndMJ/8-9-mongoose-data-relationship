const {mongoose, dbConnection} = require("../db/mongodb")

module.exports = () => {

    const Car = mongoose.model("Cars", new mongoose.Schema({
        manufacturer: {
            type: mongoose.Types.ObjectId,
            ref: "Companies"
        },
        model: {type: String, required: true},
        year: {type: Number, required: true}
    }))

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

    model.create = async (data) => {
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
    }

    return model
}
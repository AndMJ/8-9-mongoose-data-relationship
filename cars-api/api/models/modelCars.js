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
            return await Car.find()
        } catch (e) {
            return e
        }finally {
            if (conn) conn.disconnect()
        }
    }

    model.create = async (data) => {
        let conn;
        try {
            conn = await dbConnection()
            const newCar = new Car({...data})
            return await newCar.save()
        } catch (e) {
            return e
        }finally {
            if (conn) conn.disconnect()
        }
    }

    return model
}
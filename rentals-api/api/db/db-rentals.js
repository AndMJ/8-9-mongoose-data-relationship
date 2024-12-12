const mongoose = require("mongoose")

const dbConnection = async () => {
    try{ //TODO: USE DB TRASACTIONSS
        return await mongoose.connect("mongodb://localhost:27017/rentalsDB")
    } catch (e) {
        return e
    }
}

//ID validation
// const isValidID = (id) => {
//     return mongoose.SchemaTypes.ObjectId.isValid(id)
// }

//DB schemas
const Company = mongoose.model("Companies", new mongoose.Schema({
    name: {type: String, required: true},
    industry: {type: String, required: true},
}))

const Customer = mongoose.model("Customers", new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    email: {type: String, required: true},
}))

const Car = mongoose.model("Cars", new mongoose.Schema({
    manufacturer: {
        type: mongoose.Types.ObjectId,
        ref: "Companies",
        required: true
    },
    model: {type: String, required: true},
    year: {type: Number, required: true}
}))

const Rental = mongoose.model("Rentals", new mongoose.Schema({
    car: {
        type: mongoose.Types.ObjectId,
        ref: "Cars",
        required: true
    },
    customer: {
        type: mongoose.Types.ObjectId,
        ref: "Customers",
        required: true
    }
}))

module.exports = {
    mongoose,
    dbConnection,
    Company,
    Customer,
    Car,
    Rental,
    //isValidID
}
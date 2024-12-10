const mongoose = require("mongoose")

const dbConnection = async () => {
    try{ //TODO: USE DB TRASACTIONSS
        return await mongoose.connect("mongodb://localhost:27017/rentalsDB")
    } catch (e) {
        return e
    }
}

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
        ref: "Companies"
    },
    model: {type: String, required: true},
    year: {type: Number, required: true}
}))

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

module.exports = {
    mongoose,
    dbConnection,
    Company,
    Customer,
    Car,
    Rental
}
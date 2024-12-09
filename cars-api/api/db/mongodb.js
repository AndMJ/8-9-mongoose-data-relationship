const mongoose = require("mongoose")

const dbConnection = async () => {
    try{
        return await mongoose.connect("mongodb://localhost:27017/playground")
    } catch (e) {
        return e
    }
}

module.exports = {
    mongoose,
    dbConnection
}
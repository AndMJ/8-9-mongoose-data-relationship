module.exports = (app) => {
    const controllerRentals = require("../controllers/controllerRentals")()

    app.route("/api/v1/rentals/list").get(controllerRentals.getRentalsList)
}
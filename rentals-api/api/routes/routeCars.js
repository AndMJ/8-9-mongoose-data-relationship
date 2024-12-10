module.exports = (app) => {
    const controllerCars = require("../controllers/controllerCars")()

    app.route("/api/v1/cars/list").get(controllerCars.getCarsList)
}
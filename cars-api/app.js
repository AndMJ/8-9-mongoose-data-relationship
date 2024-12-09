const express = require("express")
const helmet = require("helmet");
const app = express()

//middlewares
app.use(express.json())
app.use(helmet())

app.set("port", process.env.PORT)

//routes
require("./api/routes/routeCompanies")(app)
require("./api/routes/routeCars")(app)

app.listen(app.get("port"), () => {
    console.log(`Listening to port ${app.get("port")}`)
})
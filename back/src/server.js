const express = require("express")
const router = require("./routes/")
const morgan = require("morgan")
const cors = require("cors")

const app = express()

// aca quiero utilizar el middleware de morgan
app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
    console.log("Estamos pasando por mi propio middleware");
    next()
})

app.use(router)

module.exports = app
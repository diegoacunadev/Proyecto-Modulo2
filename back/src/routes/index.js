//Aqui vamos a definir las rutas a travees de las cuales nos podemos comunicar

// tengo definida la solicitud a GER /users => controlador

const { Router } = require("express")

const moviesRouter = require("./moviesRouter")

const router = Router()


router.use("/movies" , moviesRouter)


module.exports = router
const { Router } = require("express")
const moviesController = require("../controllers/moviesController")
const validateMovies = require("../middlewares/validateMovies")
const moviesRouter = Router()

moviesRouter.get("/", moviesController.getAllMovies)

moviesRouter.post("/", validateMovies, moviesController.createMovie)

module.exports = moviesRouter

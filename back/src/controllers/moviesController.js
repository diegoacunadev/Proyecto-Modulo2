
const moviesService = require("../services/moviesService")

module.exports = {
    getAllMovies: async (req, res) => {
        try {
            const movies = await moviesService.getMovies()        
            res.status(200).json(movies)            
        } catch (error) {
            res.status(500).json({
                error: "Error interno del servidor"
            })
        }
    },

    createMovie: async (req, res) => {
            const { title, year, director, duration, genre, rate, poster } = req.body
            console.log("Datos recibidos en el controlador:", req.body);
            try {
                await moviesService.createMovies(title, year, director, duration, genre, rate, poster)
                res.status(201).json({
                    message: "Pelicula creada con exito"
                })            
            } catch (error) {
                res.status(500).json({
                    error: "Error al crear el pelicula"
                })
            }
        }
}

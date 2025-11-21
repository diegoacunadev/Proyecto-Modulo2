const { Movie } = require("../models/Movie")

module.exports = {
    getMovies: async () => {
      const movies = await Movie.find()
      return movies
    },

    createMovies: async (title, year, director, duration, genre, rate, poster) => {
    try {
      const newMovie = new Movie({
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster
      });

      const savedMovie = await newMovie.save();
      return savedMovie;
    } catch (error) {
      console.error("Error al crear la película:", error);
      throw error;
    }
  }
}



















// module.exports = {
//     getMovies: async () => {
//         return dbMovies
//     },

//     createMovies: async (title, year, director, duration, genre, rate, poster) => {
//         const newMovie = {
//             title, 
//             year, 
//             director, 
//             duration, 
//             genre, 
//             rate, 
//             poster
//         }
//         dbMovies.push(newMovie)
//     }
// }
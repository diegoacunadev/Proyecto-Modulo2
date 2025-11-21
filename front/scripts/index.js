const { createMovie, validacionCheckbox } = require('./createMovieForm');
const { getMovies } = require('./getMovies');
const { renderMovies } = require('./renderCard');

// Página Crear Películas
if (window.location.pathname.includes("/pages/crearPeliculas.html")) {
  createMovie();
  validacionCheckbox()
}

// Página principal o donde se muestran las películas
if (
  window.location.pathname.endsWith("/index.html") ||
  window.location.pathname.includes("/pages/verPeliculas.html")
) {
  getMovies(
    renderMovies,
    (err) => {
      alert("Error al obtener las películas:", err);
    }
  );
}


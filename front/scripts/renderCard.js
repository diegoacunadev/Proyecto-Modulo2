
const renderMovies = (movies) => {
  const contenedor = document.getElementById("contenedor-peliculas");

  movies.forEach((pelicula) => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "col-md-4";

    tarjeta.innerHTML = `
      <div class="movie-card" style="background-image: url('${pelicula.poster}');">
        <div class="overlay">
          <p><strong>Director:</strong> ${pelicula.director || "Desconocido"}</p>
          <p><strong>Año Estreno:</strong> ${pelicula.year}</p>
          <p><strong>Duración:</strong> ${pelicula.duration || "N/A"}</p>
          <p><strong>Genero:</strong> ${pelicula.genre || "N/A"}</p>
          <p><strong>Calificacion:</strong> ${pelicula.rate || "N/A"}</p>
        </div>
        <div class="movie-title">
          <a href="#">${pelicula.title}</a>
        </div>
      </div>
    `;

    contenedor.appendChild(tarjeta);
  });
};

module.exports = {
  renderMovies
};

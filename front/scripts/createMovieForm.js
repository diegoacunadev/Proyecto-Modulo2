const axios = require("axios");

function createMovie() {
    const form = document.querySelector("form");

    // ✅ Botón para limpiar el formulario manualmente
    const resetBtn = document.querySelector('#resetear');
    resetBtn.addEventListener('click', () => {
        form.reset();
    });

    // ✅ Evento al enviar el formulario
    form.addEventListener("submit", async (evento) => {
        evento.preventDefault();

        // Recolectar géneros seleccionados
        const generosSeleccionados = [];
        document.querySelectorAll('input[type="checkbox"]:checked').forEach((checkbox) => {
            generosSeleccionados.push(checkbox.value);
        });

        // Crear objeto de nueva película
        const newMovie = {
            title: document.getElementById("nombre").value.trim(),
            year: parseInt(document.getElementById("lanzamiento").value.trim(), 10),
            director: document.getElementById("director").value.trim(),
            duration: document.getElementById("duracion").value.trim(),
            genre: generosSeleccionados,
            rate: document.getElementById("calificacion").value.trim(),
            poster: document.getElementById("url").value.trim()
        };

        // Validación de campos vacíos
        if (
            !newMovie.title ||
            isNaN(newMovie.year) ||
            !newMovie.director ||
            !newMovie.duration ||
            !newMovie.genre.length ||
            !newMovie.rate ||
            !newMovie.poster
        ) {
            alert("Faltan datos o el año no es válido. Por favor verifica la información.");
            return;
        }

        console.log("Datos a enviar:", newMovie);

        // Enviar datos con Axios
        try {
            const response = await axios.post("http://localhost:3000/movies", newMovie);

            console.log("Película guardada con éxito:", response.data);

            const mensaje = document.getElementById("mensaje-exito");
            if (mensaje) {
                mensaje.style.display = "block";
                setTimeout(() => {
                    mensaje.style.display = "none";
                }, 3000);
            }

            setTimeout(() => {
                form.reset();
                console.log("✅ Formulario reseteado después de 3000ms");
                navigation.navigate('/index.html')
            }, 3000);
            
        } catch (error) {
            console.error("Error en la solicitud:", error);
            if (error.response) {
                alert("Error del servidor: " + (error.response.data.error || "desconocido"));
            } else {
                alert("No se pudo conectar con el servidor");
            }
        }
    });
}

function validacionCheckbox() {
    const form = document.querySelector("form");
    const checkboxes = document.querySelectorAll(".genero-check");
    const errorGenero = document.getElementById("error-genero");

    // Validación al enviar
    form.addEventListener("submit", function (event) {
        const algunoSeleccionado = Array.from(checkboxes).some(checkbox => checkbox.checked);
        if (!algunoSeleccionado) {
            event.preventDefault();
            errorGenero.style.display = "block";
        } else {
            errorGenero.style.display = "none";
        }
    });

    // Validación en tiempo real
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            const algunoSeleccionado = Array.from(checkboxes).some(cb => cb.checked);
            errorGenero.style.display = algunoSeleccionado ? "none" : "block";
        });
    });
}

module.exports = {
    createMovie,
    validacionCheckbox
};

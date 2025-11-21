module.exports = function validateMovies(req, res, next) {
    let { title, year, director, duration, genre, rate, poster } = req.body || {};

    // Convertir a número antes de validar
    year = Number(year);
    rate = Number(rate);

    if (!title || typeof title !== "string") {
        return res.status(400).json({ error: "El campo 'title' es obligatorio y debe ser un string." });
    }

    if (!year || isNaN(year)) {
        return res.status(400).json({ error: "El campo 'year' es obligatorio y debe ser un número válido." });
    }

    if (!director || typeof director !== "string") {
        return res.status(400).json({ error: "El campo 'director' es obligatorio y debe ser un string." });
    }

    if (!duration || typeof duration !== "string") {
        return res.status(400).json({ error: "El campo 'duration' es obligatorio y debe ser un string (ej. '2h 16min')." });
    }

    if (!Array.isArray(genre) || genre.length === 0) {
        return res.status(400).json({ error: "El campo 'genre' debe ser un array con al menos un elemento." });
    }

    if (isNaN(rate) || rate < 0 || rate > 10) {
        return res.status(400).json({ error: "El campo 'rate' debe ser un número entre 0 y 10." });
    }

    if (!poster || typeof poster !== "string" || !poster.startsWith("http")) {
        return res.status(400).json({ error: "El campo 'poster' debe ser una URL válida." });
    }

    // Actualizar los valores en req.body para el siguiente middleware/controlador
    req.body.year = year;
    req.body.rate = rate;

    next();
};

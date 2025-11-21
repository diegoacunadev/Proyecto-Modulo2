const axios = require('axios');

const getMovies = (onSuccess, onError) => {
  //axios.get("https://students-api.up.railway.app/movies")
  axios.get("http://localhost:3000/movies/")
    .then((response) => {
      console.log("Datos recibidos: ", response.data);
      onSuccess(response.data);
    })
    .catch((error) => {
      onError(error);
    });
};

module.exports = {
  getMovies
};
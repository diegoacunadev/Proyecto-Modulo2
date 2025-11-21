const dbCon = require("./src/config/dbCon");
const app = require("./src/server")

dbCon().then(
    res =>{
        const PORT = 3000
        app.listen(PORT, () => {
            console.log("servidor escuchando en el puerto: " + 3000);
        })
    }
)


import * as dotenv from "dotenv";
dotenv.config();

import sequelize from "./db/connection.js";
import app from "./app.js";

// Tables DB
// import "./models/adminAcc.js";
// import "./models/user.js";
// import "./models/userPayment.js";

async function main (){
    const PORT = process.env.port || 3000;
    try {
        // await sequelize.authenticate();
        // console.log("Connection has been established successfully.");

        // DROP TABLE - ELIMINA TODAS LAS TABLAS
        // await sequelize.drop();
        // force:{true} Elimina las tablas anteriores y la fuerza a que se generen nuevamente si es que se han generado cambios
        await sequelize.sync({force: true})
        // await sequelize.sync()
        app.listen(PORT);
        console.log("Server is listening on port:", PORT);
        console.log("http://localhost:" + PORT)
    } catch (error) {
        console.error("Unable to connect to the database.", error)
    }
};

main();



// app.listen(PORT, () => {
//  console.log("SERVER ON", "http://localhost:" + PORT);
// });
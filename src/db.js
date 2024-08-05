// Este archivo define la función para conectar a la base de datos MongoDB utilizando Mongoose.
// La función `connectDB` establece la conexión con la base de datos y maneja los errores de conexión.

import mongoose from "mongoose"; // Importa la librería Mongoose para interactuar con MongoDB.

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/repTwdb'); // Intenta conectar a la base de datos MongoDB en la URL proporcionada.
        console.log(">>> Base de datos conectada correctamente <<<"); // Imprime un mensaje en la consola si la conexión es exitosa.
    } catch (error) {
        console.log('Error en la conexión'); // Imprime un mensaje en la consola si ocurre un error durante la conexión.
    }
}
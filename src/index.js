// Este archivo configura e inicia el servidor de Express, así como se conecta a la base de datos.
// Primero, establece la conexión a la base de datos y luego inicia el servidor en el puerto 3000.

import app from "./app.js"; // Importa la aplicación Express configurada desde el archivo `app.js`.
import { connectDB } from './db.js'; // Importa la función para conectar con la base de datos desde el archivo `db.js`.

connectDB(); // Establece la conexión a la base de datos.

// Inicia el servidor Express en el puerto 3000.
app.listen(3000, () => {
  console.log('Server listening on port', 3000); // Imprime un mensaje en la consola cuando el servidor comienza a escuchar en el puerto 3000.
});
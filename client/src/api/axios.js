// Este archivo configura una instancia de axios con la URL base de la API y opciones predeterminadas.
// La configuración de esta instancia asegura que todas las solicitudes realizadas con ella
// tengan la URL base adecuada y puedan enviar cookies para la autenticación.

import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api", // Establece la URL base para todas las solicitudes.
  withCredentials: true, // Permite el envío de cookies con las solicitudes (importante para la autenticación basada en cookies).
});

export default instance; // Exporta la instancia de axios configurada para su uso en otras partes de la aplicación.

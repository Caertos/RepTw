// Este archivo define las funciones de solicitud para interactuar con la API de autenticación.
// Utiliza `axios` para realizar solicitudes HTTP relacionadas con el registro, inicio de sesión y verificación del token.

import axios from './axios'; // Importa la instancia de axios configurada.

export const registerRequest = (user) => axios.post(`/register`, user);
// Función para enviar una solicitud POST para registrar un nuevo usuario.
// - `user`: Objeto que contiene la información del usuario para el registro.
// - Envía una solicitud POST a la ruta `/register` con el objeto `user` en el cuerpo de la solicitud.

export const loginRequest = (user) => axios.post(`/login`, user);
// Función para enviar una solicitud POST para iniciar sesión.
// - `user`: Objeto que contiene la información de inicio de sesión del usuario.
// - Envía una solicitud POST a la ruta `/login` con el objeto `user` en el cuerpo de la solicitud.

export const verifyTokenRequest = () => axios.get('auth/verify-token');
// Función para enviar una solicitud GET para verificar el token de autenticación.
// - No recibe parámetros.
// - Envía una solicitud GET a la ruta `auth/verify-token` para verificar la validez del token en las cookies.


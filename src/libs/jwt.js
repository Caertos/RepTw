import jwt from 'jsonwebtoken'; // Importa el módulo jsonwebtoken para trabajar con JWT.
import { TOKEN_SECRET } from '../config.js'; // Importa la clave secreta para firma y verificacion de tokens desde la configuración.
export function createAccesToken(payload) {
    // Devuelve una nueva Promesa para manejar la creación del token asincrónicamente.
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload, // El payload es el contenido que se incluirá en el token (ej. ID de usuario, roles).
            TOKEN_SECRET, // Clave secreta utilizada para firmar el token.
            {
                expiresIn: "1d", // Establece la duración del token a 1 día.
            },
            (err, token) => { // Función callback que maneja el resultado de la firma.
                if (err) reject(err); // Si ocurre un error al firmar el token, rechaza la promesa con el error.
                resolve(token); // Si la firma es exitosa, resuelve la promesa con el token generado.
            }
        );
    });
}

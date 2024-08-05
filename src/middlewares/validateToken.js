import jwt from 'jsonwebtoken'; // Importa el módulo jsonwebtoken para trabajar con tokens JWT.
import { TOKEN_SECRET } from '../config.js'; // Importa la clave secreta para firma y verificacion de tokens desde la configuración.

export const authRequired = (req, res, next) => {
    // Obtiene las cookies de la solicitud.
    const cookies = req.cookies;
    // Extrae el token de las cookies.
    const token = cookies.token;

    // Verifica si el token no está presente en las cookies.
    if (!token) {
        // Si no hay token, responde con un estado 401 (No autorizado) y un mensaje de error.
        return res.status(401).json({ message: "Autorización denegada, no existe token" });
    }

    // Verifica el token usando el secreto y la función verify de jsonwebtoken.
    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        // Si hay un error en la verificación del token, responde con un estado 403 (Prohibido) y un mensaje de error.
        if (err) {
            return res.status(403).json({ message: "Token no válido" });
        }
        // Si el token es válido, añade el usuario al objeto de solicitud.
        req.user = user;
        // Llama al siguiente middleware o ruta.
        next();
    });
};

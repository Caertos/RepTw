import { Router } from "express"; // Importa el módulo Router de Express para definir las rutas.
import {
  login,
  register,
  logout,
  profile,
  verifyToken,
} from "../controllers/auth.controller.js"; // Importa los controladores que manejan las acciones relacionadas con autenticación.
import { authRequired } from "../middlewares/validateToken.js"; // Importa el middleware que valida la autenticación de tokens.
import { validateSchema } from "../middlewares/validator.middleware.js"; // Importa el middleware para validar los datos de entrada según los esquemas.
import { registerSchema, loginSchema } from "../schemas/auth.Schema.js"; // Importa los esquemas de validación para registro e inicio de sesión.

const router = Router(); // Crea una instancia de Router para definir las rutas.

router.post("/register", validateSchema(registerSchema), register);
// Define la ruta POST para el registro de usuarios.
// Valida la entrada de datos usando el esquema `registerSchema`.
// Luego llama al controlador `register` para manejar la solicitud de registro.

router.post("/login", validateSchema(loginSchema), login);
// Define la ruta POST para el inicio de sesión de usuarios.
// Valida la entrada de datos usando el esquema `loginSchema`.
// Luego llama al controlador `login` para manejar la solicitud de inicio de sesión.

router.post("/logout", logout);
// Define la ruta POST para cerrar sesión.
// Llama al controlador `logout` para manejar la solicitud de cierre de sesión.

router.get("/profile", authRequired, profile);
// Define la ruta GET para obtener el perfil del usuario.
// Usa el middleware `authRequired` para asegurar que el usuario esté autenticado.
// Luego llama al controlador `profile` para manejar la solicitud de perfil.

router.get("/auth/verify-token", verifyToken);
// Define la ruta GET para verificar el token de autenticación.
// Llama al controlador `verifyToken` para manejar la solicitud de verificación del token.

export default router; // Exporta el enrutador configurado para ser utilizado en otras partes de la aplicación.
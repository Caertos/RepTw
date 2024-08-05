import { Router } from "express"; // Importa el módulo Router de Express para definir las rutas.
import { authRequired } from "../middlewares/validateToken.js"; // Importa el middleware que valida la autenticación de tokens.
import {
  getTweets,
  getTweet,
  createTweet,
  deleteTweet,
  updateTweet,
  getMyTweets,
} from "../controllers/tweets.controller.js"; // Importa los controladores que manejan las acciones relacionadas con tweets.

const router = Router(); // Crea una instancia de Router para definir las rutas.

router.get("/tweets", authRequired, getTweets);
// Define la ruta GET para obtener todos los tweets.
// Usa el middleware `authRequired` para asegurar que el usuario esté autenticado.
// Luego llama al controlador `getTweets` para manejar la solicitud.

router.get("/myTweets", authRequired, getMyTweets);
// Define la ruta GET para obtener los tweets del usuario autenticado.
// Usa el middleware `authRequired` para asegurar que el usuario esté autenticado.
// Luego llama al controlador `getMyTweets` para manejar la solicitud.

router.get("/tweet/:id", authRequired, getTweet);
// Define la ruta GET para obtener un tweet específico por su ID.
// Usa el middleware `authRequired` para asegurar que el usuario esté autenticado.
// Luego llama al controlador `getTweet` para manejar la solicitud.

router.post("/tweets", authRequired, createTweet);
// Define la ruta POST para crear un nuevo tweet.
// Usa el middleware `authRequired` para asegurar que el usuario esté autenticado.
// Luego llama al controlador `createTweet` para manejar la solicitud.

router.delete("/tweets/:id", authRequired, deleteTweet);
// Define la ruta DELETE para eliminar un tweet específico por su ID.
// Usa el middleware `authRequired` para asegurar que el usuario esté autenticado.
// Luego llama al controlador `deleteTweet` para manejar la solicitud.

router.put("/tweets/:id", authRequired, updateTweet);
// Define la ruta PUT para actualizar un tweet específico por su ID.
// Usa el middleware `authRequired` para asegurar que el usuario esté autenticado.
// Luego llama al controlador `updateTweet` para manejar la solicitud.

export default router; // Exporta el enrutador configurado para ser utilizado en otras partes de la aplicación.


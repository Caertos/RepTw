// Este archivo configura una aplicación Express, incluyendo middleware para manejo de solicitudes, autenticación y rutas.
// La configuración incluye el manejo de CORS, logging, procesamiento de JSON y cookies, así como las rutas para autenticación y tweets.

import express from "express"; // Importa la librería Express para crear la aplicación del servidor.
import morgan from "morgan"; // Importa el middleware de logging para registrar las solicitudes HTTP.
import cookieParser from "cookie-parser"; // Importa el middleware para parsear cookies en las solicitudes.
import cors from "cors"; // Importa el middleware para habilitar CORS (Cross-Origin Resource Sharing).

import authRoutes from "./routes/auth.routes.js"; // Importa las rutas de autenticación.
import tweetsRoutes from "./routes/tweets.routes.js"; // Importa las rutas para gestionar tweets.

const app = express(); // Crea una instancia de la aplicación Express.

// Configura el middleware CORS para permitir solicitudes desde un origen específico y permitir el uso de credenciales.
app.use(
  cors({
    origin: 'http://localhost:5173', // Permite solicitudes desde esta URL (puerto del frontend).
    credentials: true, // Permite el envío de cookies y credenciales con las solicitudes.
  })
);

// Configura el middleware de logging para registrar información sobre las solicitudes HTTP en la consola.
app.use(morgan("dev"));

// Configura el middleware para procesar el cuerpo de las solicitudes en formato JSON.
app.use(express.json());

// Configura el middleware para parsear cookies en las solicitudes.
app.use(cookieParser());

// Define las rutas de autenticación y tweets, prefijadas con `/api`.
// Las solicitudes a `/api` serán gestionadas por `authRoutes` o `tweetsRoutes` según el endpoint.
app.use("/api", authRoutes);
app.use("/api", tweetsRoutes);

export default app; // Exporta la instancia de la aplicación Express configurada para su uso en otros archivos.

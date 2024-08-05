import User from "../models/user.model.js"; // Importa el modelo de usuario para interactuar con la base de datos.
import bcrypt from "bcryptjs"; // Importa bcryptjs para el hash de contraseñas.
import { createAccesToken } from "../libs/jwt.js"; // Importa la función para crear tokens de acceso.
import jwt from "jsonwebtoken"; // Importa jsonwebtoken para verificar tokens.
import { TOKEN_SECRET } from "../config.js"; // Importa la clave secreta para firma y verificacion de tokens desde la configuración.


// Función para el registro de datos de usuario
export const register = async (req, res) => {
  const { name, lastName, userName, email, password, confPass } = req.body;

  // Verifica si el correo ya está en uso
  const emailFound = await User.findOne({ email });
  if (emailFound)
    return res.status(400).json(["Este correo ya se encuentra en uso"]);

  // Verifica si el nombre de usuario ya está en uso
  const userNameFound = await User.findOne({ userName });
  if (userNameFound)
    return res.status(400).json(["Este usuario ya se encuentra en uso"]);

  try {
    // Hash de la contraseña para almacenamiento seguro
    const passwordHash = await bcrypt.hash(password, 10);

    // Crea un nuevo usuario con los datos proporcionados
    const newUser = new User({
      name,
      lastName,
      userName,
      email,
      password: passwordHash,
    });

    // Guarda el nuevo usuario en la base de datos
    const userSaved = await newUser.save();
    
    // Crea un token de acceso para el usuario guardado
    const token = await createAccesToken({ id: userSaved._id });
    
    // Establece una cookie con el token
    res.cookie("token", token);

    // Envía una respuesta de éxito con detalles del usuario
    res.json({
      message: "Usuario creado satisfactoriamente",
      id: userSaved._id,
      userName: userSaved.userName,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
    });
  } catch (error) {
    // Maneja cualquier error durante el proceso de registro
    res.status(500).json({ message: error.message });
  }
};

// Función para el login de usuario
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Busca al usuario por correo electrónico
    const userFound = await User.findOne({ email });
    if (!userFound)
      return res.status(400).json({ message: "Usuario no existe" });

    // Compara la contraseña proporcionada con la almacenada
    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch)
      return res.status(400).json({ message: "Contraseña incorrecta" });

    // Crea un token de acceso para el usuario
    const token = await createAccesToken({ id: userFound._id });

    // Establece una cookie con el token
    res.cookie("token", token);

    // Envía una respuesta de éxito
    res.json({
      message: "Usuario inició sesión correctamente",
    });
  } catch (error) {
    // Maneja cualquier error durante el proceso de login
    res.status(500).json({ message: error.message });
  }
};

// Función para el logout de usuario
export const logout = async (req, res) => {
  // Borra la cookie del token estableciendo una fecha de expiración en el pasado
  res.cookie("token", "", { expires: new Date(0) });
  return res.sendStatus(200); // Responde con un código de estado 200 OK
};

// Función para obtener el perfil del usuario activo
export const profile = async (req, res) => {
  // Busca al usuario por el ID almacenado en el token
  const userFound = await User.findById(req.user.id);

  if (!userFound) {
    return res.status(400).json({ message: "Usuario no encontrado" });
  }

  // Envía los detalles del usuario como respuesta
  return res.json({
    userName: userFound.userName,
  });
};

// Función que verifica el token activo del front
export const verifyToken = async (req, res) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).json({ message: "Sin autorización" });

  // Verifica el token usando la clave secreta.
  jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    if (err) return res.status(401).json({ message: "Sin autorización" });

    // Busca al usuario por el ID incluido en el token
    const userFound = await User.findById(user.id);
    if (!userFound)
      return res.status(401).json({ message: "Sin autorización" });

    // Envía los detalles del usuario como respuesta
    return res.json({
      id: userFound._id,
      userName: userFound.userName,
    });
  });
};

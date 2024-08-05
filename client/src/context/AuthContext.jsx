// Este archivo define el contexto de autenticación de la aplicación, maneja el estado de autenticación del usuario,
// y proporciona funciones para registrarse, iniciar sesión y verificar el token de autenticación.

import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth";
import Cookies from "js-cookie";

// Crea el contexto de autenticación.
export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado para almacenar la información del usuario.
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado para almacenar si el usuario está autenticado.
  const [errors, setErrors] = useState([]); // Estado para almacenar errores de autenticación.
  const [loading, setLoading] = useState(true); // Estado para almacenar el estado de carga.

    // Función para registrar un nuevo usuario.
  const signup = async (user) => {
    try {
      const res = await registerRequest(user); // Llama a la función de solicitud de registro.
      console.log(res.data); // Imprime la respuesta de la solicitud.
      setIsAuthenticated(true); // Establece el estado de autenticación a verdadero.
      setUser(res.data); // Almacena los datos del usuario.
    } catch (error) {
      setErrors(error.response.data); // Almacena los errores de la respuesta.
    }
  };

  // Función para iniciar sesión.
  const login = async (user) => {
    try {
      const res = await loginRequest(user); // Llama a la función de solicitud de inicio de sesión.
      console.log(res.data); // Imprime la respuesta de la solicitud.
      setUser(res.data); // Almacena los datos del usuario.
      setIsAuthenticated(true); // Establece el estado de autenticación a verdadero.
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data); // Almacena los errores de la respuesta si es un array.
      }
      setErrors([error.response.data.message]); // Almacena el mensaje de error de la respuesta.
    }
  };

  // useEffect que limpia los errores después de 2 segundos.
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  // useEffect que verifica el estado de autenticación al montar el componente.
  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();

      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        return setUser(null);
      }

      if (cookies.token) {
        try {
          const res = await verifyTokenRequest(cookies.token);
          if (!res.data) {
            setIsAuthenticated(false);
            setLoading(false);
            return;
          }

          setIsAuthenticated(true);
          setUser(res.data);
          setLoading(false);
        } catch (error) {
          setIsAuthenticated(false);
          setUser(null);
          setLoading(false);
        }
      }
    }
    checkLogin();
  }, []);

  // Retorna el proveedor del contexto con los valores necesarios.
  return (
    <AuthContext.Provider
      value={{
        signup,
        user,
        isAuthenticated,
        errors,
        login,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

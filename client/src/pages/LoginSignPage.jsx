// Este componente maneja la lógica y la interfaz para la página de inicio de sesión y registro. 
// Permite a los usuarios alternar entre formularios de registro e inicio de sesión, y autentica al usuario utilizando el contexto de autenticación.

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "../loginreg.css";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginSignPage() {
  // Estado local para alternar entre formulario de registro e inicio de sesión.
  const [isRegister, setIsRegister] = useState(true);
  // Desestructuración de métodos y propiedades del hook useForm.
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  // Desestructuración de métodos y propiedades del contexto de autenticación.
  const { signup, login, isAuthenticated, errors: reqError } = useAuth();
  // Hook para la navegación programática.
  const navigate = useNavigate();

  // useEffect que redirige a la página de inicio si el usuario está autenticado.
  useEffect(() => {
    if (isAuthenticated) navigate("/home");
  }, [isAuthenticated]);
  // Función para alternar entre los formularios de registro e inicio de sesión.
  const toggleForm = () => {
    setIsRegister(!isRegister);
    reset();
  };

  // Función que maneja el envío del formulario.
  const onSubmit = async (values) => {
    if (isRegister) {
      // Llama a la función signup para registrar al usuario.
      await signup(values).catch((error) => {
        console.error("Error en el registro:", error);
      });
    } else {
      // Llama a la función login para iniciar sesión.
      await login(values).catch((error) => {
        console.error("Error en el inicio de sesión:", error);
      });
    }
  };

  // Observa el valor del campo "password" para validaciones.
  const password = watch("password");

  return (
    <div
      className={`container_form ${!isRegister ? "switch" : ""}`}
      id="container"
    >
      <div className="information">
        <div className="info_childs">
          <h2>Bienvenido</h2>
          <p id="welcomeText">
            {isRegister
              ? "Únete hoy a las discusiones en tendencia, si ya tienes cuenta presiona el botón iniciar sesión."
              : "Aquí puedes iniciar sesión pero si no tienes cuenta por favor presiona el botón Crear Cuenta."}
          </p>
          <input
            type="button"
            value={isRegister ? "Iniciar Sesión" : "Crear Cuenta"}
            onClick={toggleForm}
            id="toggleButton"
          />
        </div>
      </div>
      <div className="form_information">
        <div className="form_information_childs" id="formContainer">
          <h2>{isRegister ? "Crear una cuenta" : "Iniciar Sesión"}</h2>
          {reqError.map((error, i) => (
            <div className="text-red-500 negrilla" key={i}>
              {error}
            </div>
          ))}
          <form id="registerForm" onSubmit={handleSubmit(onSubmit)}>
            {isRegister ? (
              <>
                <input
                  type="text"
                  placeholder="Nombre"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <p className="text-red-500 relative text-xs">Nombre del usurio es requerido</p>
                )}
                <input
                  type="text"
                  placeholder="Apellido"
                  {...register("lastName", { required: true })}
                />
                {errors.lastName && (
                  <p className="text-red-500 relative text-xs">
                    Apellido del usurio es requerido
                  </p>
                )}
                <input
                  type="text"
                  placeholder="Usuario"
                  {...register("userName", { required: true })}
                />
                {errors.userName && (
                  <p className="text-red-500 text-xs">Nombre de usurio es requerido</p>
                )}
                <input
                  type="text"
                  placeholder="Correo electrónico"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">Correo electrónico requerido</p>
                )}
                <input
                  type="password"
                  placeholder="Contraseña"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs">Contraseña es requerida</p>
                )}
                <input
                  type="password"
                  placeholder="Confirmar contraseña"
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) =>
                      value === password || "Contraseñas no coinciden",
                  })}
                />
                <br />
                {errors.confirmPassword && (
                  <span className="text-red-500 text-xs">
                    {errors.confirmPassword.message}
                  </span>
                )}
                <br />
                <button type="submit">Registrarse</button>
              </>
            ) : (
              <>
                <input
                  type="text"
                  id="emailInput"
                  placeholder="Correo electrónico"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-red-500">Correo electrónico requerido</p>
                )}
                <input
                  type="password"
                  id="passwordInput"
                  placeholder="Contraseña"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <p className="text-red-500">Contraseña es requerida</p>
                )}
                <button type="submit">Iniciar Sesión</button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginSignPage;

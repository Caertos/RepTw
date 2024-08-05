import { z } from "zod";

// Esquema de validación para el registro de usuario.
// Utiliza Zod para definir las reglas de validación para cada campo de registro.
// Los errores específicos se proporcionan para cada validación.

export const registerSchema = z.object({
  name: z.string({
    required_error: "Nombre requerido.", // Error si el nombre no está presente.
  }),
  lastName: z.string({
    required_error: "Apellido requerido.", // Error si el apellido no está presente.
  }),
  userName: z.string({
    required_error: "Usuario requerido.", // Error si el nombre de usuario no está presente.
  }),
  email: z
    .string({
      required_error: "Correo requerido.", // Error si el correo electrónico no está presente.
    })
    .email({
      message: "Correo no valido.", // Error si el correo electrónico no tiene un formato válido.
    }),
  password: z
    .string({
      required_error: "Contraseña requerida.", // Error si la contraseña no está presente.
    })
    .min(6, {
      message: "La contraseña debe tener mínimo 6 caracteres.", // Error si la contraseña tiene menos de 6 caracteres.
    }),
});

// Esquema de validación para el inicio de sesión.
// Utiliza Zod para definir las reglas de validación para cada campo de inicio de sesión.
// Los errores específicos se proporcionan para cada validación.

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Correo requerido.", // Error si el correo electrónico no está presente.
    })
    .email({
      message: "Correo no valido.", // Error si el correo electrónico no tiene un formato válido.
    }),
  password: z
    .string({
      required_error: "Contraseña requerida.", // Error si la contraseña no está presente.
    })
    .min(6, {
      message: "La contraseña debe tener mínimo 6 caracteres.", // Error si la contraseña tiene menos de 6 caracteres.
    }),
});
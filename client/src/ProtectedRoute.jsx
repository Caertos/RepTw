// Este componente se encarga de proteger las rutas que solo pueden ser accedidas por usuarios autenticados.
// Utiliza el contexto de autenticación para determinar si el usuario está autenticado y si la información está cargando.

import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

function ProtectedRoute() {
  // Usa el hook useAuth para obtener el estado de autenticación y el estado de carga.
  const { loading, isAuthenticated } = useAuth();
  console.log(loading, isAuthenticated);

  // Si los datos de autenticación están cargando, muestra un mensaje de carga.
  if (loading) return <h1>Cargando...</h1>;
  // Si no está cargando y el usuario no está autenticado, redirige a la página de login/registro.
  if (!loading && !isAuthenticated)
    return <Navigate to="/loginSignup" replace />;

  // Si el usuario está autenticado, renderiza los componentes hijos de la ruta protegida.
  return <Outlet />;
}

export default ProtectedRoute;

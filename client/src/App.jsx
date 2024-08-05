// Este archivo define la estructura principal de la aplicación utilizando React Router para manejar las rutas.
// También envuelve la aplicación en el proveedor de autenticación para gestionar el estado de autenticación del usuario.

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { TweetProvider } from "./context/TweetContext";

import LoginSignPage from "./pages/LoginSignPage";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    // Envuelve la aplicación en el AuthProvider para proporcionar el contexto de autenticación a todos los componentes.
    <AuthProvider>
      <TweetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/loginSignup" element={<LoginSignPage />} />
            <Route path="/" element={<h1>HOLA</h1>} />

            <Route element={<ProtectedRoute />}>
              <Route path="/home" element={<HomePage />} />
              <Route path="/tweets" element={<h1>Tuits</h1>} />
              <Route path="/add-tweet" element={<h1>Agregar tuit</h1>} />
              <Route path="/tweets/:id" element={<h1>Modificar tuit</h1>} />
              <Route path="/profile" element={<h1>Perfil</h1>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TweetProvider>
    </AuthProvider>
  );
}

export default App;

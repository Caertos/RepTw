// Este archivo es el punto de entrada principal de la aplicación React. 
// Se encarga de renderizar el componente raíz de la aplicación en el DOM.

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // Encuentra el elemento con id 'root' en el DOM y lo usa como el contenedor principal.
  // Renderiza el componente App dentro de React.StrictMode para ayudar a identificar problemas potenciales.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

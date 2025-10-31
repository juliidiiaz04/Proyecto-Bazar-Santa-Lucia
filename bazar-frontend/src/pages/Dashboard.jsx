import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import Footer from "../components/Footer"; 
import Welcome from "./Welcome"; // Importamos el nuevo componente de bienvenida
import React from 'react';

// NOTA: Recuerda que también debes crear el archivo src/pages/Welcome.jsx
// (Te lo pasé en el mensaje anterior)

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation(); // Hook para saber en qué ruta estamos

  const handleLogout = () => {
    // Elimina el token de autenticación (JWT)
    localStorage.removeItem('authToken'); 
    navigate("/"); // Redirige al Login
  };
  
  // Condición para mostrar el componente Welcome si la ruta es /dashboard o /dashboard/
  const showWelcome = location.pathname === '/dashboard' || location.pathname === '/dashboard/';

  return (
    // Usa flex-col y min-h-screen para asegurar que el footer se quede abajo
    <div className="min-h-screen bg-gray-100 flex flex-col">
      
      {/* Menú Superior (Header) */}
      <nav className="bg-lilac-dark text-white p-4 flex justify-between items-center shadow-md sticky top-0 z-10">
        <h1 className="text-xl font-bold">Bazar Santa Lucía</h1>
        
        <div className="flex items-center space-x-6 flex-shrink-0">
          <Link to="products" className="hover:bg-lilac px-3 py-2 rounded transition duration-200">
            Productos
          </Link>
          <Link to="sales" className="hover:bg-lilac px-3 py-2 rounded transition duration-200">
            Ventas
          </Link>
          <Link to="reports" className="hover:bg-lilac px-3 py-2 rounded transition duration-200">
            Reportes
          </Link>
          
          <button 
            onClick={handleLogout} 
            className="bg-red-500 hover:bg-red-600 px-3 py-2 rounded font-semibold transition duration-200"
          >
            Salir
          </button>
        </div>
      </nav>

      {/* Contenido Principal */}
      <main className="p-8 flex-grow">
        
        {showWelcome ? (
          // Muestra el componente Welcome en la ruta raíz del dashboard
          <Welcome />
        ) : (
          // Muestra el componente de la ruta hija (Products, Sales, Reports)
          <Outlet /> 
        )}
        
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
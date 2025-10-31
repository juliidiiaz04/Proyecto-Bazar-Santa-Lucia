// src/pages/Welcome.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    
    // Array para definir los botones de acceso rápido
    const quickLinks = [
        { title: "Gestión de Productos", description: "Alta, edición y control de inventario.", path: "/dashboard/products", icon: "📦" },
        { title: "Registro de Ventas", description: "Realizar transacciones y ver historial.", path: "/dashboard/sales", icon: "🛒" },
        { title: "Reportes y Estadísticas", description: "Ver ingresos, ganancias y stock.", path: "/dashboard/reports", icon: "📊" },
    ];

    return (
        <div className="text-center p-10 bg-white rounded-xl shadow-soft">
            <h1 className="text-5xl font-extrabold text-lilac-dark mb-4">
                ¡Bienvenido al Panel de Control!
            </h1>
            <p className="text-xl text-gray-700 mb-10">
                Optimiza la gestión de tu Bazar Santa Lucía hoy mismo.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Acceso Rápido a Módulos</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {quickLinks.map((link) => (
                    <Link to={link.path} key={link.title}
                        className="p-6 bg-gray-50 border-2 border-lilac rounded-xl hover:bg-lilac-dark hover:text-white transform transition duration-300 ease-in-out hover:scale-105 shadow-md flex flex-col items-center justify-center text-left"
                    >
                        <span className="text-5xl mb-3">{link.icon}</span>
                        <h3 className="text-xl font-bold mb-2">{link.title}</h3>
                        <p className="text-sm opacity-90">{link.description}</p>
                    </Link>
                ))}
            </div>

            <p className="mt-12 text-sm text-gray-500">
                Usa el menú superior o estos accesos rápidos para empezar.
            </p>
        </div>
    );
};

export default Welcome;
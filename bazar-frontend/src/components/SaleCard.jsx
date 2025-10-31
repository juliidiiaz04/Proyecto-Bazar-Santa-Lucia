import React from 'react';

// Función utilitaria para dar formato de moneda ARS
const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2,
    }).format(value);
};

// Función para formatear la fecha
const formatDate = (dateString) => {
    try {
        const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleDateString('es-AR', options);
    } catch (e) {
        return dateString;
    }
};


function SaleCard({ sale, onViewDetails }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-soft m-2 border-l-4 border-lilac transition-shadow hover:shadow-xl">
      
      <h3 className="text-xl font-bold text-lilac-dark mb-2">Venta #{sale.id}</h3>
      
      <p className="text-gray-600 text-sm">
        <span className="font-semibold">Fecha:</span> {formatDate(sale.date)}
      </p>
      
      <p className="text-gray-800 text-lg my-2">
        <span className="font-semibold">Total:</span> 
        <span className="font-extrabold ml-1">{formatCurrency(sale.total)}</span>
      </p>

      <button
        onClick={() => onViewDetails(sale.id)}
        className="mt-3 w-full bg-blue-500 text-white py-1 rounded-lg text-sm hover:bg-blue-600 transition"
      >
        Ver Detalle
      </button>
    </div>
  );
}

export default SaleCard;
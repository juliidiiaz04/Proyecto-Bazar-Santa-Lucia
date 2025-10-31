import React from 'react';

// Función utilitaria para dar formato de moneda ARS
const formatCurrency = (value) => {
    if (isNaN(value) || value === null) return "$0.00"; 
    
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2,
    }).format(value);
};

// Estilos condicionales basados en el tipo de reporte
const getStyleByType = (type) => {
    switch (type) {
        case 'TOTAL_SALES':
            return { color: 'border-green-500', icon: '💰' };
        case 'PRODUCTS_SOLD':
            return { color: 'border-blue-500', icon: '📦' };
        case 'LOW_STOCK_COUNT':
            return { color: 'border-red-500', icon: '⚠️' };
        default:
            return { color: 'border-lilac-dark', icon: '📊' };
    }
};

function ReportCard({ report, onDownloadDetails }) {
    const { color, icon } = getStyleByType(report.type);
    
    // Asumimos que sólo los tipos de venta/ganancia son moneda
    const isCurrency = report.type === 'TOTAL_SALES' || report.type === 'NET_PROFIT';
    const displayValue = isCurrency 
        ? formatCurrency(report.value) 
        : report.value;

    return (
        <div className={`bg-white p-6 rounded-xl shadow-soft m-2 border-b-4 ${color} transition-shadow hover:shadow-lg`}>
            
            <p className="text-3xl mb-2">{icon}</p>

            <h3 className="text-xl font-bold text-gray-800 mb-1">
                {report.title}
            </h3>
            
            <p className="text-4xl font-extrabold text-lilac-dark mb-3">
                {displayValue}
            </p>

            <p className="text-sm text-gray-500 mb-4">{report.description}</p>
            
            <button
                onClick={() => onDownloadDetails(report.type)}
                className="w-full bg-blue-500 text-white py-2 rounded-lg text-sm hover:bg-blue-600 transition"
            >
                Descargar Detalles
            </button>
        </div>
    );
}

export default ReportCard;
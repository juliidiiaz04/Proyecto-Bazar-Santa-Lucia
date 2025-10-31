import React, { useState, useEffect } from "react";
import ReportCard from "../components/ReportCard"; 

// Datos de prueba (Reemplazar con fetch real al backend)
const dummyReportData = [
    { id: 1, title: "Ingresos del Mes", description: "Ventas netas de Octubre 2025", value: 75000.50, type: 'TOTAL_SALES', isCurrency: true },
    { id: 2, title: "Productos Vendidos", description: "Unidades totales vendidas este mes", value: 215, type: 'PRODUCTS_SOLD', isCurrency: false },
    { id: 3, title: "Productos Bajo Stock", description: "Artículos con stock menor a 5", value: 4, type: 'LOW_STOCK_COUNT', isCurrency: false },
    { id: 4, title: "Ganancia Neta Estimada", description: "Ingresos - Costos Estimados", value: 35000.00, type: 'NET_PROFIT', isCurrency: true },
];

export default function Reports() {
  const [reportData, setReportData] = useState(dummyReportData);
  const [loading, setLoading] = useState(false); // Cambia a true cuando uses la API
  
  // R.F. 8: Función para manejar la exportación (Placeholder)
  const handleExport = (reportType) => {
    alert(`Preparando exportación de reporte: ${reportType}. Esto se conectará al backend para generar el archivo.`);
    // Lógica real: fetch(API_URL + '/export?type=' + reportType)
  };

  if (loading) {
    return <div className="text-center p-8 text-gray-600">Cargando reportes...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-8 text-lilac-dark">📈 Panel de Reportes Automáticos</h2>
      
      {/* Botón de exportación general */}
      <div className="mb-8 text-right">
        <button
          onClick={() => handleExport('Reporte General Mensual')}
          className="bg-lilac-dark text-white p-3 rounded-lg hover:bg-lilac transition font-semibold shadow-md"
        >
          ⬇️ Exportar Reporte Mensual Completo
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Mapeamos los datos de ReportCard */}
        {reportData.map(report => (
             <ReportCard 
                key={report.id} 
                report={report} 
                onDownloadDetails={handleExport} 
             />
        ))}
      </div>
    </div>
  );
}
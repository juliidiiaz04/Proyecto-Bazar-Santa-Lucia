import { useState, useEffect } from "react";
import SaleCard from "../components/SaleCard";

const SALES_API_URL = 'http://localhost:3000/api/sales'; 

export default function Sales() {
  const [salesHistory, setSalesHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  // Funciones PLACEHOLDER: La lógica de registro de venta iría en un componente aparte (e.g., SaleForm)
  const handleViewDetails = (id) => alert(`Cargar detalle de venta #${id} desde el backend.`);
  const handleNewSale = () => alert("Redirigir o abrir modal para nueva venta.");

  // Simulación de carga de historial de ventas (Reemplazar con fetch real)
  const fetchSales = async () => {
    setLoading(true);
    try {
      // Aquí iría la llamada a fetch con el token
      // const response = await fetch(SALES_API_URL, { headers: { 'Authorization': `Bearer ${token}` } });
      
      // Usamos datos de prueba por ahora
      setSalesHistory(dummySales); 
    } catch (error) {
      console.error("Error al cargar historial de ventas:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSales();
  }, []); 

  if (loading) {
    return <div className="text-center p-8 text-gray-600">Cargando historial...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-lilac-dark">🛒 Registro y Control de Ventas</h2>

      <button 
        onClick={handleNewSale}
        className="mb-8 bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition font-semibold shadow-md"
      >
        ➕ Iniciar Nueva Venta
      </button>
      
      <h3 className="text-xl font-bold mb-4 text-gray-800">Historial de Transacciones</h3>

      {/* Historial de Ventas usando SaleCard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {salesHistory.map((sale) => (
          <SaleCard 
            key={sale.id} 
            sale={sale} 
            onViewDetails={handleViewDetails} 
          />
        ))}
      </div>
    </div>
  );
}

// Datos de prueba (Dummy Data)
const dummySales = [
    { id: 101, total: 5000.00, date: new Date().toISOString(), products: ['Producto 1'], quantity: 1 },
    { id: 102, total: 750.50, date: new Date(Date.now() - 86400000).toISOString(), products: ['Producto 2'], quantity: 2 },
    { id: 103, total: 12500.00, date: new Date(Date.now() - 172800000).toISOString(), products: ['Producto 3'], quantity: 1 },
];
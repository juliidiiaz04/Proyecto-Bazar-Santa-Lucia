import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard"; 

const PRODUCTS_API_URL = 'http://localhost:3000/api/products'; 

export default function Products() {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true);

  // Funciones PLACEHOLDER que se conectarán al backend (POST, PUT, DELETE)
  const handleEdit = (id) => alert(`Abrir formulario para editar producto ${id}.`);
  const handleAdd = () => alert("Abrir formulario para nuevo producto.");
  const handleDelete = async (id) => {
    if (!window.confirm(`¿Seguro que quieres eliminar el producto ${id}?`)) return;
    console.log(`Llamada API: DELETE ${PRODUCTS_API_URL}/${id}`);
    // Aquí iría la lógica fetch DELETE
    setProducts(products.filter(p => p.id !== id)); // Simulación de eliminación exitosa
  };

  // Función para obtener productos desde la API (READ)
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('authToken'); 
      const response = await fetch(PRODUCTS_API_URL, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        // En caso de error, muestra datos de prueba para seguir trabajando
        setProducts(dataDummy);
        console.error("Error al cargar productos. Usando datos de prueba.");
      }
    } catch (error) {
      setProducts(dataDummy); // Usa datos de prueba si hay un error de conexión
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []); 

  if (loading) {
    return <div className="text-center p-8 text-gray-600">Cargando inventario...</div>;
  }
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-lilac-dark">📦 Gestión de Productos</h2>
      
      <button 
        onClick={handleAdd}
        className="mb-8 bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition font-semibold shadow-md"
      >
        ➕ Añadir Nuevo Producto
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard 
            key={p.id} 
            product={p} 
            onEdit={handleEdit}
            onDelete={handleDelete}
            viewMode="ADMIN" 
          />
        ))}
      </div>
    </div>
  );
}

// Datos de prueba (Dummy Data)
const dataDummy = [
    { id: 1, name: "Cartera de Cuero Negra", category: "Accesorios", price: 5000, stock: 10 },
    { id: 2, name: "Billetera Premium", category: "Accesorios", price: 2500, stock: 3 },
    { id: 3, name: "Bufanda de Lana", category: "Invierno", price: 1500, stock: 0 },
    { id: 4, name: "Taza de Cerámica", category: "Hogar", price: 800, stock: 25 },
];
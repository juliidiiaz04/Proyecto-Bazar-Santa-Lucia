import React from 'react';

const LOW_STOCK_THRESHOLD = 5; 

function ProductCard({ product, onEdit, onDelete, onAddToCart, viewMode = 'ADMIN' }) {
  
  const isLowStock = product.stock <= LOW_STOCK_THRESHOLD && product.stock > 0;
  const isOutOfStock = product.stock === 0;
  
  const stockClass = isOutOfStock 
    ? "text-red-600 font-bold" 
    : isLowStock ? "text-orange-500 font-bold" : "text-gray-700";

  return (
    <div className={`bg-white p-4 rounded-xl shadow-soft m-2 border-l-4 ${isOutOfStock ? 'border-red-500' : 'border-lilac'}`}>
      <h3 className="text-lg font-semibold truncate">{product.name}</h3>
      <p className="text-sm text-gray-600">Categoría: {product.category || 'N/A'}</p>
      <p className="text-gray-600">Precio: <span className="font-medium">${product.price ? product.price.toFixed(2) : '0.00'}</span></p>
      
      <p className={stockClass}>
        Stock: {product.stock}
        {isOutOfStock && <span className="ml-2 text-sm">(AGOTADO)</span>}
        {isLowStock && <span className="ml-2 text-sm">(¡Stock Bajo!)</span>}
      </p>

      <div className="mt-3 flex justify-between gap-2">
        
        {/* Vista de Ventas (Para añadir al carrito) */}
        {viewMode === 'SALES' && (
          <button
            onClick={() => onAddToCart(product)}
            disabled={isOutOfStock}
            className="flex-grow bg-green-500 text-white py-1 rounded-lg hover:bg-green-600 disabled:bg-gray-400 transition"
          >
            {isOutOfStock ? '🚫 Sin Stock' : '🛒 Agregar'}
          </button>
        )}

        {/* Vista de Administración (Para CRUD) */}
        {viewMode === 'ADMIN' && (
          <>
            <button
              onClick={() => onEdit(product.id)}
              className="w-1/2 bg-blue-500 text-white py-1 rounded-lg hover:bg-blue-600 transition text-sm"
            >
              Editar
            </button>
            <button
              onClick={() => onDelete(product.id)}
              className="w-1/2 bg-red-500 text-white py-1 rounded-lg hover:bg-red-600 transition text-sm"
            >
              Eliminar
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
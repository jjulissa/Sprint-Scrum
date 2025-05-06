import React from 'react';
import Producto from './Producto';

const productos = [
  { id: 1, nombre: 'Producto A', precio: 10 },
  { id: 2, nombre: 'Producto B', precio: 15 },
  { id: 3, nombre: 'Producto C', precio: 20 },
];

const ProductosList = () => {
  const handleAgregar = (producto) => {
    alert(`Agregar "${producto.nombre}" al carrito (no funcional aún)`);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Productos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {productos.map(producto => (
          <Producto key={producto.id} producto={producto} onAgregar={handleAgregar} />
        ))}
      </div>
    </div>
  );
};

export default ProductosList;

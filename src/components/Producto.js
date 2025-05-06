import React from 'react';

const Producto = ({ producto, onAgregar }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-lg font-semibold">{producto.nombre}</h3>
      <p className="text-gray-700">Precio: ${producto.precio}</p>
      <button
        onClick={() => onAgregar(producto)}
        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default Producto;

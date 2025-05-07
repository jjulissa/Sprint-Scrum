import React, { useState } from 'react';

const Pago = ({ onPagar, onCancelar }) => {
  const [metodo, setMetodo] = useState('tarjeta');
  const [valor, setValor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valor.trim() !== '') {
      onPagar();
    }
  };

  return (
    <form className="bg-gray-50 p-4 rounded-lg shadow mt-4" onSubmit={handleSubmit}>
      <h3 className="text-lg font-semibold mb-3">Datos de pago</h3>
      <div className="flex gap-4 mb-3">
        <label className="flex items-center">
          <input
            type="radio"
            name="metodo"
            value="tarjeta"
            checked={metodo === 'tarjeta'}
            onChange={() => setMetodo('tarjeta')}
            className="mr-1"
          />
          Tarjeta
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="metodo"
            value="codigo"
            checked={metodo === 'codigo'}
            onChange={() => setMetodo('codigo')}
            className="mr-1"
          />
          Código
        </label>
      </div>
      <input
        type={metodo === 'tarjeta' ? 'text' : 'password'}
        className="w-full border rounded px-3 py-2 mb-3"
        placeholder={metodo === 'tarjeta' ? 'Número de tarjeta' : 'Código'}
        value={valor}
        onChange={e => setValor(e.target.value)}
        required
      />
      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
        >
          Pagar
        </button>
        <button
          type="button"
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
          onClick={onCancelar}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default Pago;

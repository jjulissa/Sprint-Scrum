// src/components/Pago.js
import React from 'react';

const Pago = ({ onPagar }) => {
  // Simula un pago exitoso al hacer clic
  return (
    <div style={{ marginTop: 16 }}>
      <button onClick={onPagar} style={{ padding: '10px 20px', background: '#00C851', color: '#fff', border: 'none', borderRadius: 4 }}>
        Pagar
      </button>
    </div>
  );
};

export default Pago;

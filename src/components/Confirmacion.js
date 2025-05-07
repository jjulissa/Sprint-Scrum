// src/components/Confirmacion.js
import React from 'react';
import Toast from './Toast';

const Confirmacion = ({ show }) => (
  <Toast show={show} message="¡Compra realizada con éxito!" type="success" />
);

export default Confirmacion;

// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import LoginForm from "./components/LoginForm";
import ProductosList from "./components/ProductoList";
import Carrito from "./components/Carrito";

function ProductosCarritoPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
    <main className="w-full max-w-6xl flex flex-col md:flex-row gap-8 px-4">
      <section className="flex-1">
        <ProductosList />
      </section>
      <aside className="w-full md:w-96">
        <Carrito />
      </aside>
    </main>
  </div>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/productos" element={<ProductosCarritoPage />} />
          <Route path="*" element={<LoginForm />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;

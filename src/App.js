import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import { CartProvider } from './context/CartContext';
import ProductosList from './components/ProductoList';
import Carrito from './components/Carrito'; 
import Header from './components/Header.jsx'; 
import Login from './components/Login.jsx'; 


function App() {
  return ( 
    <> 
    <Router> 
      <CartProvider> 
        <Header /> 
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
      </CartProvider>  

      <Routes>
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

import './App.css';
import { CartProvider } from './context/CartContext';
import ProductosList from './components/ProductoList';

function App() {
  return (
    <CartProvider>
    <main className="w-full max-w-6xl flex flex-col md:flex-row gap-8 px-4">
    <section className="flex-1">
      <ProductosList />
    </section>
  </main>
  </CartProvider>
  );
}

export default App;
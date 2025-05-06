import './App.css';
import ProductosList from './components/ProductoList';

function App() {
  return (
    <main className="w-full max-w-6xl flex flex-col md:flex-row gap-8 px-4">
    <section className="flex-1">
      <ProductosList />
    </section>
  </main>
  );
}

export default App;

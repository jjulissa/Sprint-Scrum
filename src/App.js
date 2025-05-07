import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  return (
    <CartProvider>
    <div className="bg-orange-600">
      <h1 className='text-white'> @ Sprint Scrum </h1>
    </div>
  </CartProvider>

  );
}

export default App;

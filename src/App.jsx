import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { CarritoProvider } from './componentes/Context/CarritoContext';
import Cart from './componentes/Cart/Cart';
import Checkout from './componentes/Checkout/Checkout';

function App() {
  return (
    <>
      <BrowserRouter>
      <CarritoProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/categoria/:idCategoria" element={<ItemListContainer/>} />
        <Route path="cart" element={<Cart/>} /> 
        <Route path="checkout" element={<Checkout/>} />
        <Route path="/item/:idItem" element={<ItemDetailContainer/>} />
      </Routes>
      </CarritoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

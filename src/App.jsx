import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import ProductCard from './componentes/ProductCard/ProductCard';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="La mejor carta del mundo" />
      <ProductCard />
    </>
  );
}

export default App;

import {useState, useEffect} from 'react'
import './ItemListContainer.css'
import {getProductos, getProductosPorCategoria} from '../asyncmock'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const {idCategoria} = useParams();
  useEffect(() => {

    const funcionProductos = idCategoria ? getProductosPorCategoria: getProductos
      
    funcionProductos (idCategoria)
          .then (response => setProductos (response))
          .catch (error => console.error(error))
  },  [idCategoria])
  
  return (
    <div>
      <h2>Productos</h2>
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer
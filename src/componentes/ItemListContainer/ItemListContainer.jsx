import {useState, useEffect} from 'react'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { db } from '../../services/firebase/config'
import { collection, query, getDocs, where} from 'firebase/firestore'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const {idCategoria} = useParams();
  
  useEffect( ()=> {
    const misProductos = idCategoria ? query(collection(db, "productos"), where("idCat", "==", idCategoria)): collection(db, "productos");

    getDocs(misProductos)
        .then(res=> {
            const nuevosProductos = res.docs.map( doc => {
                const data = doc.data()
                return {id:doc.id, ...data}
            })
            setProductos(nuevosProductos);
        })
        .catch(error => console.log(error))
}, [])
  
  return (
    <div>
      <h2>Productos</h2>
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer
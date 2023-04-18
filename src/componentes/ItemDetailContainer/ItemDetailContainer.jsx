import { getUnProducto } from "../asyncmock";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [productos, setProductos] = useState(null);
    
    const {idItem} = useParams();

  useEffect(() => {
      getUnProducto (idItem)
          .then (response => setProductos (response))
  },  [idItem])

    return (
    <div>
        <ItemDetail {...productos}/>
    </div>
  )
}

export default ItemDetailContainer
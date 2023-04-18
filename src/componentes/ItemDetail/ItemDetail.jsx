import "./ItemDetail.css"

const ItemDetail = ({id, nombre, precio, img}) => {
    return (
      <div className='contenedorItem'>
          
          <h2>Nombre: {nombre}</h2>
          <h3>Precio: {precio}</h3>
          <h4>ID: {id}</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At consectetur porro possimus, nisi commodi id in sit blanditiis nulla adipisci voluptates! Doloribus porro unde nam illum tempore aliquam quo consequuntur?</p>
          <img className= 'imgProducto'src={img} alt={nombre} />
      </div>
  )
}

export default ItemDetail 
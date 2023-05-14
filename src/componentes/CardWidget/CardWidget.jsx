import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import './CardWidget.css'
import { CarritoContext } from '../Context/CarritoContext'

const CardWidget = () => {
    const {carrito} = useContext(CarritoContext);
    const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);
    const imgCarrito = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwvz9BIkJXKMIJNc99dZ8t9mqJ_J2B5bK4VQ&usqp=CAU"
  return (
    <Link to='/cart'>
       <img className='imgCarrito' src= {imgCarrito} alt="Carrito" />
    {totalCantidad}
    </Link>
  )
}

export default CardWidget


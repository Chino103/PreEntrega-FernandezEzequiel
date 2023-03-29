import React from 'react'
import './CardWidget.css'

const CardWidget = () => {
    const imgCarrito = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwvz9BIkJXKMIJNc99dZ8t9mqJ_J2B5bK4VQ&usqp=CAU"
  return (
    <div>
        <img className='imgCarrito' src= {imgCarrito} alt="Carrito" />
        <strong>4</strong>
    </div>
  )
}

export default CardWidget
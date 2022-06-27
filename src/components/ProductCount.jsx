import React, { useState } from 'react'
import { Container, Button } from 'react-bulma-components'
// import './ItemCount.css'

const ProductCount = ({ quantity, setQuantity, addToCart }) => {
    const sumar = () => { setQuantity(quantity + 1) }
    const restar = () => {
        quantity > 1 ? setQuantity(quantity - 1) : alert('No puedes quitar más productos')
    }

    return (
        <>
            <Container m={3} display='flex' flexWrap='wrap' justifyContent='center' alignItems='center'>
                <Button onClick={sumar}>+</Button>
                <p style={{width: '75px'}}>{quantity}</p>
                <Button onClick={restar}>-</Button>
            </Container>
            <Button onClick={() => {addToCart()}}  color="info">Agregar al Carrito</Button>
        </>

    )
}

export default ProductCount

import React, { useState } from 'react'
import { Container } from 'react-bulma-components'
// import './ItemCount.css'

const ProductCount = ({ inicial }) => {
    const [count, setCount] = useState(inicial)

    const sumar = () => { setCount(count + 1) }
    const restar = () => {
        count > inicial ? setCount(count - 1) : alert('No puedes quitar más productos')
    }

    return (
        <Container alignItems='center'>
            <button onClick={sumar}>+</button>
            <h2>{count}</h2>
            <button onClick={restar}>-</button>
        </Container>
    )
}

export default ProductCount

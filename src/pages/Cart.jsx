import { useContext } from 'react'
import { Container, Heading, Section } from 'react-bulma-components'
import { CartContext } from '../contexts/CartContext'

export default function Cart() {
  const {cart, getItemQty} = useContext(CartContext)

  return (
    <Section>
      <Container>
        <Heading>Orden de compra</Heading>
        {cart.length <= 0 
        ? <Container>
          <Heading>EL CARRITO DE COMPRAS ESTÁ VACÍO</Heading>
        </Container>
        : <Heading>EL CARRITO DE COMPRAS TIENE {getItemQty()} PRODUCTOS</Heading>}
      </Container>
    </Section>
  )
}
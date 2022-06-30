import 'bulma/css/bulma.min.css';
import { useContext, useState } from 'react';
import { Button, Columns, Container, Heading, Image, Section } from 'react-bulma-components';
import { Link } from 'react-router-dom';
import ProductCount from './ProductCount';
import { CartContext } from '../contexts/CartContext';

const ProductDetail = ({product}) => {
    const { id, title, description, regularPrice, imagen} = product

  
    const [quantity, setQuantity] = useState(1)
    const [shown, setShown] = useState(true)

    const {isInCart, addItem} = useContext(CartContext)

    const addToCart = () => {
        alert(`Añadirás ${quantity} productos`)
        setShown(false)
        isInCart(id)
        addItem(product, quantity)
    }


    return (
        <Section>
            <Container>
                <Columns>
                    <Columns.Column size={3}>
                        <Heading>{title}</Heading>
                        <Heading subtitle>{title}</Heading>
                        <p>{description}</p>
                    </Columns.Column>
                    <Columns.Column size={5}>
                        <Image src={imagen} alt={"imagen_"+id}/>
                    </Columns.Column>
                    <Columns.Column size={4} textAlign='center'>
                        <Heading subtitle>$ {regularPrice}.00</Heading>
                        {shown === true ? <ProductCount quantity={quantity} setQuantity= {setQuantity} addToCart={addToCart}/> : <Button color='info'><Link to={'/cart'} style={{color: 'white'}}>Ir al carrito</Link></Button>}
                    </Columns.Column>
                </Columns>
            </Container>
        </Section>
    )
}

export default ProductDetail
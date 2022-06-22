import React from 'react'
import 'bulma/css/bulma.min.css';
import { Button, Columns, Container, Heading, Image, Section } from 'react-bulma-components';
import ProductCount from './ProductCount';

const ProductDetail = ({product}) => {
    const { id, title, description, regularPrice, imagen} = product

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
                        <ProductCount inicial={1}/>
                        <Button color="info">Agregar al Carrito</Button>
                    </Columns.Column>
                </Columns>
            </Container>
        </Section>
    )
}

export default ProductDetail
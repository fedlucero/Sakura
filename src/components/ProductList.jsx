import 'bulma/css/bulma.min.css';
import React from 'react';
import { Container } from 'react-bulma-components';
import Product from './Product';

const ProductList = ({ productos }) => {
    return (
        <>
            <Container display='flex' flexWrap='wrap' justifyContent='center'>
                {productos?.map(product => <Product key={product.id} product={product} />)}
            </Container>
        </ >
    )
}

export default ProductList

import React, { useEffect, useState } from 'react';
import ProductDetail from '../components/ProductDetail';
import {useParams} from 'react-router-dom';

export default function ProductDetailContainer() {
    const { id } = useParams();
    const [product, setProduct] = useState();

    useEffect(() => {
        fetch('../products.json')
        .then( res => res.json())
        .then( data => {
            const prodFound = data.find( prod => prod.id == id)
            setProduct(prodFound);
        })
        .catch( error => console.error( error ))
    },[id])

    return (
        <>
            {product ? <ProductDetail product={product} /> : console.log('item undefined') }
        </ >
    )
}

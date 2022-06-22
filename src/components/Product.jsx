import React from 'react';
import 'bulma/css/bulma.min.css';
import { Button, Card, Content, Heading  } from 'react-bulma-components';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { id, title, imagen} = product

    return (
        <Card style={{ width: 500, margin: '25px' }} class="has-background-grey-light">
            <Card.Image
                size="4by3"
                src={imagen}
                href="#"
            />
            <Card.Content textAlign='center' >
                <Heading size={4} >{title}</Heading>
                <Content>
                    <Button color="dark">
                        <Link to={"/item/"+id} style={{color:'#80CE9C'}}>Mas</Link>
                    </Button>
                </Content>
            </Card.Content>
        </Card>
    );
}

export default Product
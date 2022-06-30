import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bulma/css/bulma.min.css';
import { Icon } from "react-bulma-components";
import {useContext} from 'react';
import {CartContext} from '../contexts/CartContext';
import './CartWidget.css';


export default function CartWidget() {
    const {getItemQty} = useContext(CartContext)

	return (
		<>
            <Icon
                color='default'
                size='large'
                style={{fontSize: '43px'}}
            >
                <FontAwesomeIcon icon={faCartShopping} />
            </Icon>
			{getItemQty() <= 0 ? '' : <span className='cartNumber'>{getItemQty()}</span>}
		</>
	);
}
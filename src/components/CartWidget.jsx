import 'bulma/css/bulma.min.css';
import { Icon } from "react-bulma-components";
import './CartWidget.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';


export default function CartWidget({quantity}) {
	return (
		<>
            <Icon
                color='default'
                size='large'
                style={{fontSize: '43px'}}
            >
                <FontAwesomeIcon icon={faCartShopping} />
            </Icon>
			<span className='cartNumber'>{quantity}</span>
		</>
	);
}
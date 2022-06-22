import 'bulma/css/bulma.min.css';
import { Navbar, Heading } from "react-bulma-components";
import { Link } from "react-router-dom";
import CartWidget from './CartWidget';

export default function NavBar() {

  return (
    <Navbar fixed='top' transparent>
      <Navbar.Brand>
        <Navbar.Item>
          <Link to={'/home'}>
            <Heading>Generative art</Heading>
          </Link>
        </Navbar.Item>
        <Navbar.Burger renderAs='a' aria-label="menu" data-target="navBarMenu"/>
      </Navbar.Brand>
      <Navbar.Menu id='navBarMenu' >
        <Navbar.Container align='right'>
          <Navbar.Item>
            <Link to={'/home'}>
              <Heading subtitle>Home</Heading>
            </Link>
          </Navbar.Item>
          <Navbar.Item hoverable>
            <Navbar.Link>
              <Link to={'/category/all'}>
                <Heading subtitle>Art</Heading>
              </Link>
            </Navbar.Link>
            <Navbar.Dropdown>
              <Navbar.Item renderAs='a' value='item'>
                <Link to={'/category/saku'}>Sakura</Link>
              </Navbar.Item>
              <Navbar.Item renderAs='a' value='item'>
                <Link to={'/category/sakunite'}>Sakura Nite</Link>
              </Navbar.Item>
            </Navbar.Dropdown>
          </ Navbar.Item>
          <Navbar.Item>
            <Link to={'/contact'}>
              <Heading subtitle>Contacto</Heading>
            </Link>
          </Navbar.Item>
        </Navbar.Container>
        <CartWidget quantity={2} />

      </Navbar.Menu>
    </Navbar>

  );
}

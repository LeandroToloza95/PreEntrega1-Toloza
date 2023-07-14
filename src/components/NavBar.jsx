import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from './CartWidget';
import data from '../data/products.json'

// const menu1=[{categoria:"Home",link:"/#home"},
// {categoria:"Nuestros Productos",link:"/#Productos"},
// {categoria:"Quienes somos",link:"/#Nosotros"}
// ]

const menu_inicial = data.map(products => products.difficulty)
const menu = new Set(menu_inicial)

console.log([...menu])

export const NavBar = (prop) => {
  return <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>
        My ecommerce
      </Navbar.Brand>
      <Nav className="me-auto">
        {[...menu].map((item) =>
          <NavLink key={item} className='nav-link' to={`/category/${item}`}>
            {item}
          </NavLink>)}
      </Nav>
      <CartWidget />
    </Container>
  </Navbar>
}

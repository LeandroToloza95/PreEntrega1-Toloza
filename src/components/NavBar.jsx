import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from './CartWidget';

const menu=[{categoria:"Home",link:"/#home"},
{categoria:"Nuestros Productos",link:"/#Productos"},
{categoria:"Quienes somos",link:"/#Nosotros"}
]

export const NavBar = (prop) => {
    return       <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href={menu[0].link}>My ecommerce</Navbar.Brand>
      <Nav className="me-auto">
        {menu.map((item)=><Nav.Link href={item.link}>{item.categoria}</Nav.Link>)}
        
      </Nav>
      <CartWidget/>
    </Container>
  </Navbar>
}

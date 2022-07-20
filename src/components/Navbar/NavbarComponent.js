import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import "./NavbarComponent.scss"
import Cartwidget from "../CartWidget/CartWidget"
import { Link } from 'react-router-dom'

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
        <Container>
            <Navbar.Brand className='NavbarBrand navbr'>
                <Link className="link-nav" to="/">
                    <img
                    alt="logo"
                    src="/imgs/logo1.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />
                    Mila Berowi
                </Link>
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">

                    <Nav.Link as={Link} to={'/category/swtr'}>
                       Sweaters 
                    </Nav.Link>

                    <Nav.Link as={Link} to="/category/scf">
                        Bufandas
                    </Nav.Link>


                    <NavDropdown title="Colecciones" className='bg-succes' id="collasible-nav-dropdown">
                        <NavDropdown.Item className='bg-succes' as={Link} to="/category/f">
                            
                                Otoño
                            
                        </NavDropdown.Item>

                        <NavDropdown.Item className='bg-succes' as={Link} to="/category/w">
                        
                            invierno
                        
                        </NavDropdown.Item>

                        <NavDropdown.Divider />

                        <NavDropdown.Item className='bg-succes' as={Link} to="/category/all">
                           
                               Todas
        
                        </NavDropdown.Item>
                        
                    </NavDropdown>
                </Nav>   
                <Nav>
                    <Nav.Link as={Link} to="/shipping">
                            <i className="bi bi-send"></i>
                                Shipping
                    </Nav.Link>

                    <Nav.Link eventKey={2} as={Link} to="/envios" >
                            <i className="bi bi-phone"></i>
                            Contacto    
                    </Nav.Link>

                <Nav.Link as={Link} to="/cart"><Cartwidget/> </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        
    </Navbar>
  )
}

export default NavbarComponent
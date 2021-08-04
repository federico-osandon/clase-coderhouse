//import {Navbar, Nav} from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
// import { Link } from 'react-router-dom/Link'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import CartWidget from './CartWidget'


const NavBar = () => {

    return (
       <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link className="btn btn-outline-primary" to="/">Fede el mejor</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to="/category/adultos" className="btn btn-outline-primary">Adultos</NavLink>
                    <NavLink to="/category/ninos" className="btn btn-outline-primary">Niños</NavLink>
                    {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Zapatillas</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Acción</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Pastas</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Acción</NavDropdown.Item>
                    </NavDropdown> */}
                    </Nav>
                    <Nav>
                    {/* <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
            <CartWidget/>
        </Navbar> 
          </div>
    )
}
export default NavBar

import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
        <Navbar.Brand as={NavLink} to="/" className="ms-3">
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/products">
              Products
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cart">
              Cart
            </Nav.Link>
            {/* <NavDropdown title='Admin'>
            <NavDropdown.Item as={NavLink} to='/pedidos'>Pedidos</NavDropdown.Item>
          </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/auth">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;

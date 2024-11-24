import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" collapseOnSelect={true}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Status</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Examples" id="basic-nav-dropdown" active>
              <NavDropdown.Item as={Link} to="/simple">Simple</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/simple-cards">Simple cards</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/cards-with-commit">Cards with commit</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/simple-table">Simple table</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/table-with-commits">Table with commits</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Ideas" id="basic-nav-dropdown" active>
              <NavDropdown.Item as={Link} to="/multiple-environments">Multiple environments</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services-status">Services status</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;

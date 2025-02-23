import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" collapseOnSelect={true}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Status</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
}

export default Menu;

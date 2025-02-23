import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => (
  <Container fluid={true}>
    <footer className="footer mt-auto py-3">
      <Row className="mt-3">
        <Col>
          <hr />
          <p className="text-center text-light mb-0">
            <a href="https://zdielaj.si" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(69, 126, 243)', textDecoration: 'none' }}>Zdielaj.si</a>
          </p>
        </Col>
      </Row>      
    </footer>
  </Container>
);

export default Footer;

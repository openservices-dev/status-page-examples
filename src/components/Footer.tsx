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
            <a href="https://openservices.dev" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(0, 191, 99)', textDecoration: 'none' }}>OpenServices.dev</a>
          </p>
        </Col>
      </Row>      
    </footer>
  </Container>
);

export default Footer;

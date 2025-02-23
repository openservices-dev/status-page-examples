import type { FunctionComponent } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BarLoader from '../../components/BarLoader';

const SimpleLoader: FunctionComponent = () => {
  return (
    <>
      <Row className="mt-5">
        <Col className="text-center">
          <BarLoader As="div" style={{ height: '10rem', width: '10rem', margin: '0 auto' }} />
          <BarLoader As="h1" style={{ width: '40%', minWidth: 400, margin: '0 auto' }}>&nbsp;</BarLoader>
        </Col>
      </Row>
      <Row md={4} sm={2} xs={2} className="mt-4 text-center">
        <Col>
          <BarLoader As="p" style={{ maxWidth: '70%', margin: '0 auto' }}>&nbsp;</BarLoader>
        </Col>
        <Col>
          <BarLoader As="p" style={{ maxWidth: '70%', margin: '0 auto' }}>&nbsp;</BarLoader>
        </Col>
        <Col>
          <BarLoader As="p" style={{ maxWidth: '70%', margin: '0 auto' }}>&nbsp;</BarLoader>
        </Col>
        <Col>
         <BarLoader As="p" style={{ maxWidth: '70%', margin: '0 auto' }}>&nbsp;</BarLoader>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={{ span: 6, offset: 3 }}>
          <hr />
          <BarLoader As="p">&nbsp;</BarLoader>
          <hr />
          <BarLoader As="p">&nbsp;</BarLoader>
          <hr />
          <BarLoader As="p">&nbsp;</BarLoader>
          <hr />
          <BarLoader As="p">&nbsp;</BarLoader>
          <hr />
        </Col>
      </Row>
    </>
  );
}

export default SimpleLoader;
